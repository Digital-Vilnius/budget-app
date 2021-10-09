import React, { FC } from 'react';
import { SpacesListItem as SpacesListItemType } from '@features/spaces/types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { boxShadows, colors, fonts, sizes } from '@styles/constants';

interface Props {
  item: SpacesListItemType;
  onPress: (item: SpacesListItemType) => void;
}

const SpacesListItem: FC<Props> = (props) => {
  const { item, onPress } = props;

  const handleOnPress = () => {
    onPress(item);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
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
  },
  subtitle: {
    color: colors.text.tertiary,
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    lineHeight: 16,
  },
});

export default SpacesListItem;
