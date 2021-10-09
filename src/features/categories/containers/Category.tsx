import React, { FC } from 'react';
import { Text } from 'react-native';
import { useCachedCategory } from '@features/categories/hooks';

const Category: FC = () => {
  const { category } = useCachedCategory();

  return <Text>{category.name}</Text>;
};

export default Category;
