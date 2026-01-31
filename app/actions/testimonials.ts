'use server'

import { createClient } from '../utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function createTestimonial(formData: FormData) {
  const supabase = await createClient()

  const author = formData.get('author') as string
  const currentWorkplace = formData.get('currentWorkplace') as string
  const content = formData.get('content') as string

  const { error } = await supabase.from('Testimonials').insert({
    author,
    currentWorkplace,
    content,
  })

  if (error) {
    throw new Error('Failed to create testimonial')
  }

  revalidatePath('/admin/dashboard')
  revalidatePath('/')
}

export async function updateTestimonial(id: number, formData: FormData) {
  const supabase = await createClient()

  const author = formData.get('author') as string
  const currentWorkplace = formData.get('currentWorkplace') as string
  const content = formData.get('content') as string

  const { error } = await supabase.from('Testimonials').update({
    author,
    currentWorkplace,
    content,
  }).eq('id', id)

  if (error) {
    throw new Error('Failed to update testimonial')
  }

  revalidatePath('/admin/dashboard')
  revalidatePath('/')
}

export async function deleteTestimonial(id: number) {
  const supabase = await createClient()

  const { error } = await supabase.from('Testimonials').delete().eq('id', id)

  if (error) {
    throw new Error('Failed to delete testimonial')
  }

  revalidatePath('/admin/dashboard')
  revalidatePath('/')
}
