import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <header className="text-gray-600 body-font my-6">
        <div className="flex flex-wrap flex-col md:flex-row items-center">
          <NavLink to="/">
            <img className="w-56" src="/logo.png" alt="logo" />
          </NavLink>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to="/" className="mr-5 hover:text-gray-900">
              Home
            </NavLink>
            <NavLink to="/products" className="mr-5 hover:text-gray-900">
              Products
            </NavLink>
            <NavLink to="/manage-products" className="mr-5 hover:text-gray-900">
              Manage Products
            </NavLink>
            <NavLink to="/about" className="mr-5 hover:text-gray-900">
              About Us
            </NavLink>
            <NavLink to="/cart" className="mr-5 hover:text-gray-900">
              Cart
            </NavLink>
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
      </header>
    </>
  );
};

export default NavBar;
