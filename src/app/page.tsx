import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutConference from "./components/AboutConference";
import AboutIEMUEM from "./components/AboutIEMUEM";
import Speakers from "./components/Speakers";
import TopicsSection from "./components/TopicsSection";
import IndustryParticipants from "./components/IndustryParticipants";
import ImportantDates from "./components/ImportantDates";
import RegistrationSection from "./components/RegistrationSection";
import ConferenceAgenda from "./components/ConferenceAgenda";
import VenueSection from "./components/VenueSection";
import SponsorshipSection from "./components/SponsorshipSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      <AboutConference />

      <AboutIEMUEM />

      <Speakers />

      <TopicsSection />

      <IndustryParticipants />

      <ImportantDates />

      <RegistrationSection />

      <ConferenceAgenda />

      <VenueSection />

      <SponsorshipSection />

      <ContactSection />

      <Footer />
    </main>
  );
}