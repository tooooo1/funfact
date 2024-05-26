import { MetadataRoute } from "next";

export default function manifest() {
  return {
    name: "FunFact",
    short_name: "FunFact",
    description: "Discover Fun Facts, Enjoy Every Moment!",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#C6FFF8",
  } satisfies MetadataRoute.Manifest;
}
