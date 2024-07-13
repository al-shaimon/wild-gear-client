const About = () => {
  return (
    <section className="mx-4 py-12">
      <div className="">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-6">About Us</h2>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Store Information</h3>
          <p className="mb-2">
            <strong>Address:</strong> 1234 Wild Street, Gearstown, GT 12345
          </p>
          <p className="mb-2">
            <strong>Phone Number:</strong> (123) 456-7890
          </p>
          <p className="mb-2">
            <strong>Email:</strong> support@wildgears.com
          </p>
          <p className="mb-2">
            <strong>Customer Service Hours:</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 10:00 AM - 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6 mb-4">Retail Store Hours:</h3>
          <ul className="list-disc list-inside">
            <li>Monday - Friday: 11:00 AM - 6:00 PM</li>
            <li>Saturday: 12:00 PM - 5:00 PM</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6 mb-4">Connect with Us</h3>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className=""
              href="https://www.facebook.com/al.shaimon"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              className="ml-3"
              href="https://twitter.com/al_shaimon"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              className="ml-3"
              href="https://www.instagram.com/alshaimon"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a
              className="ml-3"
              href="https://www.linkedin.com/in/al-shaimon/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p>
            At WildGears, our mission is to inspire and equip adventurers and outdoor enthusiasts
            with top-quality gear and apparel. We are committed to offering innovative, durable, and
            sustainable products that enhance every outdoor experience. Whether you're scaling
            mountains, exploring trails, or camping under the stars, WildGears is dedicated to
            supporting your wildest adventures. We believe in fostering a community of explorers who
            share our passion for the great outdoors and are dedicated to preserving the natural
            world for future generations.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://i.ibb.co/M167Mrp/shaimon.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Al Shaimon</h2>
                  <h3 className="text-gray-500 mb-3">CEO</h3>
                  <p className="mb-4">
                    Shaimon leads our team with over 20 years of experience in the retail industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://i.ibb.co/C2g5V9z/mahim.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Mahim Arif</h2>
                  <h3 className="text-gray-500 mb-3">Marketing Manager</h3>
                  <p className="mb-4">
                    Mahim is our marketing guru, bringing innovative strategies to grow our brand.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://i.ibb.co/JzS0JJL/hamdan.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Hamdanul Haque</h2>
                  <h3 className="text-gray-500 mb-3">Customer Service Lead</h3>
                  <p className="mb-4">
                    Hamdan ensures that all our customers have a fantastic shopping experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://i.ibb.co/KsdBqjW/asir.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Asir Ishmam</h2>
                  <h3 className="text-gray-500 mb-3">Operations Manager</h3>
                  <p className="mb-4">
                    Asir oversees the day-to-day operations, ensuring everything runs smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 my-8">
          <h3 className="text-2xl font-semibold mb-4">Find Us Here</h3>
          <div className="h-[50vh]">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094073!2d144.95373631561618!3d-37.817209742627614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774d6a5f4dcd1!2sVictoria%20Harbour%20Promenade%2C%20Docklands%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sus!4v1625781234567!5m2!1sen!2sus"
              width="600"
              height="600"
              loading="lazy"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
