import React, { FC } from 'react';
import { useSpaceUser } from '@features/spaceUsers/hooks';
import { ActivityIndicator, RefreshControl, ScrollView } from 'react-native';

interface Props {
  id: string;
  children: React.ReactNode;
}

const SpaceUserLoader: FC<Props> = (props) => {
  const { id, children } = props;
  const { isLoading, spaceUser, refresh, isRefreshing } = useSpaceUser(id);

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={isRefreshing || isLoading} onRefresh={refresh} />}
    >
      {!spaceUser ? <ActivityIndicator /> : children}
    </ScrollView>
  );
};

export default SpaceUserLoader;
