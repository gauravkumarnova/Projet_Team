'use client';

import { useState, useEffect, useRef } from 'react';
import { PrimaryButton } from '../interactive/PrimaryButton';
import { TextLink } from '../interactive/TextLink';

interface MobileNavigationProps {
  className?: string;
}

/**
 * MobileNavigation Component
 * 
 * Accessible mobile navigation menu with focus management and Escape handling.
 * Based on DESIGN.md: "clear menu button, accessible label, keyboard support,
 * focus management, escape-to-close where appropriate, body scroll handling"
 */
export function MobileNavigation({ className = '' }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  // Navigation items from SITEMAP.md and CONTENT.md
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: 'Solutions', href: '/solutions/' },
    { label: 'Experience', href: '/experience/' },
    { label: 'About', href: '/about/' },
    { label: 'Insights', href: '/insights/' },
    { label: 'Contact', href: '/contact/' },
  ];

  // Services items for mobile (full list in menu)
  const services = [
    { label: 'Cloud & DevOps Engineering', href: '/services/cloud-devops/' },
    { label: 'Managed Cloud & Infrastructure', href: '/services/managed-cloud-infrastructure/' },
    { label: 'Cloud Migration & Modernisation', href: '/services/cloud-migration-modernisation/' },
    { label: 'Fractional Technology Team', href: '/services/fractional-technology-team/' },
    { label: 'Software Engineering', href: '/services/software-engineering/' },
    { label: 'Backup & Disaster Recovery', href: '/services/backup-disaster-recovery/' },
    { label: 'Streaming Infrastructure', href: '/services/streaming-infrastructure/' },
  ];

  // Toggle menu
  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    
    if (newState) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
      // Focus first menu item after animation
      setTimeout(() => {
        firstMenuItemRef.current?.focus();
      }, 100);
    } else {
      // Restore body scroll
      document.body.style.overflow = '';
      // Return focus to trigger
      triggerRef.current?.focus();
    }
  };

  // Close menu
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    triggerRef.current?.focus();
  };

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        triggerRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Trap focus within menu when open
  useEffect(() => {
    const handleTabKey = (event: KeyboardEvent) => {
      if (!isOpen || !menuRef.current) return;

      const focusableElements = menuRef.current.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (event.key === 'Tab') {
        if (event.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleTabKey);
    }
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  return (
    <div className={`${className}`}>
      {/* Menu Trigger Button */}
      <button
        ref={triggerRef}
        onClick={toggleMenu}
        className="xl:hidden flex items-center justify-center w-10 h-10 text-text-primary hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-state-focus focus-visible:ring-offset-2 rounded"
        aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-haspopup="true"
      >
        <svg
          className="w-6 h-6 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`
          fixed
          inset-0
          top-16
          md:top-20
          xl:hidden
          bg-bg-primary
          z-modal
          transform
          transition-transform
          duration-300
          ease-standard
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          overflow-y-auto
        `}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Menu Content */}
          <div className="flex-1 px-6 py-8">
            {/* Main Navigation */}
            <nav className="mb-8" aria-label="Mobile main navigation">
              <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                Navigation
              </h2>
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <TextLink
                      ref={index === 0 ? firstMenuItemRef : undefined}
                      href={item.href}
                      variant="default"
                      underline="none"
                      size="lg"
                      className="block py-3 px-4 rounded-md hover:bg-state-hover transition-colors duration-150 font-medium"
                      onClick={closeMenu}
                      tabIndex={isOpen ? 0 : -1}
                    >
                      {item.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                Services
              </h2>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.href}>
                    <TextLink
                      href={service.href}
                      variant="default"
                      underline="none"
                      className="block py-3 px-4 rounded-md hover:bg-state-hover transition-colors duration-150"
                      onClick={closeMenu}
                      tabIndex={isOpen ? 0 : -1}
                    >
                      {service.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                Solutions
              </h2>
              <ul className="space-y-2">
                <li>
                  <TextLink
                    href="/solutions/startups-saas/"
                    variant="default"
                    underline="none"
                    className="block py-3 px-4 rounded-md hover:bg-state-hover transition-colors duration-150"
                    onClick={closeMenu}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    For Startups & SaaS
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    href="/solutions/smes-growing-businesses/"
                    variant="default"
                    underline="none"
                    className="block py-3 px-4 rounded-md hover:bg-state-hover transition-colors duration-150"
                    onClick={closeMenu}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    For SMEs & Growing Businesses
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    href="/solutions/agencies/"
                    variant="default"
                    underline="none"
                    className="block py-3 px-4 rounded-md hover:bg-state-hover transition-colors duration-150"
                    onClick={closeMenu}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    For Agencies
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    href="/solutions/media-streaming/"
                    variant="default"
                    underline="none"
                    className="block py-3 px-4 rounded-md hover:bg-state-hover transition-colors duration-150"
                    onClick={closeMenu}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    For Media & Streaming
                  </TextLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile CTA Section */}
          <div className="border-t border-border-subtle px-6 py-6">
            <PrimaryButton
              as="link"
              href="/contact/"
              fullWidth
              size="lg"
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
            >
              Book a Technical Consultation
            </PrimaryButton>
            <div className="mt-4 text-center">
              <TextLink
                href="/services/"
                variant="brand"
                underline="hover"
                className="text-sm"
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
              >
                Explore Services
              </TextLink>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-overlay xl:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
