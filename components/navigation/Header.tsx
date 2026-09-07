'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { PrimaryButton } from '../interactive/PrimaryButton';
import { TextLink } from '../interactive/TextLink';
import { ServicesDropdown } from './ServicesDropdown';
import { MobileNavigation } from './MobileNavigation';

interface HeaderProps {
  className?: string;
}

/**
 * Header Component
 * 
 * Desktop header with primary navigation and Services dropdown.
 * Based on DESIGN.md and SITEMAP.md specifications.
 */
export function Header({ className = '' }: HeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        servicesButtonRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node) &&
        !servicesButtonRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isServicesOpen) {
        setIsServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isServicesOpen]);

  // Navigation items from SITEMAP.md and CONTENT.md
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', hasDropdown: true },
    { label: 'Solutions', href: '/solutions/' },
    { label: 'Experience', href: '/experience/' },
    { label: 'About', href: '/about/' },
    { label: 'Insights', href: '/insights/' },
    { label: 'Contact', href: '/contact/' },
  ];

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header
      className={`
        ${className}
        sticky top-0 z-50
        transition-all
        duration-200
        ease-standard
        bg-bg-primary
        border-b
        border-border-subtle
        ${isSticky ? 'shadow-sm' : ''}
      `}
      role="banner"
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex min-h-16 items-center gap-4 md:min-h-20 xl:gap-8">
          {/* Logo / Company Name */}
          <div className="flex shrink-0 items-center">
            <a
              href="/"
              className="block transition-opacity duration-150 hover:opacity-80"
              aria-label="The JAAT Company home"
            >
              <Image
                src="/brand/the-jaat-company-logo.png"
                alt="The JAAT Company"
                width={194}
                height={81}
                className="h-10 w-auto max-w-[170px] object-contain md:h-12 md:max-w-[190px]"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden min-w-0 flex-1 items-center justify-center space-x-3 xl:flex xl:space-x-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <>
                    <button
                      ref={item.label === 'Services' ? servicesButtonRef : undefined}
                      onClick={toggleServices}
                      className="flex items-center text-text-primary hover:text-brand-primary transition-colors duration-150 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-state-focus focus-visible:ring-offset-2 rounded"
                      aria-expanded={isServicesOpen}
                      aria-label={`${item.label} menu`}
                    >
                      {item.label}
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform duration-150 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isServicesOpen && (
                      <ServicesDropdown
                        ref={servicesDropdownRef}
                        isOpen={isServicesOpen}
                        onClose={() => setIsServicesOpen(false)}
                      />
                    )}
                  </>
                ) : (
                  <TextLink
                    href={item.href}
                    variant="default"
                    underline="hover"
                    className="font-medium"
                  >
                    {item.label}
                  </TextLink>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden shrink-0 xl:block">
            <PrimaryButton as="link" href="/contact/" size="md">
              Book a Technical Consultation
            </PrimaryButton>
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
