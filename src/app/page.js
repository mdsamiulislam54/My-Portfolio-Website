import AboutUs from "@/components/AboutUs/AboutUs";
import Banner from "@/components/Hero/Banner";

export default function Home() {
  return (
    <div>
      <section>
        <Banner/>
      </section>
      <section className="py-16">
        <AboutUs/>
      </section>
    </div>
  );
}
