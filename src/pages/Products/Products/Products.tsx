import { useGetProductsQuery } from '@/redux/features/productsApi';

const Products = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data.data);

  return (
    <section className="mx-4">
      <div className="pt-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">All Product</h2>
        <div className="flex flex-wrap -m-4">
          {data?.data?.map((product: any) => (
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
    </section>
  );
};

export default Products;
