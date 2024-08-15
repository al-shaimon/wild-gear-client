import { useGetProductsQuery } from '@/redux/features/productsApi';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CirclesWithBar } from 'react-loader-spinner';

interface ICategoryImages {
  [key: string]: string;
}

const categoryImages: ICategoryImages = {
  Jacket: '/jacket.webp',
  Tent: '/tent.webp',
  'Camping Stove': '/2.webp',
  Backpack: '/backpack.webp',
  'Portable Chair': '/portable-chair.webp',
  Flashlights: '/flashlights.webp',
  'Camping Cookware': '/camping-cookware.webp',
  'First Aid Kit': '/first-aid-kit.webp',
  'Water Bottle': '/water-bottle.webp',
  'Sleeping Bag': '/sleeping-bag.webp',
  'Hiking Boots': '/hiking-boots.webp',
};

const Categories = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CirclesWithBar
          height="100"
          width="100"
          color="#000"
          outerCircleColor="#000"
          innerCircleColor="#000"
          barColor="#000"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  const categories = Array.from(new Set(data.data.map((product: any) => product.category)));

  return (
    <div className="pt-12">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Categories</h2>
      <div className="mt-4">
        <Carousel className="w-full">
          <CarouselContent>
            {categories.map((category: any, index: any) => (
              <CarouselItem key={index} className="md:basis-1/5">
                <Link to={`/products?category=${category}`} key={index}>
                  <Card className="h-40 flex justify-center items-center relative overflow-hidden transition-transform transform hover:scale-110">
                    <img
                      src={categoryImages[category]}
                      alt={category}
                      className="absolute inset-0 w-full h-full object-cover filter brightness-75"
                      loading="lazy"
                    />
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-white text-xl font-bold">{category}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/50 p-2 text-muted-foreground transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hidden md:block">
            <ChevronLeftIcon className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/50 p-2 text-muted-foreground transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hidden md:block">
            <ChevronRightIcon className="h-6 w-6" />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
};

export default Categories;
