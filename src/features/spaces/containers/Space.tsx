import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useCachedSpace } from '@features/spaces/hooks';
import { PageTitle, Tabs } from '@common/components';
import { bottomSpacings, sizes } from '@styles/constants';
import RecentOperations from './RecentOperations';
import QuickActions from './QuickActions';

const tabs = [
  { key: 'today', label: 'Today' },
  { key: 'lastWeek', label: 'Last week' },
  { key: 'lastMonth', label: 'Last month' },
];

const Space: FC = () => {
  const { space } = useCachedSpace();

  return (
    <View style={styles.container}>
      <PageTitle containerStyle={styles.header} text={space.title} />
      <Tabs activeKey="today" containerStyle={bottomSpacings.xl} tabs={tabs} />
      <QuickActions containerStyle={bottomSpacings.xl} />
      <RecentOperations operations={space.recentOperations} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: sizes.xl,
    marginBottom: sizes.xl,
  },
});

export default Space;
