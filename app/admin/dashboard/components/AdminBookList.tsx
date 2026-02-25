"use client";

import { useState } from "react";
import { Book } from "@/app/types/Book";
import { updateBook, deleteBook, createBook } from "@/app/actions/books";
import { Button } from "@/components/ui/button";
import { createClient } from "@/app/utils/supabase/client";

export default function AdminBookList({ books }: { books: Book[] }) {
  const [isCreating, setIsCreating] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<
    "all" | "physical" | "digital" | "physical & digital"
  >("all");
  const [stockFilter, setStockFilter] = useState<
    "all" | "in_stock" | "out_of_stock"
  >("all");

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType =
      typeFilter === "all" || (book.productType || "physical") === typeFilter;
    const matchesStock =
      stockFilter === "all" ||
      (stockFilter === "in_stock" && book.noOfStock > 0) ||
      (stockFilter === "out_of_stock" && book.noOfStock <= 0);
    return matchesSearch && matchesType && matchesStock;
  });

  async function handleCreateBook(formData: FormData) {
    if (isUploading) return;
    setIsUploading(true);
    setError(null);

    try {
      const imageFile = formData.get("imageFile") as File;
      if (!imageFile || imageFile.size === 0) {
        throw new Error("Please select an image");
      }

      const supabase = createClient();
      const fileName = imageFile.name;
      const { error: uploadError, data } = await supabase.storage
        .from("Books")
        .upload(fileName, imageFile);

      if (uploadError) {
        throw new Error("Image upload failed: " + uploadError.message);
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("Books").getPublicUrl(fileName);

      formData.set("imageUrl", publicUrl);
      formData.delete("imageFile");

      await createBook(formData);
      setIsCreating(false);
      setSearchQuery(""); 
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Books Library</h2>
          <Button
            onClick={() => setIsCreating(!isCreating)}
            variant={isCreating ? "secondary" : "default"}
          >
            {isCreating ? "Cancel" : "Add New Book"}
          </Button>
        </div>

        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="search"
            placeholder="Search books..."
            className="flex h-9 w-full rounded-md border border-input bg-transparent pl-9 pr-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-3">
          <select
            value={typeFilter}
            onChange={(e) =>
              setTypeFilter(
                e.target.value as
                  | "all"
                  | "physical"
                  | "digital"
                  | "physical & digital",
              )
            }
            className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="all">All Types</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>
            <option value="physical & digital">Physical & Digital</option>
          </select>
          <select
            value={stockFilter}
            onChange={(e) =>
              setStockFilter(
                e.target.value as "all" | "in_stock" | "out_of_stock",
              )
            }
            className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="all">All Inventory</option>
            <option value="in_stock">In Stock</option>
            <option value="out_of_stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {isCreating && (
        <div className="p-4 border rounded-lg bg-muted/20 animate-in fade-in slide-in-from-top-2">
          <h3 className="font-semibold mb-3">Add New Book</h3>
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          <form action={handleCreateBook} className="grid gap-4 md:grid-cols-2">
            <input
              name="title"
              placeholder="Book Title"
              required
              className="p-2 border rounded"
            />
            <input
              name="price"
              type="number"
              step="0.01"
              placeholder="Price"
              required
              className="p-2 border rounded"
            />
            <input
              name="noOfStock"
              type="number"
              placeholder="Stock"
              required
              className="p-2 border rounded"
            />
            <div className="flex flex-col gap-1">
              <label className="text-sm text-muted-foreground">
                Book Cover Image
              </label>
              <input
                name="imageFile"
                type="file"
                accept="image/*"
                required
                className="p-2 border rounded bg-background"
              />
            </div>
            <select name="productType" className="p-2 border rounded">
              <option value="physical">Physical</option>
              <option value="digital">Digital</option>
              <option value="physical & digital">Physical & Digital</option>
            </select>
            <textarea
              name="description"
              placeholder="Book description (optional)"
              rows={3}
              className="p-2 border rounded md:col-span-2 resize-y"
            />
            <div className="md:col-span-2">
              <Button type="submit" className="w-full" disabled={isUploading}>
                {isUploading ? "Uploading & Creating..." : "Create Book"}
              </Button>
            </div>
          </form>
        </div>
      )}

      <div className="grid gap-4">
        {filteredBooks.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No books found matching "{searchQuery}"
          </div>
        ) : (
          filteredBooks.map((book) => <BookItem key={book.id} book={book} />)
        )}
      </div>
    </div>
  );
}

function BookItem({ book }: { book: Book }) {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <div className="p-4 border rounded-lg bg-background shadow-sm">
        <form
          action={async (formData) => {
            await updateBook(book.id, formData);
            setIsEditing(false);
          }}
          className="grid gap-4 md:grid-cols-2"
        >
          <input
            name="title"
            defaultValue={book.title}
            required
            className="p-2 border rounded"
          />
          <input
            name="price"
            type="number"
            step="0.01"
            defaultValue={book.price}
            required
            className="p-2 border rounded"
          />
          <input
            name="noOfStock"
            type="number"
            defaultValue={book.noOfStock}
            required
            className="p-2 border rounded"
          />
          <input
            name="imageUrl"
            defaultValue={book.imageUrl}
            required
            className="p-2 border rounded"
          />
          <select
            name="productType"
            defaultValue={book.productType || "physical"}
            className="p-2 border rounded"
          >
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>
            <option value="physical & digital">Physical & Digital</option>
          </select>
          <textarea
            name="description"
            defaultValue={book.description || ""}
            placeholder="Book description (optional)"
            rows={3}
            className="p-2 border rounded md:col-span-2 resize-y"
          />
          <div className="md:col-span-2 flex gap-2">
            <Button type="submit">Save Changes</Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-card hover:bg-muted/10 transition-colors">
      <div className="flex items-center gap-4">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-12 h-12 object-cover rounded"
        />
        <div className="min-w-0">
          <p className="font-semibold">{book.title}</p>
          <p className="text-sm text-muted-foreground">
            ${book.price} • Stock: {book.noOfStock} •{" "}
            <span className="capitalize">{book.productType || "physical"}</span>
          </p>
          {book.description && (
            <p className="text-xs text-muted-foreground/70 mt-1 line-clamp-1">
              {book.description}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
          Edit
        </Button>
        <form action={() => deleteBook(book.id)}>
          <Button variant="destructive" size="sm" type="submit">
            Delete
          </Button>
        </form>
      </div>
    </div>
  );
}
