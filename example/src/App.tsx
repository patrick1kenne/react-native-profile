// example/src/App.js

import { StyleSheet, View } from 'react-native';
// Importation de notre composant depuis la librairie locale
import { UserCard } from 'react-native-profile';

export default function App() {
  const user = {
    name: 'John Doe',
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  };

  return (
    <View style={styles.container}>
      <UserCard name={user.name} imageUrl={user.imageUrl} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});