import AboutUs from "@/components/AboutUs/AboutUs";
import ContactUs from "@/components/ContactUs/ContactUs";
import Education from "@/components/Education/Education";
import Banner from "@/components/Hero/Banner";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <section>
        <Banner/>
      </section>
      <section className="py-16">
        <AboutUs/>
      </section>
      <section>
        <Skills/>
      </section>
      <section className="py-16">
        <Projects/>
      </section>
      <section>
        <Education/>
      </section>
      <section className="py-16">
        <ContactUs/>
      </section>
    </div>
  );
}
