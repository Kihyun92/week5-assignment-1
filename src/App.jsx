import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  loadInitialData,
} from './actions';

import RegionsContainer from './RegionsContainer';

function Categories() {
  return null;
}

function RestaurantContainer() {
  return null;
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <div>
      <RegionsContainer />
      <Categories />
      <RestaurantContainer />
    </div>
  );
}
