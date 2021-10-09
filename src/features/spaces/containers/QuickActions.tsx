import React, { FC } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { bottomSpacings, colors } from '@styles/constants';
import { SectionTitle } from '@common/components';
import { QuickAction } from '@features/spaces/components';
import { categoriesRoute, operationsRoute, spaceUsersRoute } from '@navigation/types';

const walletIcon = require('../../../../assets/icons/wallet.png');
const transactionIcon = require('../../../../assets/icons/transaction.png');
const documentIcon = require('../../../../assets/icons/document.png');
const downloadIcon = require('../../../../assets/icons/download.png');

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
}

const QuickActions: FC<Props> = (props) => {
  const { containerStyle } = props;
  const { navigate } = useNavigation<StackNavigationProp<MainStackParamList>>();

  return (
    <View style={containerStyle}>
      <SectionTitle containerStyle={bottomSpacings.m} text="Quick actions" />
      <View style={styles.quickActions}>
        <QuickAction
          label="Operations"
          icon={walletIcon}
          backgroundColor={colors.quickActions.green}
          onPress={() => navigate(operationsRoute)}
        />
        <QuickAction
          label="Add operation"
          icon={transactionIcon}
          backgroundColor={colors.quickActions.orange}
          onPress={() => navigate(operationsRoute)}
        />
        <QuickAction
          label="Categories"
          icon={documentIcon}
          backgroundColor={colors.quickActions.purple}
          onPress={() => navigate(categoriesRoute)}
        />
        <QuickAction
          label="Users"
          icon={downloadIcon}
          backgroundColor={colors.quickActions.blue}
          onPress={() => navigate(spaceUsersRoute)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quickActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default QuickActions;
