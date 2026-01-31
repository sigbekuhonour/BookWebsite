'use client'

import { useState } from 'react'
import { login } from './actions'

import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    setError(null)
    
    try {
      const result = await login(formData)
      if (result?.error) {
        setError(result.error)
        setIsLoading(false)
      } else if (result?.success) {
        // Redirect on client side
        router.push('/admin/dashboard')
      }
    } catch (e) {
      setError('An unexpected error occurred')
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-background px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-2xl shadow-lg border border-border">
         <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Admin Login</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Enter your credentials to access the dashboard
            </p>
         </div>

         {error && (
            <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
                {error}
            </div>
         )}

        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
            <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          
          <div className="space-y-2">
             <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
             <input 
                id="password" 
                name="password" 
                type="password" 
                required 
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 w-full"
          >
            {isLoading ? "Signing you in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  )
}
