const About = () => {
  return (
    <section className="mx-4 py-12">
      <div className="">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-6">About Us</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-8 ">
          <h3 className="text-2xl font-semibold mb-4">Store Information</h3>
          <p className="mb-2">
            <strong>Address:</strong> 1234 Dummy Street, Faketown, FK 12345
          </p>
          <p className="mb-2">
            <strong>Phone Number:</strong> (123) 456-7890
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
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 ">
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
