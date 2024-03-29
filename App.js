import { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';

import { colors } from './src/utils/colors';

import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          clearSubject={() => setCurrentSubject(null)}
          onTimerEnd={() =>
            setHistory((prevHistory) => [...prevHistory, currentSubject])
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
