import React from 'react';
import ShopData from './shop.data';
class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: ShopData
    }
  }
  render() {
    return (
      <div>SHOP PAGE</div>
    )
  }
}
export default ShopPage;
