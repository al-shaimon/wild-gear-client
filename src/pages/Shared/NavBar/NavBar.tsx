import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { PopoverClose } from '@radix-ui/react-popover';
import { MenuIcon, MinusIcon, PlusIcon, ShoppingCartIcon, XIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
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
                    <div className="flex items-center gap-4">
                      <img
                        src="/placeholder.svg"
                        width={64}
                        height={64}
                        alt="Product"
                        className="rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">Product Name</h4>
                        <p className="text-sm text-muted-foreground">$19.99</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <MinusIcon className="h-5 w-5" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span>1</span>
                        <Button variant="ghost" size="icon">
                          <PlusIcon className="h-5 w-5" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src="/placeholder.svg"
                        width={64}
                        height={64}
                        alt="Product"
                        className="rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">Another Product</h4>
                        <p className="text-sm text-muted-foreground">$29.99</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <MinusIcon className="h-5 w-5" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span>2</span>
                        <Button variant="ghost" size="icon">
                          <PlusIcon className="h-5 w-5" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Subtotal</span>
                      <span className="text-sm font-medium">$79.97</span>
                    </div>
                    <Button className="w-full">Checkout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>

      {/* <header className="text-gray-600 body-font my-6">
        <div className="flex flex-wrap flex-col md:flex-row items-center">
          <NavNavLink to="/">
            <img className="w-56" src="/logo.png" alt="logo" />
          </NavNavLink>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavNavLink to="/" className="mr-5 hover:text-gray-900">
              Home
            </NavNavLink>
            <NavNavLink to="/products" className="mr-5 hover:text-gray-900">
              Products
            </NavNavLink>
            <NavNavLink to="/manage-products" className="mr-5 hover:text-gray-900">
              Manage Products
            </NavNavLink>
            <NavNavLink to="/about" className="mr-5 hover:text-gray-900">
              About Us
            </NavNavLink>
            <NavNavLink to="/cart" className="mr-5 hover:text-gray-900">
              Cart
            </NavNavLink>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Cart
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header> */}
    </>
  );
};

export default NavBar;
