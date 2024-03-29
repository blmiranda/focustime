import { View, Text, StyleSheet } from 'react-native';

import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.container}>
      <RoundedButton title="10m" size={80} onPress={() => onChangeTime(10)} />
      <RoundedButton title="15m" size={80} onPress={() => onChangeTime(15)} />
      <RoundedButton title="25m" size={80} onPress={() => onChangeTime(25)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
});
