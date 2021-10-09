import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { useOperations } from '@features/operations/hooks';
import { OperationsListItem as OperationsListItemType } from '@features/operations/types';
import { OperationsListItem } from '@features/operations/components';
import { useNavigation } from '@react-navigation/native';
import { operationRoute } from '@navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { ListSeparator, PageTitle } from '@common/components';
import { sizes, spacings } from '@styles/constants';

const Operations: FC = () => {
  const { isLoading, operations, loadMore, refresh, isRefreshing } = useOperations();
  const { navigate } = useNavigation<StackNavigationProp<MainStackParamList>>();

  const handleOnPress = (item: OperationsListItemType) => {
    navigate(operationRoute, { id: item.id });
  };

  const renderItem = ({ item }: ListRenderItemInfo<OperationsListItemType>) => (
    <OperationsListItem item={item} onPress={handleOnPress} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PageTitle text="Operations" />
      </View>
      <FlatList
        ItemSeparatorComponent={ListSeparator}
        contentContainerStyle={styles.content}
        refreshing={isRefreshing || isLoading}
        onRefresh={refresh}
        data={operations}
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

export default Operations;
