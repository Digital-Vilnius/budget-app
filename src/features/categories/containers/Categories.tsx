import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { useCategories } from '@features/categories/hooks';
import { CategoriesListItem as CategoriesListItemType } from '@features/categories/types';
import { CategoriesListItem } from '@features/categories/components';
import { useNavigation } from '@react-navigation/native';
import { categoryRoute } from '@navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { ListSeparator, PageTitle } from '@common/components';
import { sizes, spacings } from '@styles/constants';

const Categories: FC = () => {
  const { isLoading, categories, loadMore, refresh, isRefreshing } = useCategories();
  const { navigate } = useNavigation<StackNavigationProp<MainStackParamList>>();

  const handleOnPress = (item: CategoriesListItemType) => {
    navigate(categoryRoute, { id: item.id, name: item.name });
  };

  const renderItem = ({ item }: ListRenderItemInfo<CategoriesListItemType>) => (
    <CategoriesListItem item={item} onPress={handleOnPress} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PageTitle text="Categories" />
      </View>
      <FlatList
        ItemSeparatorComponent={ListSeparator}
        contentContainerStyle={styles.content}
        refreshing={isRefreshing || isLoading}
        onRefresh={refresh}
        data={categories}
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

export default Categories;
