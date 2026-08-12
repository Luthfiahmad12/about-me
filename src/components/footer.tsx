import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 mt-8 border-t">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          Inspired by{" "}
          <Link
            href="https://magicui.design/docs/templates/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline underline-offset-4 font-medium"
          >
            Magic UI Portfolio
          </Link>
        </p>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          Built with <Heart className="size-3 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
