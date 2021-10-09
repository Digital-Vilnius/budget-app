import React, { FC } from 'react';
import { SpaceUsersListItem as SpaceUsersListItemType } from '@features/spaceUsers/types';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { boxShadows, colors, fonts, sizes } from '@styles/constants';

interface Props {
  item: SpaceUsersListItemType;
  onPress: (item: SpaceUsersListItemType) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const SpaceUsersListItem: FC<Props> = (props) => {
  const { item, onPress, containerStyle } = props;

  const handleOnPress = () => {
    onPress(item);
  };

  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={handleOnPress}>
      <View>
        <Text style={styles.title}>{`${item.firstName} ${item.lastName}`}</Text>
        <Text style={styles.subtitle}>{item.email}</Text>
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

export default SpaceUsersListItem;
