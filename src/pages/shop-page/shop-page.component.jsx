import React from 'react';
import SHOP_DATA from './shop-data';

import FashionCollectionPreview from '../../components/fashion-collection-preview/fashion-collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fashion_collections: SHOP_DATA,
    };
  }

  render() {
    const { fashion_collections } = this.state;
    return (
      <div>
        <h1>Shop Page</h1>
        {fashion_collections.map(({ id, ...otherFashionCollectionProps }) => (
          <FashionCollectionPreview
            key={id}
            {...otherFashionCollectionProps}
          ></FashionCollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
