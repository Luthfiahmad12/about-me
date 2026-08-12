import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import type { Profile } from "@/lib/supabase";
import { Github, Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";

interface ContactSectionProps {
  profile: Profile;
}

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export default function ContactSection({ profile }: ContactSectionProps) {
  const { social_links, email, phone } = profile;
  const hasSocials = social_links && Object.values(social_links).some(link => link && link.length > 0);
  
  // Get first available social link for the main CTA
  const primarySocial = Object.entries(social_links || {}).find(([_, url]) => url && url.length > 0);
  const primarySocialName = primarySocial ? primarySocial[0] : null;
  const primarySocialUrl = primarySocial ? primarySocial[1] : null;

  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Want to chat? Feel free to reach out through any of the channels below.
          I&apos;ll respond whenever I can.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {email && (
            <Link
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="size-4" />
              {email}
            </Link>
          )}
          {phone && (
            <Link
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="size-4" />
              {phone}
            </Link>
          )}
        </div>

        {/* Social Links */}
        {hasSocials && (
          <div className="flex items-center gap-3">
            {Object.entries(social_links).map(([platform, url]) => {
              if (!url) return null;
              const Icon = socialIcons[platform as keyof typeof socialIcons];
              if (!Icon) return null;
              
              return (
                <Link
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                  aria-label={platform}
                >
                  <Icon className="size-5" />
                </Link>
              );
            })}
          </div>
        )}

        {/* Primary CTA */}
        {primarySocialUrl && primarySocialName && (
          <p className="text-sm text-muted-foreground">
            Or send me a message on{" "}
            <Link
              href={primarySocialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline underline-offset-4 capitalize"
            >
              {primarySocialName}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
