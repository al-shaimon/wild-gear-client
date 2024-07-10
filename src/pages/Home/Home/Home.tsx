import HeroSection from '@/pages/Home/HeroSection/HeroSection';
import BestSelling from '@/pages/Home/BestSelling/BestSelling';
import Categories from '@/pages/Home/Categories/Categories';
import FeaturedProducts from '@/pages/Home/FeaturedProducts/FeaturedProducts';
import Adventure from '@/pages/Home/Adventure/Adventure';
import FAQ from '@/pages/Home/FAQ/FAQ';

const Home = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <BestSelling />
      <Categories/>
      <FeaturedProducts/>
      <Adventure/>
      <FAQ />
    </div>
  );
};

export default Home;
