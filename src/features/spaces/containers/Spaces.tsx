import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { useSpaces } from '@features/spaces/hooks';
import { SpacesListItem as SpacesListItemType } from '@features/spaces/types';
import { SpacesListItem } from '@features/spaces/components';
import { useNavigation } from '@react-navigation/native';
import { spaceRoute } from '@navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { sizes, spacings } from '@styles/constants';
import { ListSeparator, PageTitle } from '@common/components';

const Spaces: FC = () => {
  const { isLoading, spaces, loadMore, refresh, isRefreshing } = useSpaces();
  const { navigate } = useNavigation<StackNavigationProp<MainStackParamList>>();

  const handleOnPress = (item: SpacesListItemType) => {
    navigate(spaceRoute, { id: item.id, title: item.title });
  };

  const renderItem = ({ item }: ListRenderItemInfo<SpacesListItemType>) => (
    <SpacesListItem item={item} onPress={handleOnPress} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PageTitle text="Select space" />
      </View>
      <FlatList
        ItemSeparatorComponent={ListSeparator}
        contentContainerStyle={styles.content}
        refreshing={isRefreshing || isLoading}
        onRefresh={refresh}
        data={spaces}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingVertical: sizes.xs,
    paddingHorizontal: spacings.padding,
  },
  header: {
    padding: spacings.padding,
    paddingTop: sizes.xl,
  },
});

export default Spaces;
