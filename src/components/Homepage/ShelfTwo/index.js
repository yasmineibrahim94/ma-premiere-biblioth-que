import React from 'react';
import BookMyRecipes from './BookMyRecipes';
import BookShoppingList from './BookShoppingList';
import MechantLoupBook from './MechantLoupBook';

const ShelfMyAccount = () => (
  <div className="ShelfMyAccount">
    <MechantLoupBook />
    <BookMyRecipes />
    <BookShoppingList />
  </div>
);

export default ShelfMyAccount;
