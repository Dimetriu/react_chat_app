import React from 'react';
import ContentLoader, { Facebook } from 'react-content-loader';

export const DashboardLoader = () => <Facebook />;

export const AppLoader = ({ variant }) => {
  return (
    <div className={variant}>
      <ContentLoader
        height={200}
        width={500}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
      >
        <rect x="0" y="0" rx="4" ry="4" width="500" height="20" />
        <rect x="100" y="25" rx="4" ry="4" width="300" height="15" />
        <rect x="0" y="55" rx="4" ry="4" width="500" height="75" />
      </ContentLoader>
    </div>
  );
}
