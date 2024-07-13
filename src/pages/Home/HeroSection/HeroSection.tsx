import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="w-full mt-2">
      <div className="">
        <div className="flex flex-col items-center space-y-6">
          <Carousel
            className="w-full"
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="relative overflow-hidden rounded-lg group">
                  <img
                    src="https://i.ibb.co/1670pNP/sale.jpg"
                    alt="Product 1"
                    className="object-cover w-full h-[400px] md:h-[500px] lg:h-[80vh]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white ">
                    <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl uppercase">
                      Summer Sale
                    </h3>
                    <p className="mt-2 text-sm md:text-base lg:text-lg">Save upto 35%</p>
                    <div className="mt-4">
                      <Link to="/products">
                        <Button className="bg-white text-black hover:bg-black hover:text-white uppercase">
                          Shop Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative overflow-hidden rounded-lg group">
                  <img
                    src="https://i.ibb.co/7zHZmy3/1.jpg"
                    alt="Product 2"
                    className="object-cover w-full h-[400px] md:h-[500px] lg:h-[80vh]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white ">
                    <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl uppercase">
                      Big Agnes
                    </h3>
                    <p className="mt-2 text-sm md:text-base lg:text-lg">Save upto 35%</p>
                    <div className="mt-4">
                      <Link to="/products?category=Tent">
                        <Button className="bg-white text-black hover:bg-black hover:text-white uppercase">
                          Shop Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative overflow-hidden rounded-lg group">
                  <img
                    src="https://i.ibb.co/RBjcmmR/3.jpg"
                    alt="Product 3"
                    className="object-cover w-full h-[400px] md:h-[500px] lg:h-[80vh]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white ">
                    <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl uppercase">
                      Clearance Sale
                    </h3>
                    <p className="mt-2 text-sm md:text-base lg:text-lg">Save upto 35%</p>
                    <div className="mt-4">
                      <Link to="/products">
                        <Button className="bg-white text-black hover:bg-black hover:text-white uppercase">
                          Shop Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
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
    </section>
  );
};

export default HeroSection;
