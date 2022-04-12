import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import { useTable } from './hook'
import { IUser } from './interface/IUser'
import { styles } from './style'
export const Table: any = () => {
  const { data, title } = useTable();

  const renderHeader = ({ item, index }: any) => {
    return (
      <View style={[styles.celdas, styles.celdaHeader]} key={index} >
        <Text style={styles.textHeader}>{item.name}</Text>
      </View>
    )
  }


  const renderBody = ({ item, index }: any) => {
    return (

      <View style={[styles.row, (index % 2 !== 0) ? styles.celdaPar : null]} key={index}>

        <View style={styles.celdas} >
          <Text style={styles.textBody}>{item.id}</Text>
        </View>

        <View style={styles.celdas}>
          <Text style={styles.textBody}>{item.name}</Text>
        </View>

        <View style={styles.celdas}>
          <Text style={styles.textBody}>{item.lastName}</Text>
        </View>

        <View style={styles.celdas}>
          <Text style={styles.textBody}>{item.age}</Text>
        </View>

        <View style={styles.celdas}>
          <Text style={styles.textBody}>{item.email}</Text>
        </View>

        <View style={styles.celdas}>
          <Text style={styles.textBody}>{item.active.toString()}</Text>
        </View>

      </View>
    )
  }



  const ScrollBodyVertical = () => {
    return (
      <View>
        <ScrollView>{listadoBody()}</ScrollView>
      </View>)
  }


  const ScroollHeader = () => {
    return (
      <View>
        <ScrollView horizontal>{listadoHeader()}</ScrollView>
      </View>)
  }

  const listadoHeader = () => {
    return (title.map((item, index) => {
      return (renderHeader({ item, index }))
    }))
  }

  const listadoBody = () => {
    return (data.map((item: IUser, index: number) => {
      return (renderBody({ item, index }))
    }))
  }




  return (
    <View>
      <ScrollView horizontal>
        <View style={styles.container}>
          <View style={[styles.row]}>
            {ScroollHeader()}
          </View>
          <View style={[styles.row]}>
            {ScrollBodyVertical()}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
