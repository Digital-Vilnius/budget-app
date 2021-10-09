import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { useSpaceUsers } from '@features/spaceUsers/hooks';
import { SpaceUsersListItem as SpaceUsersListItemType } from '@features/spaceUsers/types';
import { SpaceUsersListItem } from '@features/spaceUsers/components';
import { useNavigation } from '@react-navigation/native';
import { spaceUserRoute } from '@navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { sizes, spacings } from '@styles/constants';
import { ListSeparator, PageTitle } from '@common/components';

const SpaceUsers: FC = () => {
  const { isLoading, spaceUsers, loadMore, refresh, isRefreshing } = useSpaceUsers();
  const { navigate } = useNavigation<StackNavigationProp<MainStackParamList>>();

  const handleOnPress = (item: SpaceUsersListItemType) => {
    navigate(spaceUserRoute, { id: item.id, email: item.email });
  };

  const renderItem = ({ item }: ListRenderItemInfo<SpaceUsersListItemType>) => (
    <SpaceUsersListItem item={item} onPress={handleOnPress} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PageTitle text="Users" />
      </View>
      <FlatList
        ItemSeparatorComponent={ListSeparator}
        contentContainerStyle={styles.content}
        refreshing={isRefreshing || isLoading}
        onRefresh={refresh}
        data={spaceUsers}
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

export default SpaceUsers;
