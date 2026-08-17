"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronRight, Code2, Laptop, Terminal, Monitor, Hospital } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types/portfolio";

interface WorkSectionProps {
  experiences: Experience[];
}

function getWorkIcon(companyName: string, role: string) {
  const lowerCompany = companyName.toLowerCase();
  const lowerRole = role.toLowerCase();

  if (lowerCompany.includes("rumah sakit") || lowerCompany.includes("hospital") || lowerCompany.includes("simrs")) {
    return <Hospital className="size-4 sm:size-5 text-primary" />;
  }
  if (lowerCompany.includes("adarma") || lowerRole.includes("programmer")) {
    return <Code2 className="size-4 sm:size-5 text-primary" />;
  }
  if (lowerCompany.includes("freelance") || lowerRole.includes("full stack")) {
    return <Terminal className="size-4 sm:size-5 text-primary" />;
  }
  if (lowerCompany.includes("support") || lowerRole.includes("support")) {
    return <Monitor className="size-4 sm:size-5 text-primary" />;
  }
  return <Laptop className="size-4 sm:size-5 text-primary" />;
}

function WorkIconBadge({ companyName, role }: { companyName: string; role: string }) {
  return (
    <div className="size-9 md:size-10 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center flex-none shadow-sm">
      {getWorkIcon(companyName, role)}
    </div>
  );
}

function formatDate(dateString: string | null): string {
  if (!dateString) return "Sekarang";
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", { month: "short", year: "numeric" });
}

export default function WorkSection({ experiences }: WorkSectionProps) {
  if (experiences.length === 0) {
    return (
      <div className="text-muted-foreground text-sm">
        Belum ada pengalaman kerja yang ditambahkan.
      </div>
    );
  }

  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {experiences.map((work) => (
        <AccordionItem
          key={work.id}
          value={work.id.toString()}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <WorkIconBadge companyName={work.company_name} role={work.role} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2 text-sm sm:text-base">
                    {work.company_name}
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                        )}
                      />
                    </span>
                  </div>
                  <div className="font-sans text-xs sm:text-sm text-muted-foreground">
                    {work.role}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>
                  {formatDate(work.start_date)} - {work.is_current ? "Sekarang" : formatDate(work.end_date)}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 ml-12 sm:ml-13 text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
            {work.description || "Tidak ada deskripsi yang tersedia."}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
