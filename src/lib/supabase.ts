/**
 * Supabase Database Types
 * Based on database.schema
 */

export interface Profile {
  id: string;
  full_name: string;
  title: string | null;
  about_me: string | null;
  email: string | null;
  phone: string | null;
  location: string | null;
  avatar_url: string | null;
  resume_url: string | null;
  social_links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    [key: string]: string | undefined;
  };
  updated_at: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  level: string | null;
  icon_url: string | null;
  created_at: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  content: string | null;
  image_url: string | null;
  tech_stack: string[];
  demo_url: string | null;
  repo_url: string | null;
  is_featured: boolean;
  created_at: string;
}

export interface Experience {
  id: number;
  company_name: string;
  role: string;
  location: string | null;
  start_date: string;
  end_date: string | null;
  is_current: boolean;
  description: string | null;
  created_at: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuing_organization: string;
  issue_date: string | null;
  expiry_date: string | null;
  credential_id: string | null;
  credential_url: string | null;
  image_url: string | null;
  created_at: string;
}
