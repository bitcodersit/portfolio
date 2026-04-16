import siteContent from "@/data/site-content.json";
import type { SiteContent } from "@/types/site-content";

export function getSiteContent(): SiteContent {
  return siteContent as SiteContent;
}
