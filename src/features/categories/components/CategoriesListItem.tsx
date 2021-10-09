import React, { FC } from 'react';
import { CategoriesListItem as CategoriesListItemType } from '@features/categories/types';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { boxShadows, colors, fonts, sizes } from '@styles/constants';

interface Props {
  item: CategoriesListItemType;
  onPress: (item: CategoriesListItemType) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const CategoriesListItem: FC<Props> = (props) => {
  const { item, onPress, containerStyle } = props;

  const handleOnPress = () => {
    onPress(item);
  };

  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={handleOnPress}>
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.created}</Text>
      </View>
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
});

export default CategoriesListItem;
