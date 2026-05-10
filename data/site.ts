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
  videoSrc: string;
  poster: string;
};

export type Industry = {
  icon: string;
  title: string;
  tags: string[];
};

const cloudinaryVideo = (path: string) =>
  `https://res.cloudinary.com/dqz8j3poq/video/upload/f_auto,q_auto:good/${path}.mp4`;

const cloudinaryPoster = (path: string) =>
  `https://res.cloudinary.com/dqz8j3poq/video/upload/so_0,w_1100,q_auto,f_jpg/${path}.jpg`;

export const site = {
  brand: "SkyRise AI",
  email: "hello@skyrisedigitalsolutions.com",
  nav: ["System", "Services", "Work", "Industries", "Process", "Contact"],
  hero: {
    eyebrow: "AI-powered creative production",
    title: "Brand ads built at AI speed",
    subtitle:
      "A premium website structure for SkyRise AI. Final copy, posts, videos, and project assets can be swapped from this data layer when you provide them.",
    primaryCta: "Start Project",
    secondaryCta: "Explore Structure",
    videoSrc:
      "https://res.cloudinary.com/dqz8j3poq/video/upload/f_auto,q_auto:good/v1778250576/Skyrise-Master-video_rlztkr.mp4",
    videoPoster:
      "https://res.cloudinary.com/dqz8j3poq/video/upload/so_0,w_1800,q_auto,f_jpg/v1778250576/Skyrise-Master-video_rlztkr.jpg"
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
      title: "Commercial Hotel Ad",
      type: "Hospitality",
      videoSrc: cloudinaryVideo("v1778251482/Copy_of_Hotel-sample-ai-video_rndhxr"),
      poster: cloudinaryPoster("v1778251482/Copy_of_Hotel-sample-ai-video_rndhxr")
    },
    {
      title: "Sunglasses Ad",
      type: "Product / Commercial",
      videoSrc: cloudinaryVideo("v1778251575/sunglass-ad-1_eou0t7"),
      poster: cloudinaryPoster("v1778251575/sunglass-ad-1_eou0t7")
    },
    {
      title: "Street Fashion Men",
      type: "Fashion",
      videoSrc: cloudinaryVideo("v1778251585/street_fashion_men_e8ltmw"),
      poster: cloudinaryPoster("v1778251585/street_fashion_men_e8ltmw")
    },
    {
      title: "Blazer Ad",
      type: "Fashion / Product Ad",
      videoSrc: cloudinaryVideo("v1778251580/blazer-ad-1_ii0lqf"),
      poster: cloudinaryPoster("v1778251580/blazer-ad-1_ii0lqf")
    },
    {
      title: "Men Formal",
      type: "Fashion / Formalwear",
      videoSrc: cloudinaryVideo("v1778251597/men_formal_muvsia"),
      poster: cloudinaryPoster("v1778251597/men_formal_muvsia")
    },
    {
      title: "New Balance Commercial",
      type: "Footwear / Commercial",
      videoSrc: cloudinaryVideo("v1778251591/new-balance-ad-commercial_qwbssh"),
      poster: cloudinaryPoster("v1778251591/new-balance-ad-commercial_qwbssh")
    },
    {
      title: "Commercial Brand",
      type: "Brand / Jewellery",
      videoSrc: cloudinaryVideo("v1778251447/Video-2-Portfolio-1_ykpsv6"),
      poster: cloudinaryPoster("v1778251447/Video-2-Portfolio-1_ykpsv6")
    },
    {
      title: "Cafe/Restaurant",
      type: "Food & Beverage (F&B)",
      videoSrc: cloudinaryVideo("v1778251599/Hoogas-Sample_gdmubj"),
      poster: cloudinaryPoster("v1778251599/Hoogas-Sample_gdmubj")
    },
    {
      title: "Luxury Jewellery",
      type: "Luxury / Product Video",
      videoSrc: cloudinaryVideo("v1778251473/jewelry_p4q5yl"),
      poster: cloudinaryPoster("v1778251473/jewelry_p4q5yl")
    }
  ] satisfies Project[],
  posters: {
    portrait: [
      "https://res.cloudinary.com/dqz8j3poq/image/upload/v1778358085/ads-1_qwkmkh.png",
      "https://res.cloudinary.com/dqz8j3poq/image/upload/v1778358070/ads-variation_djhrdt.png",
      "https://res.cloudinary.com/dqz8j3poq/image/upload/v1778358070/ads-3_dbqcle.png",
      "https://res.cloudinary.com/dqz8j3poq/image/upload/v1778358070/square-4_izujij.png",
    ],
    landscape: [
      "https://res.cloudinary.com/dqz8j3poq/image/upload/v1778358102/12_vpi2wu.png",
      "https://res.cloudinary.com/dqz8j3poq/image/upload/v1778358111/11_vqjlel.png",
      "https://res.cloudinary.com/dqz8j3poq/image/upload/v1778358110/10_lpuhll.png",
      "https://res.cloudinary.com/dqz8j3poq/image/upload/v1778358116/8_mwqevo.png",
      "https://res.cloudinary.com/dqz8j3poq/image/upload/v1778358114/7_hsnqwx.png",
      "https://res.cloudinary.com/dqz8j3poq/image/upload/v1778358117/13_ppzylp.png",
      "https://res.cloudinary.com/dqz8j3poq/image/upload/v1778358117/9_yu2eqo.png",
    ],
  },
  industries: [
    {
      icon: "🛒",
      title: "E-commerce",
      tags: ["Apparel", "Footwear", "Jewelry", "Beauty", "Furniture", "Toys", "Sports"]
    },
    {
      icon: "🧠",
      title: "SaaS / Tech / AI",
      tags: ["Dashboards", "Automation", "Productivity", "AI Tools", "Launch Videos"]
    },
    {
      icon: "🍔",
      title: "Food & Beverage",
      tags: ["Restaurants", "Cafes", "Packaged", "Delivery"]
    },
    {
      icon: "🏋️",
      title: "Fitness & Wellness",
      tags: ["Gyms", "Supplements", "Trainers", "Health Tech"]
    },
    {
      icon: "🏠",
      title: "Real Estate & Interiors",
      tags: ["Builders", "Home Design", "Lifestyle", "Staging"]
    },
    {
      icon: "🔧",
      title: "Service Businesses",
      tags: ["Salons", "Clinics", "Cleaning", "Consulting"]
    }
  ] satisfies Industry[],
  process: ["Brief", "Strategy", "Generate", "Refine", "Deliver"],
  posts: [
    { title: "How AI creative pipelines shorten campaign timelines", slug: "ai-creative-pipelines" },
    { title: "What makes a scroll-stopping hook work", slug: "scroll-stopping-hook" },
    { title: "Static creative formats every brand should test", slug: "static-creative-formats" }
  ]
};
