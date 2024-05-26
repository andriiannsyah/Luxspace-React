import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowseRoom from "../parts/Homepage/BrowseRoom";
import JustArrived from "../parts/Homepage/JustArrived";

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
    </>
  );
}
