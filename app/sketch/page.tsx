import SketchFetch from "@/components/DataFetch/SketchFetch/SketchFetch";
import Section from "@/components/Section/Section";

const Sketch = () => {
  return (
    <main>
      <Section marginTop={false} marginBottom={false}>
        <SketchFetch />
      </Section>
    </main>
  );
};

export default Sketch;
