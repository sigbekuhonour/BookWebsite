'use client'

import { useState } from 'react'
import { Testimonial } from '@/app/types/Testimonial'
import { updateTestimonial, deleteTestimonial, createTestimonial } from '@/app/actions/testimonials'
import { Button } from '@/components/ui/button'

export default function AdminTestimonialList({ testimonials }: { testimonials: Testimonial[] }) {
  const [isCreating, setIsCreating] = useState(false)
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Testimonials</h2>
        <Button onClick={() => setIsCreating(!isCreating)} variant={isCreating ? "secondary" : "default"}>
          {isCreating ? "Cancel" : "Add Testimonial"}
        </Button>
      </div>

      {isCreating && (
        <div className="p-4 border rounded-lg bg-muted/20 animate-in fade-in slide-in-from-top-2">
            <h3 className="font-semibold mb-3">Add New Testimonial</h3>
            <form action={async (formData) => {
                await createTestimonial(formData)
                setIsCreating(false)
            }} className="grid gap-4">
                <input name="author" placeholder="Author Name" required className="p-2 border rounded" />
                <input name="currentWorkplace" placeholder="Workplace/Role" required className="p-2 border rounded" />
                <textarea name="content" placeholder="Testimonial Content" required className="p-2 border rounded min-h-[100px]" />
                <Button type="submit" className="w-full">Create Testimonial</Button>
            </form>
        </div>
      )}

      <div className="grid gap-4">
        {testimonials.map((t) => (
          <TestimonialItem key={t.id} testimonial={t} />
        ))}
      </div>
    </div>
  )
}

function TestimonialItem({ testimonial }: { testimonial: Testimonial }) {
  const [isEditing, setIsEditing] = useState(false)

  if (isEditing) {
    return (
      <div className="p-4 border rounded-lg bg-background shadow-sm">
        <form action={async (formData) => {
            await updateTestimonial(testimonial.id, formData)
            setIsEditing(false)
        }} className="grid gap-4">
            <input name="author" defaultValue={testimonial.author} required className="p-2 border rounded" />
            <input name="currentWorkplace" defaultValue={testimonial.currentWorkplace} required className="p-2 border rounded" />
            <textarea name="content" defaultValue={testimonial.content} required className="p-2 border rounded min-h-[100px]" />
            <div className="flex gap-2">
                <Button type="submit">Save Changes</Button>
                <Button type="button" variant="ghost" onClick={() => setIsEditing(false)}>Cancel</Button>
            </div>
        </form>
      </div>
    )
  }

  return (
    <div className="p-4 border rounded-lg bg-card hover:bg-muted/10 transition-colors space-y-2">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
             <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center font-bold text-primary">
                {testimonial.author.charAt(0)}
             </div>
             <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.currentWorkplace}</p>
             </div>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>Edit</Button>
            <form action={() => deleteTestimonial(testimonial.id)}>
                <Button variant="destructive" size="sm" type="submit">Delete</Button>
            </form>
        </div>
      </div>
      <p className="text-sm text-foreground/80 italic line-clamp-2">"{testimonial.content}"</p>
    </div>
  )
}
