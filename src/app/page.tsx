import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import TextAndImageBlock from "@/components/TextAndImageBlock";
import CardListBlock from "@/components/CardListBlock";
import VideoBlock from "@/components/VideoBlock";

type Card = {
  title: string;
  body: string;
  icon?: string;
  theme?: "light" | "dark";
};

export default function Page() {
  const cards = [
    {
      title: "Kostnadseffektivitet",
      body: "Kostnadseffektivitet Genom att outsourca din kundservice till oss behöver du inte oroa dig för att investera i dyra infrastrukturer och anställa och utbilda personal. Du betalar enbart för den faktiska produktions- och tjänstetiden.",
      icon: "/icons/briefcase.svg",
    },
    {
      title: "Skalbarhet",
      body: "Vi erbjuder skalbara lösningar som kan anpassas efter dina specifika behov och krav. Oavsett om det handlar om hög- eller lågsäsong, semesterperioder eller plötsliga ökningar i kundaktivitet, kan vi effektivt hantera det och uppfylla era behov.",
      icon: "/icons/puzzle-piece.svg",
    },
    {
      title: "Expertis",
      body: "Vårt team av kundserviceexperter har bred kunskap inom områden som marknadsföring,  produktutveckling och försäljning. Vi är specialister på att skapa positiva kundupplevelser och är dedikerade till att leverera professionell och effektiv service.",
      icon: "/icons/puzzle-piece.svg",
    },
    {
      title: "Sparad Managementtid",
      body: "Genom att outsourca din kundservice till oss kan du minska den tid och ansträngning som krävs för att leda ett internt kundserviceteam. Vi tar hand om all personaladministration och ledning vilket gör att ni kan fokusera på er kärnverksamhet.",
      icon: "/icons/clock.svg",
    },
    {
      title: "Tillgänglighet",
      body: "Med oss kan ni outsourca delar av eller hela er verksamhet upp till 24/7, 365 dagar om året,  och dra nytta av kostnadsbesparingar samtidigt som ni säkerställer hög kompetens och kvalitet i utförandet av tjänsterna.",
      icon: "/icons/calendar.svg",
    },
    {
      title: "Konkurrenskraftiga priser",
      body: "Vi är stolta över att erbjuda konkurrenskraftiga priser som kanske är de bästa på marknaden, utan att kompromissa med kvaliteten. Du får kundservice till priser som passar din budget. Vi tror att enastående service inte behöver kosta en förmögenhet!",
      icon: "/icons/scales.svg",
    },
  ];

  const cards_2 = [
    {
      title: "Kundservice outsourcing",
      body: "Låt oss ta hand om era kundinteraktioner så att ni kan fokusera på kärnverksamheten. Vår kundserviceoutsourcing erbjuder en sömlös och effektiv lösning för att hantera inkommande samtal, e-post, chatt och mer.",
      theme: "dark",
    },
    {
      title: "Callcenterlösningar",
      body: "Med våra callcenterlösningar kan ni säkerställa att varje kundkontakt behandlas med omsorg och professionalism. Vi erbjuder både inkommande och utgående samtalstjänster för att möta era unika behov.",
      theme: "dark",
    },
    {
      title: "Expansion av verksamhet",
      body: "Med vår expertis och erfarenhet inom kundservice och relaterade frågor kan vi stödja ditt företagsutveckling i Sverige. Vi erbjuder skräddarsydda lösningar för att navigera den svenska marknaden, från kundidentifiering till långsiktiga relationer.",
      theme: "dark",
    },
  ] as Card[];
  return (
    <main>
      <HeroSection
        title="Välkommen till Erton Services AB!"
        subtitle="Vi gör kundservice enkel"
        image="/images/two-support-people.webp"
        link={{
          href: "/kontakt",
          text: "Kontakta oss",
        }}
        style={{ zIndex: 20 }}
      />
      <Section
        color="secondary"
        background={{
          type: "scroll",
          image: "/images/lines.webp",
        }}
        style={{ zIndex: 19 }}
        hasPadding
      >
        <TextAndImageBlock
          title="Högkvalitativ kundservice"
          body="Vi på Erton Services är stolta över att erbjuda skräddarsydda och högkvalitativa kundservice och callcenterlösningar för företag i hela Sverige. I dagens snabbt föränderliga affärsmiljö är  det avgörande att ha en effektiv och proaktiv kundservicestrategi för att behålla och locka  nya kunder. Genom att anlita oss som din föredragna outsourcingpartner för kundservice kan  du dra nytta av följande fördelar"
          image="/images/check-seal.svg"
        />
      </Section>
      <Section
        color="primary"
        hasPadding
        title="Varför välja Erton Services AB?"
        background={{
          type: "float",
          image: "/images/blocks-secondary.svg",
        }}
        style={{ zIndex: 18 }}
      >
        <CardListBlock cards={cards} />
      </Section>
      <Section
        color="secondary"
        background={{
          type: "scroll",
          image: "/images/lines.webp",
        }}
        hasPadding
        title="Youtube video"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        style={{ zIndex: 17 }}
      >
        <VideoBlock />
      </Section>
      <Section
        color="primary"
        background={{
          type: "scroll",
          image: "/images/desk.webp",
        }}
        hasPadding
        title="Tjänster"
        style={{ zIndex: 16 }}
      >
        <CardListBlock cards={cards_2} />
      </Section>
    </main>
  );
}
