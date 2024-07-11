import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { PopoverClose } from '@radix-ui/react-popover';
import { MenuIcon, MinusIcon, PlusIcon, ShoppingCartIcon, XIcon } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updateQuantity, removeFromCart } from '@/redux/features/cartSlice';
import { toast } from 'sonner';
import Swal from 'sweetalert2';

const NavBar = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  console.log('cart', cart);

  const handleIncreaseQuantity = (item: any) => {
    if (item.quantity < item.inventory.quantity) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
    } else {
      toast.error('Maximum stock limit reached');
    }
  };

  const handleDecreaseQuantity = (item: any) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      Swal.fire({
        title: 'Remove Item',
        text: 'Are you sure you want to remove this item from the cart?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!',
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(removeFromCart(item.id));
          Swal.fire('Removed!', 'Your item has been removed from the cart.', 'success');
        }
      });
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
        <div className="flex h-16 items-center justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <nav className="grid gap-4 px-4 py-6">
                <SheetClose asChild>
                  <NavLink
                    to="/"
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                  >
                    Home
                  </NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink
                    to="/products"
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                  >
                    Products
                  </NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink
                    to="/manage-products"
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                  >
                    Manage Product
                  </NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink
                    to="/about"
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                  >
                    About Us
                  </NavLink>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
          <NavLink to="/" className="flex items-center gap-2">
            <img className="w-44 md:w-56" src="/logo.png" alt="logo" />
          </NavLink>
          <nav className="hidden space-x-4 md:flex">
            <NavLink
              to="/"
              className="rounded-md px-3 py-2  font-medium transition-colors hover:bg-muted hover:text-foreground"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="rounded-md px-3 py-2  font-medium transition-colors hover:bg-muted hover:text-foreground"
            >
              Products
            </NavLink>
            <NavLink
              to="/manage-products"
              className="rounded-md px-3 py-2  font-medium transition-colors hover:bg-muted hover:text-foreground"
            >
              Manage Product
            </NavLink>
            <NavLink
              to="/about"
              className="rounded-md px-3 py-2  font-medium transition-colors hover:bg-muted hover:text-foreground"
            >
              About Us
            </NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ShoppingCartIcon className="h-6 w-6" />
                  <span className="sr-only">Cart</span>
                </Button>
              </PopoverTrigger>
              {cart.length === 0 ? (
                <PopoverContent className="w-80 bg-background shadow-lg">
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
                    <div className="flex justify-center items-center h-24">
                      <h4 className="text-center">Cart is empty!</h4>
                    </div>
                  </div>
                </PopoverContent>
              ) : (
                <PopoverContent className="w-80 bg-background shadow-lg">
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
                    <div className="flex flex-col gap-4">
                      {cart?.map((item) => (
                        <div key={item.id} className="flex items-center gap-4">
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
                  </div>
                </PopoverContent>
              )}
            </Popover>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
