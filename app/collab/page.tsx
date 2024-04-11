import BackToTop from "@/components/BackToTop/BackToTop";
import CollabFetch from "@/components/DataFetch/CollabFetch/CollabFetch";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";

const Collab = () => {
  return (
    <main>
      <Section marginTop={true} marginBottom={true}>
        <CollabFetch />
      </Section>
      <BackToTop />
      <Footer />
    </main>
  );
};

export default Collab;
