import React, { FC } from 'react';
import { useOperation } from '@features/operations/hooks';
import { ActivityIndicator, RefreshControl, ScrollView } from 'react-native';

interface Props {
  id: string;
  children: React.ReactNode;
}

const OperationLoader: FC<Props> = (props) => {
  const { id, children } = props;
  const { isLoading, operation, refresh, isRefreshing } = useOperation(id);

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={isRefreshing || isLoading} onRefresh={refresh} />}
    >
      {!operation ? <ActivityIndicator /> : children}
    </ScrollView>
  );
};

export default OperationLoader;
