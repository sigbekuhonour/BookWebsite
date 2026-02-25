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

      <div className="container mx-auto px-4 py-6">
        <div className="bg-card border rounded-xl p-6 shadow-sm flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
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
              className="text-primary"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">
              Total Books in stock
            </p>
            <p className="text-3xl font-bold">{books?.length ?? 0}</p>
          </div>
        </div>
      </div>

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
