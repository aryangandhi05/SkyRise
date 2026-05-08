import type { LucideIcon } from "lucide-react";
import { Boxes, Clapperboard, Film, Megaphone, Rocket, Workflow } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  type: string;
  image: string;
};

export const site = {
  brand: "SkyRise AI",
  email: "hello@skyrisedigitalsolutions.com",
  nav: ["System", "Services", "Work", "Process", "Posts", "Contact"],
  hero: {
    eyebrow: "AI-powered creative production",
    title: "Brand ads built at AI speed",
    subtitle:
      "A premium website structure for SkyRise AI. Final copy, posts, videos, and project assets can be swapped from this data layer when you provide them.",
    primaryCta: "Start Project",
    secondaryCta: "Explore Structure"
  },
  metrics: [
    ["24-48h", "delivery target"],
    ["10x", "faster iteration"],
    ["9:16", "short-form ready"],
    ["AI", "creative workflow"]
  ],
  services: [
    {
      title: "AI Ad Creative Production",
      description: "Static and video ad creatives for Meta, TikTok, LinkedIn, YouTube, Amazon, and launch campaigns.",
      icon: Megaphone
    },
    {
      title: "AI Video Production",
      description: "Product storytelling, brand narratives, and AI-generated video pipelines for modern brands.",
      icon: Film
    },
    {
      title: "Motion Graphics",
      description: "Animated explainers, SaaS launch videos, transitions, and dynamic visual systems.",
      icon: Clapperboard
    },
    {
      title: "Creative Strategy",
      description: "Hooks, angles, buyer psychology, creative audits, and campaign concepts built for performance.",
      icon: Rocket
    },
    {
      title: "AI Workflow Systems",
      description: "Internal automation and agent-driven content systems for teams that need output at scale.",
      icon: Workflow
    },
    {
      title: "High-Volume Output",
      description: "Bulk variations, seasonal campaign packs, A/B testing assets, and always-on creative engines.",
      icon: Boxes
    }
  ] satisfies Service[],
  projects: [
    {
      title: "Brand Ad Short",
      type: "Video / 9:16",
      image: "https://img.youtube.com/vi/8tvQ4B09mbk/maxresdefault.jpg"
    },
    {
      title: "Product Launch Short",
      type: "Campaign / Launch",
      image: "https://img.youtube.com/vi/zWZcuv-elXg/maxresdefault.jpg"
    },
    {
      title: "Premium Static Creative",
      type: "Poster / Paid Social",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80"
    }
  ] satisfies Project[],
  process: ["Brief", "Strategy", "Generate", "Refine", "Deliver"],
  posts: [
    "How AI creative pipelines shorten campaign timelines",
    "What makes a scroll-stopping hook work",
    "Static creative formats every brand should test"
  ]
};
