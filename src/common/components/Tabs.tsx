import React, { FC } from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { colors, fonts, sizes } from '@styles/constants';

export interface TabsProps {
  tabs: Tab[];
  activeKey?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export interface Tab {
  label: string;
  key: string;
}

const Tabs: FC<TabsProps> = (props) => {
  const { tabs, containerStyle, activeKey } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tab, tab.key === activeKey && styles.activeTab]}
          >
            <Text style={[styles.label, tab.key === activeKey && styles.activeLabel]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.2,
    borderBottomColor: colors.grey.light,
  },
  tab: {
    marginRight: sizes.xs,
    paddingBottom: sizes.xs,
    justifyContent: 'center',
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  label: {
    textAlign: 'center',
    paddingHorizontal: sizes.xxs,
    color: colors.text.tertiary,
    fontFamily: fonts.primary.regular,
    fontSize: 14,
    lineHeight: 18,
  },
  activeLabel: {
    color: colors.primary,
  },
});

export default Tabs;
