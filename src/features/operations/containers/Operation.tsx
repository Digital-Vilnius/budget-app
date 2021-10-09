import React, { FC } from 'react';
import { Text } from 'react-native';
import { useCachedOperation } from '@features/operations/hooks';

const Operation: FC = () => {
  const { operation } = useCachedOperation();

  return <Text>{operation.date}</Text>;
};

export default Operation;
