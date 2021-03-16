import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Mako MEMO APP</Text>
          <Text>LogOut</Text>
        </View>
      </View>
      <View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2020/03/05 05:25</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2020/03/05 05:25</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2020/03/05 05:25</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
