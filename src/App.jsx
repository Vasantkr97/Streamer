import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import HowItWork from "./components/HowItWork"
import KeyFeatures from "./components/KeyFeatures"
import Navbar from "./components/Navbar"
import PricingPlan from "./components/PricingPlan"
import Testimonials from "./components/Testimonials"


const App = () => {

  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <HeroSection />
      <HowItWork />
      <KeyFeatures />
      <PricingPlan/>
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App
