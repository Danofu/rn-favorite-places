import { Pressable, StyleSheet, Text } from 'react-native';

import Colors from 'constants/colors';

function Button({ children, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary800,
    borderRadius: 4,
    elevation: 2,
    margin: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: 'black',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: Colors.primary50,
    fontSize: 16,
    textAlign: 'center',
  },
});
