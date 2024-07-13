import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { clearCart } from '@/redux/features/cartSlice';
import { useState } from 'react';
import { useUpdateProductMutation, useGetProductsQuery } from '@/redux/features/productsApi';
import { toast } from 'sonner';

interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const Checkout = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const [paymentMethod, setPaymentMethod] = useState<string>('cashOnDelivery');
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);
  const [updateProduct] = useUpdateProductMutation();
  const { refetch: refetchProducts } = useGetProductsQuery(undefined, { skip: true }); // Skip initial fetch

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutForm>();

  const onSubmit = async (data: CheckoutForm) => {
    // Show processing toast
    const loadingToastId = toast.loading('Processing your order...');
  
    if (paymentMethod === 'cashOnDelivery') {
      // Handle Cash on Delivery
      console.log('Order placed with Cash on Delivery:', data);
  
      // Update product quantities
      for (const item of cart) {
        await updateProduct({
          id: item._id,
          inventory: {
            quantity: item.inventory.quantity - item.quantity,
            inStock: item.inventory.quantity - item.quantity > 0,
          },
        });
      }
  
      // Refetch products data after updating quantities
      try {
        await refetchProducts();
      } catch (error) {
        console.error('Error refetching products:', error);
      }
  
      // Clear the cart
      dispatch(clearCart());
  
      // Dismiss the loading toast
      toast.dismiss(loadingToastId);
  
      // Show success toast
      toast.success('Your order has been placed successfully!');
  
      // Redirect to success page
      setOrderPlaced(true);
    }
  };

  const renderOrderSuccess = () => (
    <div className="text-center p-4 max-w-4xl mx-auto min-h-screen md:mt-10">
      <h2 className="text-2xl font-semibold mb-4">Order Placed Successfully!</h2>
      <p>Your order has been placed successfully.</p>
    </div>
  );

  if (orderPlaced) {
    return renderOrderSuccess();
  }

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 max-w-4xl mx-auto min-h-screen md:mt-10">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      {cart.length > 0 ? (
        <>
          <div className="mb-6">
            {cart.map((item) => (
              <div key={item._id} className="flex justify-between items-center p-2 border-b">
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">Price: ${item.price}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <img
                  src={item.images[0] || '/placeholder.svg'}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Subtotal: ${totalPrice.toFixed(2)}</h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium ">
                Name
              </label>
              <input
                id="name"
                {...register('name', { required: true })}
                className={`mt-1 p-2 block w-full rounded-md border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium ">
                Email
              </label>
              <input
                id="email"
                {...register('email', { required: true })}
                className={`mt-1 p-2 block w-full rounded-md border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium ">
                Phone Number
              </label>
              <input
                id="phone"
                {...register('phone', { required: true })}
                className={`mt-1 p-2 block w-full rounded-md border ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                } focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.phone && <span className="text-red-500 text-sm">Phone is required</span>}
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium ">
                Delivery Address
              </label>
              <input
                id="address"
                {...register('address', { required: true })}
                className={`mt-1 p-2 block w-full rounded-md border ${
                  errors.address ? 'border-red-500' : 'border-gray-300'
                } focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.address && <span className="text-red-500 text-sm">Address is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium">Payment Method</label>
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={paymentMethod === 'cashOnDelivery'}
                    onChange={() => setPaymentMethod('cashOnDelivery')}
                    className="form-radio"
                  />
                  <span className="ml-2">Cash on Delivery</span>
                </label>
              </div>
            </div>

            <div className="flex md:justify-end">
              <Button
                type="submit"
                className="bg-black text-white hover:bg-white hover:text-black hover:border uppercase"
              >
                Place Order
              </Button>
            </div>
          </form>
        </>
      ) : (
        <>
          <div>
            <h3>Cart is empty!</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
