import React, { FC } from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { boxShadows, colors, fonts, sizes } from '@styles/constants';

interface Props {
  label: string;
  icon: number;
  backgroundColor: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const QuickAction: FC<Props> = (props) => {
  const { label, icon, backgroundColor, onPress, containerStyle } = props;

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.iconContainer, { backgroundColor }]}>
          <Image style={styles.icon} source={icon} />
        </View>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    ...boxShadows.primary,
    width: 70,
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.m,
    marginBottom: sizes.m,
  },
  icon: {
    resizeMode: 'contain',
    maxHeight: 24,
    maxWidth: 24,
  },
  label: {
    textAlign: 'center',
    color: colors.text.secondary,
    fontFamily: fonts.primary.regular,
    fontSize: 13,
    lineHeight: 18,
  },
});

export default QuickAction;
