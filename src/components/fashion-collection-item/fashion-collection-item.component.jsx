import React from 'react';
import './fashion-collection-item.styles.scss';

const FashionCollectionItem = ({ name, imageUrl, price }) => {
  return (
    <div className='fashion-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='fashion-item-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};

export default FashionCollectionItem;
