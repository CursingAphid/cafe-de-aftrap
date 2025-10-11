import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ThirdSection from './components/ThirdSection'
import MenuSection from './components/MenuSection'
import SocialMediaSection from './components/SocialMediaSection'
import EventsSection from './components/EventsSection'
import ReviewsSection from './components/ReviewsSection'
import ShapeDivider from './components/ShapeDivider'
import MenuShapeDivider from './components/MenuShapeDivider'
import SocialShapeDivider from './components/SocialShapeDivider'
import EventsShapeDivider from './components/EventsShapeDivider'
import ReviewsShapeDivider from './components/ReviewsShapeDivider'
import { useScrollAnimation } from './hooks/useScrollAnimation'

function App() {
  useScrollAnimation();

  return (
    <div className="w-full">
      <Header />
      <Hero />
      <AboutSection />
      <ShapeDivider topColor="#4a505c" bottomColor="#242424" />
      <ThirdSection />
      <MenuShapeDivider topColor="#4a505c" bottomColor="#282a2e" />
      <MenuSection />
      <SocialShapeDivider topColor="#282a2e" bottomColor="#4a505c" />
      <SocialMediaSection />
      <EventsShapeDivider topColor="#4a505c" bottomColor="#242424" />
      <EventsSection />
      <ReviewsShapeDivider topColor="#242424" bottomColor="#4a505c" />
      <ReviewsSection />
    </div>
  )
}

export default App
