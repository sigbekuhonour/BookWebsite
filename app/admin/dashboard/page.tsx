import { createClient } from "../../utils/supabase/server";
import { redirect } from "next/navigation";
import AdminBookList from "./components/AdminBookList";
import AdminTestimonialList from "./components/AdminTestimonialList";
import { Button } from "@/components/ui/button";
import { Header } from "@/app/header";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/admin/login");
  }

  const { data: books } = await supabase
    .from("Books")
    .select("*")
    .order("id", { ascending: true });
  const { data: testimonials } = await supabase
    .from("Testimonials")
    .select("*")
    .order("id", { ascending: true });

  return (
        <div className="min-h-screen bg-background text-foreground">
          <header className="border-b bg-card">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground hidden md:inline">
                  {user.email}
                </span>
                <form
                  action={async () => {
                    "use server";
                    const supabase = await createClient();
                    await supabase.auth.signOut();
                    redirect("/");
                  }}
                >
                  <Button variant="ghost" type="submit">
                    Sign Out
                  </Button>
                </form>
              </div>
            </div>
          </header>

          <main className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
            <section className="bg-card border rounded-xl p-6 shadow-sm">
              <AdminBookList books={books || []} />
            </section>

            <section className="bg-card border rounded-xl p-6 shadow-sm h-fit">
              <AdminTestimonialList testimonials={testimonials || []} />
            </section>
          </main>
        </div>
  );
}
