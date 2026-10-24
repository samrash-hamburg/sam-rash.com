import LegalLayout, { LegalCard } from "@/components/LegalLayout";
import { site } from "@/lib/site";
import { useLocale, useLocalizedPath } from "@/lib/locale";

const Impressum = () => {
  const locale = useLocale();
  const path = useLocalizedPath();
  return (
    <LegalLayout
      eyebrow={locale === "de" ? "Rechtliche Angaben" : "Legal information"}
      title={locale === "de" ? "Impressum" : "Legal Notice"}
      intro={locale === "de" ? "Angaben zum Anbieter dieser Website gemäß § 5 Digitale-Dienste-Gesetz (DDG)." : "Information about the provider of this website pursuant to Section 5 of the German Digital Services Act (DDG)."}
    >
      <LegalCard title={locale === "de" ? "Diensteanbieter" : "Service provider"}>
        <p className="font-medium text-foreground">{site.company}</p>
        <p>{site.street}<br />{site.postalCode} {site.city}<br />{locale === "de" ? site.country : "Germany"}</p>
        <p>{locale === "de" ? "Vertreten durch den Geschäftsführer:" : "Represented by the managing director:"} <span className="text-foreground">{site.representative}</span></p>
      </LegalCard>

      <LegalCard title={locale === "de" ? "Kontakt" : "Contact"}>
        {site.email ? <p>Email: <a className="text-primary underline-offset-4 hover:underline" href={`mailto:${site.email}`}>{site.email}</a></p> : <p className="text-primary">{locale === "de" ? "E-Mail-Adresse vor Veröffentlichung ergänzen." : "Email address to be added before publication."}</p>}
        <p>{locale === "de" ? "Weitere Informationen zu Musik und Booking findest du auf der " : "For music and booking information, see the "}<a className="text-primary underline-offset-4 hover:underline" href={`${path("/")}#contact`}>{locale === "de" ? "Startseite" : "home page"}</a>.</p>
      </LegalCard>

      <LegalCard title={locale === "de" ? "Handelsregister" : "Commercial register"}>
        <p>{locale === "de" ? "Registergericht" : "Register court"}: {site.registerCourt}<br />{locale === "de" ? "Registernummer" : "Registration number"}: {site.registerNumber}</p>
      </LegalCard>

      <LegalCard title={locale === "de" ? "Inhaltlich verantwortlich" : "Responsible for content"}>
        <p>{site.representative}<br />{site.street}<br />{site.postalCode} {site.city}</p>
        <p className="text-sm text-muted-foreground">{locale === "de" ? "Verantwortlich für journalistisch-redaktionelle Inhalte, soweit solche auf dieser Website angeboten werden, gemäß § 18 Abs. 2 MStV." : "Responsible for journalistic and editorial content, where such content is provided on this website, pursuant to Section 18(2) of the German Interstate Media Treaty (MStV)."}</p>
      </LegalCard>
    </LegalLayout>
  );
};

export default Impressum;
