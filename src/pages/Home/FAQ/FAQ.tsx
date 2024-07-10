import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <h1 className="text-xl md:text-2xl text-center font-medium ">FAQs</h1>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg md:text-xl">What is WildGears?</AccordionTrigger>
        <AccordionContent className="text-base">
          WildGears is your one-stop online destination for all camping essentials, offering a wide
          range of products to enhance your outdoor adventures.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg md:text-xl">How do I place an order?</AccordionTrigger>
        <AccordionContent className="text-base">
          Browse through our product categories. Click on a product, choose your quantity, and click
          "Add to Cart." When you're ready to purchase, go to your cart and click "Checkout."
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg md:text-xl">
          Do you ship internationally?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          Yes, we offer international shipping to most countries. Please check our shipping policy
          for more details.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg md:text-xl">
          What is your return policy?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          We accept returns within 30 days of purchase. The items must be unused, in original
          packaging, and accompanied by a receipt or proof of purchase. Visit our "Returns and
          Exchanges" page for more information.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
