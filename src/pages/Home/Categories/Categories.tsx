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

const Categories = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data.data);

  // Extract unique categories
  const categories = Array.from(new Set(data.data.map((product: any) => product.category)));

  console.log(categories);

  return (
    <div>
      <h3 className="text-2xl md:text-4xl font-semibold mt-12">Categories</h3>
      <div className="mt-4">
        <Carousel className="w-full">
          <CarouselContent>
            {categories?.map((category: any, index: any) => (
              <CarouselItem key={index} className="md:basis-1/5">
                <Link to={`/products?category=${category}`} key={index}>
                  <Card className="h-40 flex justify-center items-center">
                    <CardHeader>
                      <CardTitle>{category}</CardTitle>
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
