import React, { useState } from 'react';
import { Page, NavItem } from '../types';
import { Menu, X, Lock, Linkedin, Twitter, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', page: Page.Home },
  { label: 'The Program', page: Page.Program },
  { label: 'Content Hub', page: Page.Insights },
  { label: 'About AMAP', page: Page.About },
  { label: 'Contact', page: Page.Contact },
];

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => handleNavClick(Page.Home)}>
              <img 
                src="https://res.cloudinary.com/dttoqt6w7/image/upload/v1765421474/AMAP_logo_b1ujf5.jpg" 
                alt="AMAP Logo" 
                className="h-10 w-auto rounded-sm" 
              />
              <span className="ml-2 text-xl font-bold text-brand-900 tracking-tight">AMAP</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.page
                      ? 'text-brand-800 border-b-2 border-brand-800'
                      : 'text-slate-600 hover:text-brand-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick(Page.Portal)}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-brand-800 rounded-md hover:bg-brand-900 transition-colors"
              >
                <Lock className="w-4 h-4 mr-2" />
                Scholar Portal
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-brand-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 animate-slide-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    currentPage === item.page
                      ? 'bg-brand-50 text-brand-800'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-brand-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick(Page.Portal)}
                className="block w-full text-left px-3 py-2 mt-4 text-base font-medium text-brand-800 bg-slate-50 rounded-md"
              >
                Scholar Portal Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="https://res.cloudinary.com/dttoqt6w7/image/upload/v1765421474/AMAP_logo_b1ujf5.jpg" 
                  alt="AMAP Logo" 
                  className="h-8 w-auto rounded-sm" 
                />
                <span className="ml-2 text-xl font-bold text-white">AMAP</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Empowering the next generation of African economic leaders through rigorous training, critical analysis, and policy formulation.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-brand-100 uppercase tracking-wider mb-4">Navigation</h3>
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleNavClick(item.page)}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-brand-100 uppercase tracking-wider mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Mail className="h-5 w-5" /></a>
              </div>
              <p className="text-slate-500 text-xs">
                &copy; {new Date().getFullYear()} AMAP. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};