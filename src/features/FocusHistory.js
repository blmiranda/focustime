import { View, Text, FlatList, StyleSheet } from 'react-native';

import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  const hasNoHistory = !history || !history.lengt;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {hasNoHistory
          ? "We haven't focused on anything yet!"
          : "Things we've focused on"}
      </Text>
      <FlatList
        data={history}
        style={styles.flatList}
        renderItem={({ item }) => (
          <View style={styles.itemWrapper}>
            <Text style={styles.item}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: spacing.xxl,
  },
  text: {
    color: colors.black,

    fontSize: fontSizes.md,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  flatList: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.md,
  },

  itemWrapper: {
    margin: spacing.md,
    padding: spacing.md,
    borderLeftWidth: 1,
    borderColor: colors.black,
  },
  item: {
    color: colors.black,
  },
});
