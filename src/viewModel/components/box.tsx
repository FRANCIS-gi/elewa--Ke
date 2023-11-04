import React, { ReactNode } from 'react';
import './App.css';

interface boxProps {
  children: ReactNode; // Props should include 'children' of type ReactNode, representing the content within the Box component.
  className?: string; // An optional 'className' prop for custom CSS classes.
}

export const Box = ({ children, className }: boxProps) => {
  return (
    <div className="box" >
      <div className={className}> {/* Render a div with the specified className, if provided */}
        {children} {/* Render the content passed as children within the div */}
      </div>
    </div>
  );
};
