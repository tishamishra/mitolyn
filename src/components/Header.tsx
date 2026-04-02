'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on escape key and prevent body scroll when open
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <section className="menu menu2 cid-tB0YZQqaCG" id="menu2-0">
      <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg relative" style={{ backgroundColor: '#667eea', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between w-full">
            <div className="navbar-brand flex-shrink-0">
              <span className="navbar-logo">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image 
                    src="https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883" 
                    alt="Mitolyn official website" 
                    width={485} 
                    height={94}
                    className="h-8 sm:h-10 md:h-12 w-auto max-w-[200px] sm:max-w-[250px] md:max-w-none"
                    priority
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

