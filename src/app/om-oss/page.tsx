import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import TextAndImageBlock from "@/components/TextAndImageBlock";
import ListAndImage from "@/components/ListAndImage";
import ContactUsBlock from "@/components/ContactUsBlock";

export default function Page() {
  const list = [
    {
      image: "/images/happy-businessman.webp",
      textList: [
        {
          title: "Kundfokus",
          body: "Kundens behov och önskemål är vår högsta prioritet. Vi arbetar aktivt för att förstå och överträffa deras förväntningar genom att erbjuda skräddarsydda lösningar och enastående service.",
        },
        {
          title: "Kvalitet",
          body: "Vi strävar alltid efter att leverera högkvalitativa tjänster och produkter. Genom noggrannhet, professionalism och en ständig strävan efter förbättring säkerställer vi att vi levererar resultat av högsta standard till våra kunder.",
        },
        {
          title: "Integritet",
          body: "Vi agerar alltid med ärlighet, rättvisa och ansvar gentemot våra kunder, medarbetare och samhället. Vi är övertygade om att en stark etisk grund är nyckeln till långsiktiga och förtroendefulla relationer.",
        },
      ],
    },
    {
      image: "/images/young-businessman.webp",
      textList: [
        {
          title: "Innovation",
          body: "Vi är ständigt på jakt efter nya och bättre sätt att göra saker på. Genom att vara innovativa och proaktiva strävar vi efter att driva förändring och skapa mervärde för våra kunder och intressenter.",
        },
        {
          title: "Samarbete",
          body: "Vi tror på kraften i samarbete och teamarbete. Genom att uppmuntra öppen kommunikation, delat ansvar och ömsesidig respekt strävar vi efter att skapa en arbetsmiljö där alla kan växa och lyckas tillsammans.",
        },
      ],
    },
    {
      image: "/images/stacking-hands.webp",
      textList: [
        {
          title: "Socialt ansvarstagande",
          body: "Vi är engagerade i att göra en positiv inverkan på samhället och miljön. Genom att stödja hållbara affärsprinciper och delta i samhällsinitiativ strävar vi efter att bidra till en bättre värld för framtida generationer.",
        },
        {
          title: "Mångfald",
          body: "Vi välkomnar och värdesätter mångfalden bland våra medarbetare och uppmuntrar en inkluderande arbetsmiljö där alla känner sig välkomna och respekterade för sin unika bakgrund och erfarenhet. Våra värderingar är mer än bara ord - de är grunden för allt vi gör på Erton Services och vägleder oss i vår strävan att vara en pålitlig och ansvarsfull partner för våra kunder och samhället.",
        },
      ],
    },
  ];
  return (
    <main>
      <HeroSection
        title="Om oss"
        subtitle="Vårt mål är att säkerställa högkvalitativ service"
        image="/images/three-professionals.webp"
        style={{ zIndex: 20 }}
      />

      <Section
        style={{ zIndex: 19 }}
        background={{
          type: "scroll",
          image: "/images/lines.webp",
        }}
        hasPadding
      >
        <TextAndImageBlock
          title="Våra värderingar"
          body="På Erton Services tror vi på att göra skillnad genom våra handlingar varje dag. Vi strävar efter att skapa en positiv inverkan inte bara för våra kunder utan också för våra medarbetare och samhället som helhet. Våra värderingar är kärnan i allt vi gör och genomsyrar vår företagskultur."
          image="/icons/smiley-face.svg"
        />
      </Section>

      <Section
        style={{ zIndex: 18 }}
        background={{
          type: "solid",
          color: "bg-white",
        }}
        hasPadding
      >
        <div className="flex flex-col gap-36">
          {list.map((item, index) => (
            <ListAndImage
              key={index}
              textList={item.textList}
              image={item.image}
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </Section>

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
