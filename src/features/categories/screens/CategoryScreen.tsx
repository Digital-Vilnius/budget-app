import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { CategoryRoute } from '@navigation/types';
import { Category, CategoryLoader } from '@features/categories/containers';
import { ScreenContainer } from '@common/components';

const CategoryScreen: FC<StackScreenProps<MainStackParamList, CategoryRoute>> = (props) => {
  const { route } = props;
  const { params } = route;
  const { id } = params;

  return (
    <ScreenContainer>
      <CategoryLoader id={id}>
        <Category />
      </CategoryLoader>
    </ScreenContainer>
  );
};

export default CategoryScreen;
