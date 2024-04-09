import HeroSection from "@/components/HeroSection";
import ContactUsSection from "@/components/ContactUsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakter",
  description: "Kontakta oss via e-post, per telefon.",
};

export default function Page() {
  return (
    <main>
      <HeroSection
        title="Kontakter"
        subtitle="Kontakta oss via e-post, per telefon eller genom att fylla i detta formulär"
        image="/images/two-regular-people.webp"
      />
      <ContactUsSection />
    </main>
  );
}
