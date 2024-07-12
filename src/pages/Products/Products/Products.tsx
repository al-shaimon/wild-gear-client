import { CirclesWithBar } from 'react-loader-spinner';
import { Link, useSearchParams } from 'react-router-dom';
import { useGetProductsQuery } from '@/redux/features/productsApi';

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
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

  const filteredProducts = category
    ? data.data.filter((product: any) => product.category === category)
    : data.data;

  const headingTitle = category ? `Category: ${category}` : 'All Products';

  return (
    <section className="mx-4">
      <div className="pt-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">{headingTitle}</h2>
        <div className="flex flex-wrap -m-4">
          {filteredProducts?.map((product: any) => (
            <Link
              key={product._id}
              to={`/products/${product._id}`}
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <div>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
