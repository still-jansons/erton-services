import HeroSection from "@/components/HeroSection";
import TextAndImageBlock from "@/components/TextAndImageBlock";
import Section from "@/components/Section";
import ContactUsBlock from "@/components/ContactUsBlock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Erton Services erbjuder högkvalitativ kundservice och lösningar för kundtjänst.",
};

export default function Page() {
  const textAndImageList = [
    {
      title: "Kundservice outsourcing",
      body: "Låt oss ta hand om era kundinteraktioner så att ni kan fokusera på kärnverksamheten. Vår kundserviceoutsourcing erbjuder en sömlös och effektiv lösning för att hantera inkommande samtal, e-post, chatt och mer.",
      image: "/icons/support.svg",
    },
    {
      title: "Callcenterlösningar",
      body: "Med våra callcenterlösningar kan ni säkerställa att varje kundkontakt behandlas med omsorg och professionalism. Vi erbjuder både inkommande och utgående samtalstjänster för att möta era unika behov.",
      image: "/icons/chat.svg",
    },
    {
      title: "Kundsupport med försäljning",
      body: "Kundsupport och försäljning är två sidor av samma mynt. Varje interaktion med en kund, oavsett om det handlar om att lösa problem eller erbjuda support, är en möjlighet att inte bara tillfredsställa kundens behov utan också att öka försäljningen av produkter eller tjänster. Genom att integrera kundsupport och försäljning kan företag skapa en starkare relation med sina kunder och samtidigt maximera försäljningspotentialen i varje interaktion.",
      image: "/icons/meeting.svg",
    },
    {
      title: "Expansion av verksamhet i Sverige",
      body: "Med vår expertis och erfarenhet inom kundservice och relaterade frågor kan Erton Services stödja ditt företags framgångsrika etablering i Sverige. Vårt erfarna team erbjuder skräddarsydda lösningar för att navigera den svenska marknaden, från kundidentifiering till långsiktiga relationer. Vi förstår vikten av att effektivt arbeta med kunder och bygga starka relationer, vilket är nyckeln till hållbar tillväxt. Oavsett om du är ny på marknaden eller vill utöka din närvaro, kan vi vara din pålitliga partner för att uppnå dina affärsmål.",
      image: "/icons/rocket.svg",
    },
    {
      title: "Back Office",
      body: "Vi erbjuder outsourcing av back office-tjänster för att hjälpa företag att effektivisera sin verksamhet. Genom att låta oss ta hand om administrativa uppgifter relaterade till back office kan företag fokusera på sin kärnverksamhet. Vi hanterar olika administrativa uppgifter såsom returer, byten, registerföring, e-posthantering, sociala medier och dokumentation. Fördelarna med att outsourca back office inkluderar vår erfarenhet inom området, kostnadsbesparingar jämfört med intern personal och ökad kundtillfredsställelse genom förbättrad servicenivå.",
      image: "/icons/search-laptop.svg",
    },
    {
      title: "Krisberedskap",
      body: "Vi erbjuder krisberedskapstjänster som syftar till att säkerställa tillgänglighet och hantering av ökade kundkontakter under kriser. Våra utbildade serviceproffs tar hand om den stora volymen (overflow) kontakter som kan uppstå vid olika krislägen, inklusive olyckor, hotbilder, tekniska fel, väderrelaterade händelser och produktrelaterade problem. Vi garanterar tillgänglighet för dina kunder och flexibilitet genom att besvara samtal när ni inte har möjlighet att göra det själva.",
      image: "/icons/shield.svg",
    },
    {
      title: "Felanmälan",
      body: "Vi erbjuder vår felanmälningstjänst en enkel och smidig process för att rapportera problem. Vi garanterar tillgänglighet dygnet runt året om och ser till att era kontakter inte behöver vänta. Genom att registrera felanmälningar och göra en bedömning utifrån era kriterier hanterar vi ärenden på ett effektivt sätt och koordinerar snabbt åtgärder vid akuta problem. Vår flexibilitet gör att vi kan anpassa lösningen efter era behov, från att registrera ärenden i ert system till att bevaka och åtgärda dem direkt. Detta säkerställer att era kunder alltid får kontakt med er och ökar kundnöjdheten genom professionell service och personligt bemötande.",
      image: "/icons/cog-warning.svg",
    },
    {
      title: "Sälj och merförsäljning",
      body: "Vi erbjuder vår sälj- och merförsäljningstjänst en skräddarsydd strategi för att öka intäkterna och skapa lönsam merförsäljning samtidigt som vi minskar kundavhoppen. Vi fokuserar på att identifiera och genomföra merförsäljningsmöjligheter för att öka din försäljning och vinst. Dessutom erbjuder vi kundbevarande tjänster och win-win-strategier för att återfå potentiella avhoppande kunder. Med våra erfarna agenter och effektiva metoder strävar vi efter konkreta resultat som ökar din försäljning och bevarar kunder. Genom att outsourca din merförsäljning till oss får du tillgång till effektivitet, erfarenhet och resultatfokus som leder till ökad lönsamhet och långsiktig framgång för ditt företag.",
      image: "/icons/trending-up.svg",
    },
    {
      title: "Tidsbokningar",
      body: "Vi erbjuder vår tidsbokningstjänst som en enkel och effektiv lösning för att hantera bokningar och beställningar. Detta gör det enkelt både för dig och dina kunder att genomföra dem. Vi anpassar lösningen efter era behov och kan hjälpa till med allt från registrering och ändring av bokningar till att ge besked och statusuppdateringar. Genom att outsourca tidsbokningshanteringen till oss får ni tillgänglighet dygnet runt och flexibilitet att besvara samtal när det passar er bäst. Era kunder får alltid ett professionellt bemötande. Med vår tjänst missar ni aldrig affärsmöjligheter eller viktiga kontakter och kan fokusera på er kärnverksamhet medan vi tar hand om tidsbokningarna.",
      image: "/icons/calendar-dates.svg",
    },
    {
      title: "Ärendehantering",
      body: "Vi erbjuder effektiva ärendehanteringstjänster, en omfattande lösning för att förenkla och optimera hanteringen av olika typer av ärenden, från ekonomiärenden till reklamationer och returer. Genom att använda vår ärendehanteringsplattform eller integrera med era befintliga system får ni full kontroll över era ärenden, ökad produktivitet och nöjdare kunder. Vi kan hjälpa er med fakturahantering, bokningar, felanmälningar, back office-uppgifter och mer. Genom att outsourca ärendehanteringen till oss minskar ni tidskrävande arbete, förbättrar kundnöjdheten, minskar kostnader och får en skalbar lösning som kan anpassas efter era behov.",
      image: "/icons/legal.svg",
    },
    {
      title: "Kvällar och helger",
      body: "Få effektiv ärendehantering även utanför kontorstiderna. Vi erbjuder lösningar för att hantera ärenden som fakturahantering, bokningar, felanmälningar och mer, även under kvällar och helger. Med vår tillgänglighet och effektiva hantering kan ni fokusera på er kärnverksamhet när det passar er bäst.",
      image: "/icons/clock-minutes.svg",
    },
  ];
  return (
    <main>
      <HeroSection
        title="Tjänster"
        subtitle="Erton Services erbjuder ett brett utbud av tjänster"
        image="/images/thumbs-up-guy.webp"
        style={{ zIndex: textAndImageList.length + 2 }}
      />

      <Section
        color="secondary"
        background={{
          type: "scroll",
          image: "/images/lines.webp",
        }}
        style={{ zIndex: textAndImageList.length + 1 }}
        hasPadding
      >
        <TextAndImageBlock
          title="Vår verksamhet"
          body="Vi kan hjälpa med kundserviceuppdrag som är mindre omfattande, till exempel ta emot  och registrera servicebokningar, tidsbokningar, felanmälningar eller intresseanmälningar  eller det som ni behöver hjälp med. Mer omfattande tjänster där vi helt eller delvis kan  arbeta som din kundservice utifrån dina behov. Vår teknikplattform gör det möjligt att  hantera ärenden i alla kanaler, såsom telefon, e-post, chatt och sociala medier, i det som  kallas omnikanal. Dessutom arbetar vi i de system som är aktuella för dig och din  verksamhet. Våra medarbetare specialutbildas för att förstå din verksamhet och uppdraget  för att hjälpa dina kunder på bästa sätt."
        />
      </Section>
      {textAndImageList.map((item, index) => (
        <Section
          key={index}
          color="primary"
          hasPadding
          background={{
            type: "solid",
            color: `${index % 2 === 0 ? "bg-white" : "bg-gray"}`,
          }}
          style={{ zIndex: textAndImageList.length - index }}
        >
          <TextAndImageBlock
            key={index}
            title={item.title}
            body={item.body}
            image={item.image}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        </Section>
      ))}
      <Section
        background={{
          type: "float",
          image: "/images/blocks-secondary.svg",
        }}
        color="primary"
      >
        <ContactUsBlock />
      </Section>
    </main>
  );
}
