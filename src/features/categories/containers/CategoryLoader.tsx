import React, { FC } from 'react';
import { useCategory } from '@features/categories/hooks';
import { ActivityIndicator, RefreshControl, ScrollView } from 'react-native';

interface Props {
  id: string;
  children: React.ReactNode;
}

const CategoryLoader: FC<Props> = (props) => {
  const { id, children } = props;
  const { isLoading, category, refresh, isRefreshing } = useCategory(id);

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={isRefreshing || isLoading} onRefresh={refresh} />}
    >
      {!category ? <ActivityIndicator /> : children}
    </ScrollView>
  );
};

export default CategoryLoader;
