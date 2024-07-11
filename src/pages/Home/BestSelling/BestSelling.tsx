import { Button } from '@/components/ui/button';
import { useGetProductsQuery } from '@/redux/features/productsApi';
import { Link } from 'react-router-dom';
import { CirclesWithBar } from 'react-loader-spinner';

const BestSelling = () => {
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

  console.log(data.data);

  const bestSellingProducts = data.data.filter((product: any) =>
    product.tags.includes('Best Selling')
  );

  return (
    <section className="">
      <div className="flex flex-wrap -m-4">
        {bestSellingProducts?.map((product: any) => (
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

export default BestSelling;
