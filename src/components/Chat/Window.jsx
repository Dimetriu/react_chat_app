import React from 'react';

export default function Window({ children, variant }) {
  return (
    <div className={variant}>
      {children}
    </div>
  );
}