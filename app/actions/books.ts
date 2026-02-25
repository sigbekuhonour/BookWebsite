"use server";

import { createClient } from "../utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function createBook(formData: FormData) {
  const supabase = await createClient();

  const title = formData.get("title") as string;
  const description = (formData.get("description") as string) || "";
  const productType = (formData.get("productType") as string) || "physical";
  const price = Number(formData.get("price"));
  const noOfStock = Number(formData.get("noOfStock"));
  const imageUrl = formData.get("imageUrl") as string;

  const { error } = await supabase.from("Books").insert({
    title,
    description,
    productType,
    price,
    noOfStock,
    imageUrl,
  });

  if (error) {
    throw new Error("Failed to create book");
  }

  revalidatePath("/admin/dashboard");
  revalidatePath("/");
}

export async function updateBook(id: string | number, formData: FormData) {
  const supabase = await createClient();

  const title = formData.get("title") as string;
  const description = (formData.get("description") as string) || "";
  const productType = (formData.get("productType") as string) || "physical";
  const price = Number(formData.get("price"));
  const noOfStock = Number(formData.get("noOfStock"));
  const imageUrl = formData.get("imageUrl") as string;

  const { error } = await supabase
    .from("Books")
    .update({
      title,
      description,
      productType,
      price,
      noOfStock,
      imageUrl,
    })
    .eq("id", id);

  if (error) {
    throw new Error("Failed to update book");
  }

  revalidatePath("/admin/dashboard");
  revalidatePath("/");
}

export async function deleteBook(id: string | number) {
  const supabase = await createClient();
  const { data: book } = await supabase
    .from("Books")
    .select("imageUrl")
    .eq("id", id)
    .single();

  if (book?.imageUrl) {
    const fileName = book.imageUrl.split("/").pop();
    if (fileName) {
      await supabase.storage.from("Books").remove([fileName]);
    }
  }

  const { error } = await supabase.from("Books").delete().eq("id", id);

  if (error) {
    throw new Error("Failed to delete book");
  }

  revalidatePath("/admin/dashboard");
  revalidatePath("/");
}
