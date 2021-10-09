import React, { FC } from 'react';
import { View } from 'react-native';
import { sizes } from '@styles/constants';

export interface LinkProps {
  height?: number;
}

const ListSeparator: FC<LinkProps> = (props) => {
  const { height } = props;

  return <View style={{ height: height ?? sizes.xs }} />;
};

export default ListSeparator;
