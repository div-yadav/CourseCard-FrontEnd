import React from 'react';
import AddToCart from '../components/AddToCart';

const AddToCartPage: React.FC = () => {
  // Hardcoded values
  const courseDuration = 56; // number of hours
  const version = "mobile"; // course version
  const resources = 8; // number of downloadable resources
  const articles = 6; // number of articles

  return (
    <>
      <AddToCart
        courseDuration={courseDuration}
        version={version}
        resources={resources}
        articles={articles}
      />
    </>
  );
};

export default AddToCartPage;
