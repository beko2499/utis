
import React, { useState } from 'react';
import type { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
  isMobile?: boolean;
}> = ({ page, currentPage, setCurrentPage, children, isMobile = false }) => {
  const isActive = currentPage === page;
  const activeClasses = 'text-blue-600 font-bold';
  const inactiveClasses = 'text-slate-600 hover:text-blue-600';
  const mobileClasses = 'block px-3 py-2 rounded-md text-base font-medium';
  const desktopClasses = 'px-3 py-2 rounded-md text-sm font-semibold';

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setCurrentPage(page);
      }}
      className={`${isMobile ? mobileClasses : desktopClasses} ${isActive ? activeClasses : inactiveClasses} transition-colors duration-300`}
    >
      {children}
    </a>
  );
};

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="text-2xl font-bold text-slate-800 tracking-wider">
                UTIS
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ms-10 flex items-baseline space-x-4 rtl:space-x-reverse">
               <NavLink page="home" currentPage={currentPage} setCurrentPage={setCurrentPage}>الرئيسية</NavLink>
               <NavLink page="products" currentPage={currentPage} setCurrentPage={setCurrentPage}>المنتجات</NavLink>
               <NavLink page="contact" currentPage={currentPage} setCurrentPage={setCurrentPage}>اتصل بنا</NavLink>
            </div>
          </div>
          <div className="-me-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="bg-slate-100 inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink page="home" currentPage={currentPage} setCurrentPage={setCurrentPage} isMobile={true}>الرئيسية</NavLink>
            <NavLink page="products" currentPage={currentPage} setCurrentPage={setCurrentPage} isMobile={true}>المنتجات</NavLink>
            <NavLink page="contact" currentPage={currentPage} setCurrentPage={setCurrentPage} isMobile={true}>اتصل بنا</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
