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
                    src="https://www.jack-wolfskin.com/dw/image/v2/AAQL_PRD/on/demandware.static/-/Library-Sites-JackWolfskin_SharedContentLib/default/dw3b034f81/categoryMoodImages/general/small/Ausruestung-Zelte-AND-Equipment-Zelte.jpg?sw=900&sh=675&sm=fit&sfrm=jpg"
                    alt="Product 1"
                    className="object-cover w-full h-[400px] md:h-[500px] lg:h-[650px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                    <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                      Wireless Headphones
                    </h3>
                    <p className="mt-2 text-sm md:text-base lg:text-lg">
                      Experience high-quality sound with our latest wireless headphones.
                    </p>
                    <div className="mt-4">
                      <Link to="/about">
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
                    src="https://www.jack-wolfskin.com/dw/image/v2/AAQL_PRD/on/demandware.static/-/Library-Sites-JackWolfskin_SharedContentLib/default/dw3b034f81/categoryMoodImages/general/small/Ausruestung-Zelte-AND-Equipment-Zelte.jpg?sw=900&sh=675&sm=fit&sfrm=jpg"
                    alt="Product 1"
                    className="object-cover w-full h-[400px] md:h-[500px] lg:h-[650px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                    <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                      Wireless Headphones
                    </h3>
                    <p className="mt-2 text-sm md:text-base lg:text-lg">
                      Experience high-quality sound with our latest wireless headphones.
                    </p>
                    <div className="mt-4">
                      <Link to="/about">
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
                    src="https://www.jack-wolfskin.com/dw/image/v2/AAQL_PRD/on/demandware.static/-/Library-Sites-JackWolfskin_SharedContentLib/default/dw3b034f81/categoryMoodImages/general/small/Ausruestung-Zelte-AND-Equipment-Zelte.jpg?sw=900&sh=675&sm=fit&sfrm=jpg"
                    alt="Product 1"
                    className="object-cover w-full h-[400px] md:h-[500px] lg:h-[650px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                    <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                      Wireless Headphones
                    </h3>
                    <p className="mt-2 text-sm md:text-base lg:text-lg">
                      Experience high-quality sound with our latest wireless headphones.
                    </p>
                    <div className="mt-4">
                      <Link to="/about">
                        <Button className="bg-white text-black hover:bg-black hover:text-white uppercase">
                          Shop Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/50 p-2 text-muted-foreground transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              <ChevronLeftIcon className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/50 p-2 text-muted-foreground transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              <ChevronRightIcon className="h-6 w-6" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
