import { ChatFAB } from "../components/lux/ChatFAB";
import { Header } from "../components/navigation/Header";
import { AppointmentJourneySection } from "../sections/AppointmentJourneySection";
import { BestSellersSection } from "../sections/BestSellersSection";
import { BrandCraftSection } from "../sections/BrandCraftSection";
import { ClientReviewsSection } from "../sections/ClientReviewsSection";
import { EditorialSplitSection } from "../sections/EditorialSplitSection";
import { ShowroomSplitSection } from "../sections/ShowroomSplitSection";
import { EducationSection } from "../sections/EducationSection";
import { InstagramSection } from "../sections/InstagramSection";
import { FAQSection } from "../sections/FAQSection";
import { Footer } from "../sections/Footer";
import { HeroPromiseBar } from "../sections/HeroPromiseBar";
import { HeroSection } from "../sections/HeroSection";
import { ShopByStyleSection } from "../sections/ShopByStyleSection";

export function HomePage() {
  return (
    <div className="overflow-x-clip bg-white text-charcoal">
      <Header />
      <main className="min-w-0 overflow-x-clip">
        <HeroSection />
        <HeroPromiseBar />
        <ShopByStyleSection />
        <ShowroomSplitSection />
        <AppointmentJourneySection />
        <BestSellersSection />
        <BrandCraftSection />
        <EditorialSplitSection />
        <EducationSection />
        <InstagramSection />
        <ClientReviewsSection />
        <FAQSection />
        
      </main>
      <Footer />
      <ChatFAB />
    </div>
  );
}
