import { Phone } from "lucide-react";

export default function ContactCard({
  icon,
  title,
  link,
  description,
  time,
}: {
  icon: React.ReactNode;
  title: string;
  link: string;
  description: string;
  time: string;
}) {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <a
        href={link}
        className="text-lg font-medium hover:text-primary transition-colors hover:underline"
      >
        {description}
      </a>
      <p className="text-sm text-muted-foreground mt-2">{time}</p>
    </div>
  );
}
