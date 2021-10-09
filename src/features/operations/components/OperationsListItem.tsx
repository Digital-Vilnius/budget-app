import React, { FC } from 'react';
import { OperationsListItem as OperationsListItemType } from '@features/operations/types';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { boxShadows, colors, fonts, sizes } from '@styles/constants';

interface Props {
  item: OperationsListItemType;
  onPress: (item: OperationsListItemType) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const OperationsListItem: FC<Props> = (props) => {
  const { item, onPress, containerStyle } = props;

  const handleOnPress = () => {
    onPress(item);
  };

  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={handleOnPress}>
      <View>
        <Text style={styles.title}>{item.category.name}</Text>
        <Text style={styles.subtitle}>{item.date}</Text>
      </View>
      <Text style={[styles.amount, item.amount < 0 && { color: colors.danger }]}>
        {item.amount.toFixed(2)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...boxShadows.primary,
    backgroundColor: colors.white,
    padding: sizes.m,
    borderRadius: sizes.s,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.text.secondary,
    fontFamily: fonts.primary.medium,
    fontSize: 14,
    lineHeight: 18,
    marginBottom: sizes.xxs,
    textTransform: 'capitalize',
  },
  subtitle: {
    color: colors.text.tertiary,
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    lineHeight: 16,
  },
  amount: {
    fontFamily: fonts.primary.medium,
    fontSize: 14,
    lineHeight: 18,
    color: colors.primary,
  },
});

export default OperationsListItem;
