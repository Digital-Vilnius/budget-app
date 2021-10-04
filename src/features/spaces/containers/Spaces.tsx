import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import { useSpaces } from '@features/spaces/hooks';
import { SpacesListItem } from '@api/clients/spaces/types';

const Spaces: FC = () => {
  const { isLoading, spaces, loadMore, refresh, isRefreshing } = useSpaces();

  const renderItem = ({ item }: ListRenderItemInfo<SpacesListItem>) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <FlatList
      refreshing={isRefreshing || isLoading}
      onRefresh={refresh}
      data={spaces}
      onEndReached={loadMore}
      onEndReachedThreshold={0}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default Spaces;
