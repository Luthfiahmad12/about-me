import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 mt-8 border-t">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-xs sm:text-sm text-muted-foreground">
          © 2025. Inspired by{" "}
          <Link
            href="https://magicui.design/docs/templates/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline underline-offset-4 font-medium"
          >
            Magic UI Portfolio
          </Link>
        </p>
      </div>
    </footer>
  );
}
