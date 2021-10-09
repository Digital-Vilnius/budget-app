import React, { FC } from 'react';
import { Text } from 'react-native';
import { useCachedSpaceUser } from '@features/spaceUsers/hooks';

const SpaceUser: FC = () => {
  const { spaceUser } = useCachedSpaceUser();

  return <Text>{spaceUser.email}</Text>;
};

export default SpaceUser;
