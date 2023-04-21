import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';

import Colors from 'constants/colors';

function OutlinedButton({ children, icon, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
      <Ionicons color={Colors.primary500} name={icon} size={18} style={styles.icon} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    alignItem: 'center',
    borderColor: Colors.primary500,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  icon: {
    marginRight: 6,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: Colors.primary500,
  },
});
