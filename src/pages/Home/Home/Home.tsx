import HeroSection from '@/pages/Home/HeroSection/HeroSection';
import FAQ from '@/pages/Home/FAQ/FAQ';
import BestSelling from '@/pages/Home/BestSelling/BestSelling';
import Categories from '@/pages/Home/Categories/Categories';
import FeaturedProducts from '@/pages/Home/FeaturedProducts/FeaturedProducts';

const Home = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <BestSelling />
      <Categories/>
      <FeaturedProducts/>
      <FAQ />
    </div>
  );
};

export default Home;
