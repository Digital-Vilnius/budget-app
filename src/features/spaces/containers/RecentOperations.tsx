import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { bottomSpacings } from '@styles/constants';
import { OperationsListItem as OperationsListItemType } from '@features/operations/types';
import { SectionTitle } from '@common/components';
import { OperationsListItem } from '@features/operations/components';
import { operationRoute } from '@navigation/types';

interface Props {
  operations: OperationsListItemType[];
  containerStyle?: StyleProp<ViewStyle>;
}

const RecentOperations: FC<Props> = (props) => {
  const { operations, containerStyle } = props;
  const { navigate } = useNavigation<StackNavigationProp<MainStackParamList>>();

  const handlePress = (item: OperationsListItemType) => {
    navigate(operationRoute, { id: item.id });
  };

  return (
    <View style={containerStyle}>
      <SectionTitle containerStyle={bottomSpacings.m} text="Recent operations" />
      {operations.map((operation) => (
        <OperationsListItem
          containerStyle={bottomSpacings.xs}
          key={operation.id}
          item={operation}
          onPress={handlePress}
        />
      ))}
    </View>
  );
};

export default RecentOperations;
