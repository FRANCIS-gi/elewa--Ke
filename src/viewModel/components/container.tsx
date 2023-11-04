import React, { ReactNode } from 'react';
import './App.css';

interface ContentProps {
  children: ReactNode; // Props should include 'children' of type ReactNode, representing the content within the Content component.
  className?: string; // An optional 'className' prop for custom CSS classes.
}

export const Content = ({ children, className }: ContentProps) => {
  return (
    <div className="content" >
      <div className={className}> {/* Render a div with the specified className, if provided */}
        {children} {/* Render the content passed as children within the div */}
      </div>
    </div>
  );
};
