
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Dashboard({ navigation }) {
  return (
    <View style={{padding:20}}>
      <Text>Welcome to TimeSprint</Text>
      <Button title="View Challenges" onPress={() => navigation.navigate('Challenges')} />
      <Button title="Leaderboard" onPress={() => navigation.navigate('Leaderboard')} />
    </View>
  );
}
