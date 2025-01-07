import HeroSection from '../components/home/HeroSection';
import PropertySlider from '../components/home/PropertySlider';
import FAQSection from '../components/home/FAQSection';
import Newsletter from '../components/home/Newsletter';

function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PropertySlider />
      <FAQSection />
      <Newsletter />
    </div>
  );
}

export default Home;