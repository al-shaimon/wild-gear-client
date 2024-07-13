import { Button } from '@/components/ui/button';
import { useGetProductsQuery } from '@/redux/features/productsApi';
import { Link } from 'react-router-dom';
import { CirclesWithBar } from 'react-loader-spinner';
import StarRating from '@/utils/StarRating';

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
          <Link
            key={product._id}
            to={`/products/${product._id}`}
            className="lg:w-1/4 md:w-1/2 p-4 w-full"
          >
            <div className="relative block min-h-[500px] rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <img
                alt={product.name}
                className="object-cover object-center w-full h-full"
                src={product.images[0]}
              />
              <div className="mt-4 p-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                <div className="flex gap-10 items-center mt-3">
                  <span className="text-md font-semibold">Price: ${product.price}</span>
                  <span>
                    {product.rating ? <StarRating rating={product.rating} /> : <> Not rated yet</>}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-5 md:mt-10">
        <Link to="/products">
          <Button className="bg-black text-white hover:bg-white hover:text-black hover:border uppercase">
            View More
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BestSelling;
