/**
 * Data Service Functions
 * Hybrid approach: Static data for profile/skills, DB for projects/experience/certificates
 */

import { createClient } from "@/utils/supabase/server"
import type {
    Profile,
    Skill,
    Project,
    Experience,
    Certificate,
} from "./supabase"
import { DATA } from "@/data/resume"

// Static Profile Data
const STATIC_PROFILE: Profile = {
    id: "static",
    full_name: DATA.name,
    title: "Software Engineer",
    about_me: DATA.summary,
    email: DATA.contact.email,
    phone: DATA.contact.tel,
    location: DATA.location,
    avatar_url: DATA.avatarUrl,
    resume_url: null,
    social_links: {
        github: DATA.contact.social.GitHub?.url,
        linkedin: DATA.contact.social.LinkedIn?.url,
        twitter: DATA.contact.social.X?.url,
    },
    updated_at: new Date().toISOString(),
}

// Static Skills Data
const STATIC_SKILLS: Skill[] = DATA.skills.map((skill, index) => ({
    id: index + 1,
    name: skill.name,
    category: "Technical",
    level: "Advanced",
    icon_url: null,
    created_at: new Date().toISOString(),
}))

/**
 * Get profile data (from static DATA)
 */
export function getProfile(): Profile {
    // Return static profile data - no DB call needed
    return STATIC_PROFILE
}

/**
 * Get all skills (from static DATA)
 */
export function getSkills(): Skill[] {
    // Return static skills data - no DB call needed
    return STATIC_SKILLS
}

/**
 * Get all projects
 */
export async function getProjects(): Promise<Project[]> {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false })

    if (error) {
        console.error("Error fetching projects:", error)
        return []
    }

    return (data as Project[]) || []
}

/**
 * Get featured projects only
 */
export async function getFeaturedProjects(): Promise<Project[]> {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("is_featured", true)
        .order("created_at", { ascending: false })

    if (error) {
        console.error("Error fetching featured projects:", error)
        return []
    }

    return (data as Project[]) || []
}

/**
 * Get single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .single()

    if (error) {
        console.error("Error fetching project:", error)
        return null
    }

    return data as Project
}

/**
 * Get all work experiences
 */
export async function getExperiences(): Promise<Experience[]> {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from("experience")
        .select("*")
        .order("start_date", { ascending: true })

    if (error) {
        console.error("Error fetching experiences:", error)
        return []
    }

    return (data as Experience[]) || []
}

/**
 * Get all certificates
 */
export async function getCertificates(): Promise<Certificate[]> {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from("certificates")
        .select("*")
        .order("issue_date", { ascending: false })

    if (error) {
        console.error("Error fetching certificates:", error)
        return []
    }

    return (data as Certificate[]) || []
}
