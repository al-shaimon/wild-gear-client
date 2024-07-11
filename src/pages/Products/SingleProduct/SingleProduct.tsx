import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '@/redux/features/productsApi';
import { CirclesWithBar } from 'react-loader-spinner';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToCart, clearError } from '@/redux/features/cartSlice';
import StarRating from '@/utils/StarRating';
import { toast } from 'sonner';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetProductByIdQuery(id);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);
  const error = useAppSelector((state) => state.cart.error);

  const product = data?.data;
  const inCart = cart.find((item: any) => item.id === product?.id);
  const quantityInCart = inCart ? inCart.quantity : 0;
  const canAddToCart =
    product?.inventory.inStock && product.inventory.quantity - quantityInCart > 0;

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (product && product.inventory.quantity === 0) {
      toast.error('Item is out of stock');
    }
  }, [product]);

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
          visible={true}
        />
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (canAddToCart) {
      dispatch(addToCart({ ...product, inventory: { ...product.inventory } }));
      toast.success('Item added to cart');
    } else {
      toast.error('Item is out of stock');
    }
  };

  return (
    <section className="body-font overflow-hidden min-h-dvh">
      <div className="px-5 py-12 ">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.name}
            className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded"
            src={product.images[0]}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex gap-5 mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <span className="text-sm text-gray-500">
                Stock: {product.inventory.quantity}{' '}
                {product.inventory.inStock ? '(In Stock)' : '(Out of Stock)'}
              </span>
              <span className="flex gap-2 text-sm text-gray-500">
                Ratings: <StarRating rating={4.5} />
              </span>
            </div>
            <div className="flex">
              <div>
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
              </div>
              <Button
                className={`flex ml-auto bg-black text-white hover:bg-white hover:text-black hover:border uppercase ${
                  !canAddToCart && 'cursor-not-allowed opacity-50'
                }`}
                onClick={handleAddToCart}
                disabled={!canAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
