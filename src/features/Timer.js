import { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';

import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from './Timing';

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const PATTERN = [
    0,
    1 * 1000,
    1 * 1000,
    1 * 1000,
    1 * 1000,
    1 * 1000,
  ];

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setHasStarted(false);
    setProgress(1);
    reset();
    onTimerEnd();
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          onProgress={setProgress}
          isPaused={!hasStarted}
          onEnd={onEnd}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>

      <View style={styles.progressBarWrapper}>
        <ProgressBar 
          progress={progress}
          color={colors.blue}
          style={styles.progressBar}
        />
      </View>
      
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.buttonWrapper}>
        {!hasStarted && (
          <RoundedButton title="▶︎" onPress={() => setHasStarted(true)} />
        )}
        {hasStarted && (
          <RoundedButton title="⫿⫿︎" onPress={() => setHasStarted(false)} />
        )}
      </View>

      <View style={styles.clearSubjectButtonWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  progressBarWrapper: {
    paddingTop: spacing.sm,
    paddingHorizontal: spacing.xxl
  },
  progressBar: {
    backgroundColor: colors.babyBlue,

    height: spacing.sm,

    borderRadius: 100,
  },

  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.md,
  },

  textWrapper: {
    padding: spacing.sm,
  },
  title: {
    color: colors.gray,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.gray,
    textAlign: 'center',
  },

  clearSubjectButtonWrapper: {
    alignItems: 'center',
    paddingBottom: spacing.md,
  }
});
