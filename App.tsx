import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, SafeAreaViewBase, StyleSheet, Text, View } from 'react-native';
import { useTable } from './tables/hook';
import { Table } from './tables/Index';

export default function App() {
  const { data, propertyJson } = useTable();

  const renderButton = (json: any) => {
    return (
      <Button title='Press' onPress={() => (alert("Hola" + JSON.stringify(json)))} />
    )
  }

  return (

    <SafeAreaView style={styles.container}>
      {/* {renderButton()} */}
      <Table datos={data} modelo={propertyJson} acciones={renderButton}></Table>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
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
