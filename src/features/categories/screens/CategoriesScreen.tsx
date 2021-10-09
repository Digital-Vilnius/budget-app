import React, { FC } from 'react';
import { ScreenContainer } from '@common/components';
import { Categories } from '@features/categories/containers';

const CategoriesScreen: FC = () => {
  return (
    <ScreenContainer>
      <Categories />
    </ScreenContainer>
  );
};

export default CategoriesScreen;
