import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Cart from '@/pages/Cart/Cart/Cart';
import { MenuIcon } from 'lucide-react';
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
            <Cart />
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
