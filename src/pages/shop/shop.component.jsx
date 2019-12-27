import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.container.js';
import CollectionContainer from "../collection/collection.container.jsx";
import { cpus } from 'os';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
  </div>
);

export default ShopPage;
