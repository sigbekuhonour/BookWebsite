'use client'

import { useState } from 'react'
import { Book } from '@/app/types/Book'
import { updateBook, deleteBook, createBook } from '@/app/actions/books'
import { Button } from '@/components/ui/button'
import { createClient } from '@/app/utils/supabase/client'

export default function AdminBookList({ books }: { books: Book[] }) {
  const [isCreating, setIsCreating] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  async function handleCreateBook(formData: FormData) {
      if (isUploading) return
      setIsUploading(true)
      setError(null)

      try {
        const imageFile = formData.get('imageFile') as File
        if (!imageFile || imageFile.size === 0) {
            throw new Error("Please select an image")
        }

        const supabase = createClient()
        const fileName = imageFile.name
        const { error: uploadError, data } = await supabase.storage
            .from('Books')
            .upload(fileName, imageFile)

        if (uploadError) {
            throw new Error("Image upload failed: " + uploadError.message)
        }

        const { data: { publicUrl } } = supabase.storage
            .from('Books')
            .getPublicUrl(fileName)

        
        formData.set('imageUrl', publicUrl)
        formData.delete('imageFile') 

        await createBook(formData)
        setIsCreating(false)
      } catch (e: any) {
        setError(e.message)
      } finally {
        setIsUploading(false)
      }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Books Library</h2>
        <Button onClick={() => setIsCreating(!isCreating)} variant={isCreating ? "secondary" : "default"}>
          {isCreating ? "Cancel" : "Add New Book"}
        </Button>
      </div>

      {isCreating && (
        <div className="p-4 border rounded-lg bg-muted/20 animate-in fade-in slide-in-from-top-2">
            <h3 className="font-semibold mb-3">Add New Book</h3>
            {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
            <form action={handleCreateBook} className="grid gap-4 md:grid-cols-2">
                <input name="title" placeholder="Book Title" required className="p-2 border rounded" />
                <input name="price" type="number" step="0.01" placeholder="Price" required className="p-2 border rounded" />
                <input name="noOfStock" type="number" placeholder="Stock" required className="p-2 border rounded" />
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-muted-foreground">Book Cover Image</label>
                    <input name="imageFile" type="file" accept="image/*" required className="p-2 border rounded bg-background" />
                </div>
                <div className="md:col-span-2">
                    <Button type="submit" className="w-full" disabled={isUploading}>
                        {isUploading ? "Uploading & Creating..." : "Create Book"}
                    </Button>
                </div>
            </form>
        </div>
      )}

      <div className="grid gap-4">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

function BookItem({ book }: { book: Book }) {
  const [isEditing, setIsEditing] = useState(false)

  if (isEditing) {
    return (
      <div className="p-4 border rounded-lg bg-background shadow-sm">
        <form action={async (formData) => {
            await updateBook(book.id, formData)
            setIsEditing(false)
        }} className="grid gap-4 md:grid-cols-2">
            <input name="title" defaultValue={book.title} required className="p-2 border rounded" />
            <input name="price" type="number" step="0.01" defaultValue={book.price} required className="p-2 border rounded" />
            <input name="noOfStock" type="number" defaultValue={book.noOfStock} required className="p-2 border rounded" />
            <input name="imageUrl" defaultValue={book.imageUrl} required className="p-2 border rounded" />
            <div className="md:col-span-2 flex gap-2">
                <Button type="submit">Save Changes</Button>
                <Button type="button" variant="ghost" onClick={() => setIsEditing(false)}>Cancel</Button>
            </div>
        </form>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-card hover:bg-muted/10 transition-colors">
      <div className="flex items-center gap-4">
        <img src={book.imageUrl} alt={book.title} className="w-12 h-12 object-cover rounded" />
        <div>
          <p className="font-semibold">{book.title}</p>
          <p className="text-sm text-muted-foreground">${book.price} • Stock: {book.noOfStock}</p>
        </div>
      </div>
      <div className="flex gap-2">
         <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>Edit</Button>
         <form action={() => deleteBook(book.id)}>
            <Button variant="destructive" size="sm" type="submit">Delete</Button>
         </form>
      </div>
    </div>
  )
}
