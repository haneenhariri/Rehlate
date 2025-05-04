import Hero from "../components/Hero/Hero";
import Plans from "../components/Plans/Plans";
import Services from "../components/Services/Services";
import Trips from "../components/Trips/Trips";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Trips/>
        <Services />
        <Plans />
      </main>
    </>
  );
}
