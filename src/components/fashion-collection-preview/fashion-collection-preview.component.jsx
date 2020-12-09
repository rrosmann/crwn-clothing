import React from 'react';
import './fashion-collection-preview.styles.scss';

import FashionCollectionItem from '../fashion-collection-item/fashion-collection-item.component';

const FashionCollectionPreview = ({ title, items }) => (
  <div className='fashion-collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='items-preview'>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <FashionCollectionItem
            key={item.id}
            item={item}
          ></FashionCollectionItem>
        ))}
    </div>
  </div>
);

export default FashionCollectionPreview;
