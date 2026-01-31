'use server'

import { createClient } from '../utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function createBook(formData: FormData) {
  const supabase = await createClient()

  const title = formData.get('title') as string
  const price = Number(formData.get('price'))
  const noOfStock = Number(formData.get('noOfStock'))
  // In a real app, handle image upload to Supabase Storage. 
  // For now, we accept a URL string.
  const imageUrl = formData.get('imageUrl') as string

  const { error } = await supabase.from('Books').insert({
    title,
    price,
    noOfStock,
    imageUrl,
  })

  if (error) {
    throw new Error('Failed to create book')
  }

  revalidatePath('/admin/dashboard')
  revalidatePath('/')
}

export async function updateBook(id: number, formData: FormData) {
  const supabase = await createClient()

  const title = formData.get('title') as string
  const price = Number(formData.get('price'))
  const noOfStock = Number(formData.get('noOfStock'))
  const imageUrl = formData.get('imageUrl') as string

  const { error } = await supabase.from('Books').update({
    title,
    price,
    noOfStock,
    imageUrl,
  }).eq('id', id)

  if (error) {
    throw new Error('Failed to update book')
  }

  revalidatePath('/admin/dashboard')
  revalidatePath('/')
}

export async function deleteBook(id: number) {
  const supabase = await createClient()

  const { error } = await supabase.from('Books').delete().eq('id', id)

  if (error) {
    throw new Error('Failed to delete book')
  }

  revalidatePath('/admin/dashboard')
  revalidatePath('/')
}
