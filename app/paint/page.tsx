import PaintFetch from "@/components/DataFetch/PaintFetch/PaintFetch";
import Section from "@/components/Section/Section";

const Paint = () => {
  return (
    <main>
      <Section marginTop={true} marginBottom={true}>
        <PaintFetch />
      </Section>
    </main>
  );
};

export default Paint;
