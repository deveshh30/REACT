import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
  
    <div className="w-full bg-purple-600 text-white">
      <div className="text-4xl w-full flex justify-between items-center p-6">
        <h1>
          <Link to="/">dev_store</Link>
        </h1>

        <div className="hidden md:flex gap-10 text-xl">
          <Link to="/">Home</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">Product</Link>
          <Link to="/cart" className="gap-1 left-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span className="total_item">
              <sup className="text-sm">10</sup>
            </span>
          </Link>
        </div>
      </div>
    </div>

    <div className="nav_btn_open_close block md:hidden p-2">
  {/* Toggle button: hamburger when closed, X when open (mobile only) */}
  {!navOpen ? (
    <button aria-label="Open menu" onClick={() => setNavOpen(true)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-menu"
      >
        <path d="M4 5h16" />
        <path d="M4 12h16" />
        <path d="M4 19h16" />
      </svg>
    </button>
  ) : (
    <button aria-label="Close menu" onClick={() => setNavOpen(false)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-x"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  )}
</div>

    {navOpen && (
      <div className="fixed inset-0 z-50 md:hidden bg-black/50">
        <div className="w-64 bg-purple-600 text-white h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl">dev_store</h2>
            <button aria-label="Close mobile menu" onClick={() => setNavOpen(false)} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-lg">
            <Link onClick={() => setNavOpen(false)} to="/">Home</Link>
            <Link onClick={() => setNavOpen(false)} to="/orders">Orders</Link>
            <Link onClick={() => setNavOpen(false)} to="/contact">Contact</Link>
            <Link onClick={() => setNavOpen(false)} to="/product">Product</Link>
            <Link onClick={() => setNavOpen(false)} to="/cart">Cart</Link>
          </nav>
        </div>
      </div>
    )}


  </>
  );
};

export default Header;
