import BackToTop from "@/components/BackToTop/BackToTop";
import PaintFetch from "@/components/DataFetch/PaintFetch/PaintFetch";
import Section from "@/components/Section/Section";

const Paint = () => {
  return (
    <main>
      <Section>
        <PaintFetch />
        <BackToTop />
      </Section>
    </main>
  );
};

export default Paint;
