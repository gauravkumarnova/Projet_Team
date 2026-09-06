'use client';

import { forwardRef } from 'react';
import { TextLink } from '../interactive/TextLink';

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

/**
 * ServicesDropdown Component
 * 
 * Restrained dropdown for services navigation.
 * Based on DESIGN.md: "Do not create an enormous marketing mega-menu."
 */
export const ServicesDropdown = forwardRef<HTMLDivElement, ServicesDropdownProps>(
  function ServicesDropdown({ isOpen, onClose, className = '' }, ref) {
    // Approved service order from DESIGN.md and SITEMAP.md
    const services = [
      {
        label: 'Cloud & DevOps Engineering',
        href: '/services/cloud-devops/',
        description: 'AWS infrastructure, CI/CD, automation & monitoring',
      },
      {
        label: 'Managed Cloud & Infrastructure',
        href: '/services/managed-cloud-infrastructure/',
        description: 'Ongoing infrastructure management, monitoring & support',
      },
      {
        label: 'Cloud Migration & Modernisation',
        href: '/services/cloud-migration-modernisation/',
        description: 'Assessment, migration, containerization & modernization',
      },
      {
        label: 'Fractional / Dedicated Technology Team',
        href: '/services/fractional-technology-team/',
        description: 'Remote technical capability for startups, SaaS & agencies',
      },
      {
        label: 'Software Engineering',
        href: '/services/software-engineering/',
        description: 'Business applications, portals, APIs & Android development',
      },
      {
        label: 'Backup & Disaster Recovery',
        href: '/services/backup-disaster-recovery/',
        description: 'Backup architecture, restore procedures & DR planning',
      },
      {
        label: 'Streaming Infrastructure',
        href: '/services/streaming-infrastructure/',
        description: 'Live/streaming architecture, encoding & reliability',
      },
    ];

    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={`
          ${className}
          absolute
          top-full
          left-0
          mt-2
          w-[min(42rem,calc(100vw-2rem))]
          max-w-[calc(100vw-2rem)]
          bg-bg-surface
          border
          border-border-default
          rounded-lg
          shadow-lg
          z-dropdown
          overflow-hidden
        `}
        aria-label="Services menu"
        onMouseLeave={onClose}
      >
        <div className="p-4">
          <div className="mb-3">
            <h3 className="text-base font-semibold text-text-primary">
              Services
            </h3>
            <p className="mt-1 text-xs leading-5 text-text-secondary">
              Technical engineering and managed services for growing businesses
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {services.map((service) => (
              <div
                key={service.href}
                className="group"
              >
                <TextLink
                  href={service.href}
                  variant="brand"
                  underline="none"
                  className="block rounded-md p-2.5 hover:bg-state-hover transition-colors duration-150 group-hover:bg-state-hover"
                  onClick={onClose}
                >
                  <div className="flex items-start">
                    <div className="flex-1">
                      <div className="text-sm font-medium leading-5 text-text-primary group-hover:text-brand-primary transition-colors duration-150">
                        {service.label}
                      </div>
                      <div className="mt-0.5 text-xs leading-5 text-text-secondary">
                        {service.description}
                      </div>
                    </div>
                    <svg
                      className="ml-2 mt-0.5 h-4 w-4 flex-shrink-0 text-text-muted group-hover:text-brand-primary transition-colors duration-150"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </TextLink>
              </div>
            ))}
          </div>

          <div className="mt-3 border-t border-border-subtle pt-3">
            <TextLink
              href="/services/"
              variant="brand"
              underline="hover"
              className="font-medium"
              onClick={onClose}
            >
              View all services overview →
            </TextLink>
          </div>
        </div>
      </div>
    );
  }
);
