import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Creations from "./components/Creations";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Creations />
        <About />
        <Gallery />
        <Reviews />
        <Visit />
      </main>
    </>
  );
}
