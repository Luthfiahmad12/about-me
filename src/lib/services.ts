/**
 * Data Service Functions
 * 100% Static Data Architecture (modular files in src/data/)
 */

import type {
    Profile,
    Skill,
    Project,
    Experience,
    Certificate,
} from "@/types/portfolio"

import { PROFILE_DATA } from "@/data/profile"
import { SKILLS_DATA } from "@/data/skills"
import { PROJECTS_DATA } from "@/data/projects"
import { EXPERIENCES_DATA } from "@/data/experience"
import { CERTIFICATES_DATA } from "@/data/certificates"

/**
 * Get profile data
 */
export function getProfile(): Profile {
    return PROFILE_DATA
}

/**
 * Get all skills
 */
export function getSkills(): Skill[] {
    return SKILLS_DATA
}

/**
 * Get all projects
 */
export async function getProjects(): Promise<Project[]> {
    return PROJECTS_DATA
}

/**
 * Get featured projects only
 */
export async function getFeaturedProjects(): Promise<Project[]> {
    return PROJECTS_DATA.filter((p) => p.is_featured)
}

/**
 * Get single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
    const project = PROJECTS_DATA.find((p) => p.slug === slug)
    return project || null
}

/**
 * Get all work experiences
 */
export async function getExperiences(): Promise<Experience[]> {
    return EXPERIENCES_DATA
}

/**
 * Get all certificates
 */
export async function getCertificates(): Promise<Certificate[]> {
    return CERTIFICATES_DATA
}
