import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Fundraising } from "@/components/fundraising";
import { Vision } from "@/components/vision";
import { Partners } from "@/components/partners";
import { Community } from "@/components/community";
import { Roadmap } from "@/components/roadmap";
import { Credibility } from "@/components/credibility";
import { InvestorCTA } from "@/components/investor-cta";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Fundraising />
        <Vision />
        <Partners />
        <Community />
        <Roadmap />
        <Credibility />
        <InvestorCTA />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
