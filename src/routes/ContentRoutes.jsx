import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Wishlist from 'pages/Wishlist';
import GameDetails from 'pages/GameDetails';
import Error from '../components/Error';

const ContentRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/games/:id' element={<GameDetails />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
};

export default ContentRoutes;
