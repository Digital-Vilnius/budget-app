import React, { FC } from 'react';
import { useSpace } from '@features/spaces/hooks';
import { ActivityIndicator, RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { sizes, spacings } from '@styles/constants';

interface Props {
  id: string;
  children: React.ReactNode;
}

const SpaceLoader: FC<Props> = (props) => {
  const { id, children } = props;
  const { isLoading, space, refresh, isRefreshing } = useSpace(id);

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      refreshControl={<RefreshControl refreshing={isRefreshing || isLoading} onRefresh={refresh} />}
    >
      {!space ? <ActivityIndicator /> : children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingVertical: sizes.xs,
    paddingHorizontal: spacings.padding,
  },
});

export default SpaceLoader;
