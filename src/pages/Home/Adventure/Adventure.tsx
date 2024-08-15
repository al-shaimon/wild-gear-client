import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Adventure = () => {
  const bg = '/bg.webp';

  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="my-10"
    >
      <div className="flex-1 md:flex p-4 md:p-0">
        <div className="pb-5 md:pr-12 md:mt-24 md:mb-24 md:w-[50%]">
          <img className="" src="/5.webp" alt="Adventure" />
        </div>
        <div className="md:mt-24 md:mr-40 md:pl-12 md:w-[50%]">
          <h3 className="text-white text-center md:text-left text-3xl md:text-5xl font-bold">
            Your Adventure Starts Here.
          </h3>
          <p className="text-white/70 text-center md:text-left py-5">
            Shop the latest lightweight backpacking equipment and hiking gear from top brands like
            Western Mountaineering, MSR, Therm-a-Rest, Osprey, and Hilleberg to make your next
            backcountry trip easier and faster. Not quite looking to hike the PCT? Shop our huge
            selection of luxury car camping gear to outfit your crew with super-comfy sleeping pads,
            a 6-person tent, and a gourmet camp kitchen. No matter how you travel in the outdoors,
            we have the camping outdoor gear to get you there. There's no telling who might explore
            with you when you're equipped and leading the way.
            <br />
            <br />
            From backpacks to tents, carabiners to snowshoes, we have everything to satisfy those
            who love outdoor gear. We'll help you outfit your next adventure and ensure it's safe,
            comfortable, and memorable. We proudly carry one of the best selections of climbing gear
            anywhere, for everyone from first-time gym climbers to big wall specialists.
          </p>
          <div className="text-center md:text-left">
            <Link to="/about">
              <Button className="bg-white text-black hover:bg-black hover:text-white mb-5 uppercase">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adventure;
