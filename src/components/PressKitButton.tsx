import { ArrowUpRight, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale";
import { site } from "@/lib/site";

const PressKitButton = ({ compact = false }: { compact?: boolean }) => {
  const locale = useLocale();
  const label = compact
    ? (locale === "de" ? "Pressekit" : "Press kit")
    : (locale === "de" ? "Pressekit auf Google Drive" : "Press kit on Google Drive");

  if (!site.pressKitUrl) {
    return <Button variant="neon" size={compact ? "default" : "lg"} disabled>
      <FolderOpen className="mr-2 h-4 w-4" aria-hidden="true" />
      {compact
        ? (locale === "de" ? "Pressekit · Link folgt" : "Press kit · Link coming soon")
        : (locale === "de" ? "Google Drive · Link folgt" : "Google Drive · Link coming soon")}
    </Button>;
  }

  return <Button variant="neon" size={compact ? "default" : "lg"} asChild>
    <a href={site.pressKitUrl} target="_blank" rel="noopener noreferrer">
      <FolderOpen className="mr-2 h-4 w-4" aria-hidden="true" />
      {label}<ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
    </a>
  </Button>;
};

export default PressKitButton;
