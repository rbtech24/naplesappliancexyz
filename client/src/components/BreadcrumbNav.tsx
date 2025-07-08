import React from 'react';
import { Home } from 'lucide-react';
import { ScrollLink } from '@/utils/scrollToTop';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function BreadcrumbNav({ items, className = '' }: BreadcrumbNavProps) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {/* Home */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <ScrollLink href="/" className="flex items-center gap-1.5">
              <Home className="h-4 w-4" />
              Home
            </ScrollLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {/* Separator */}
        <BreadcrumbSeparator />
        
        {/* Dynamic items */}
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.href && index < items.length - 1 ? (
                <BreadcrumbLink asChild>
                  <ScrollLink href={item.href}>
                    {item.label}
                  </ScrollLink>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            
            {/* Add separator if not last item */}
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}