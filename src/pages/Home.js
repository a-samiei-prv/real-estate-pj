import HeroSection from '../components/home/HeroSection';
import PropertySlider from '../components/home/PropertySlider';
// import PropertyCard from '../components/home/PropertyCard';
import FAQSection from '../components/home/FAQSection';
import Newsletter from '../components/home/Newsletter';

function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PropertySlider />
      {/* <PropertyCard /> */}
      <FAQSection />
      {/* <Newsletter /> */}
    </div>
  );
}

export default Home;