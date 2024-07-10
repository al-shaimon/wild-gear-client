import { Button } from '@/components/ui/button';
import { useGetProductsQuery } from '@/redux/features/productsApi';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data.data);

  const featuredProducts = data.data.filter((product: any) => product.tags.includes('Featured'));

  return (
    <section className="">
      <div className="pt-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Featured</h2>
        <div className="flex flex-wrap -m-4">
          {featuredProducts?.map((product: any) => (
            <div key={product._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img
                  alt={product.name}
                  className="object-cover object-center w-full h-full block"
                  src={product.images[0]}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                <p className="mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <Link to="/products">
          <Button className="bg-black text-white hover:bg-white hover:text-black uppercase">
            View More
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
