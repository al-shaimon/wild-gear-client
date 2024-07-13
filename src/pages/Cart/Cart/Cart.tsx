import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { PopoverClose } from '@radix-ui/react-popover';
import { MinusIcon, PlusIcon, ShoppingCartIcon, XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updateQuantity, removeFromCart } from '@/redux/features/cartSlice';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import './Cart.css';

const Cart = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<any>(null);

  const handleIncreaseQuantity = (item: any) => {
    if (item.quantity < item.inventory.quantity) {
      dispatch(updateQuantity({ id: item._id, quantity: item.quantity + 1 }));
    } else {
      toast.error('Maximum stock limit reached');
    }
  };

  const handleDecreaseQuantity = (item: any) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item._id, quantity: item.quantity - 1 }));
    } else {
      setItemToRemove(item);
      setIsDialogOpen(true);
    }
  };

  const handleConfirmRemove = () => {
    dispatch(removeFromCart(itemToRemove._id));
    setIsDialogOpen(false);
    toast.success('Item removed from the cart');
  };

  const handleCancelRemove = () => {
    setIsDialogOpen(false);
    setItemToRemove(null);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="sr-only">Cart</span>
            {cart.length > 0 && (
              <Badge className="absolute top-4 right-0 h-4 w-4 rounded-full bg-primary text-xs text-center">
                {cart.length}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 md:w-96 bg-background shadow-lg max-h-[70vh] overflow-y-auto custom-scrollbar">
          <div className="flex flex-col gap-4 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Cart</h3>
              <div>
                <PopoverClose asChild>
                  <Button variant="ghost" size="icon">
                    <XIcon className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </PopoverClose>
              </div>
            </div>
            {cart.length === 0 ? (
              <div className="flex justify-center items-center h-24">
                <h4 className="text-center">Cart is empty!</h4>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {cart.map((item) => (
                  <div key={item._id} className="flex items-center gap-4">
                    <img
                      src={item.images[0] || '/placeholder.svg'}
                      width={64}
                      height={64}
                      alt={item.name}
                      className="rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">${item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        <MinusIcon className="h-5 w-5" />
                        <span className="sr-only">Decrease quantity</span>
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleIncreaseQuantity(item)}
                      >
                        <PlusIcon className="h-5 w-5" />
                        <span className="sr-only">Increase quantity</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {cart.length > 0 && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Subtotal</span>
                  <span className="text-sm font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <PopoverClose asChild>
                  <Link to="/checkout">
                    <Button className="w-full bg-black text-white hover:bg-white hover:text-black hover:border uppercase">
                      Checkout
                    </Button>
                  </Link>
                </PopoverClose>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove Item</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove this item from the cart?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button className="uppercase" variant="ghost" onClick={handleCancelRemove}>
              Cancel
            </Button>
            <Button className="uppercase" variant="destructive" onClick={handleConfirmRemove}>
              Remove
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Cart;
