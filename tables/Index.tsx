import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import { useTable } from './hook'
import { IUser } from './interface/IUser'
import { styles } from './style'


export const Table = ({ datos, modelo, acciones }: any) => {

  const renderHeader = ({ item, index }: any) => {
    return (
      <View style={[styles.celdas, styles.celdaHeader]} key={index}  >
        <Text style={styles.textHeader} key={Math.random()}>{item.name}</Text>
      </View>
    )
  }


  const renderBody = ({ item, index }: any) => {
    return (
      <View style={[styles.row, (index % 2 !== 0) ? styles.celdaPar : null]} key={index}>
        <View style={styles.celdas}  >
          {/* <Text style={styles.textBody}>{index + 1}</Text> */}
          {acciones(item)}
        </View>
        <View style={styles.celdas}  >
          <Text style={styles.textBody}>{index + 1}</Text>
          {/* {acciones(item)} */}
        </View>
        {modelo.map((pro: any, index: any) => (
          (pro.modelo) ? (
            <View style={styles.celdas} key={index} >
              <Text style={styles.textBody}>{(item[pro.property]).toString()}</Text>
            </View>
          ) : (null)
        ))}
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
    return (modelo.map((item: any, index: number) => {
      return (renderHeader({ item, index }))
    }))
  }

  const listadoBody = () => {
    return (datos.map((item: IUser, index: number) => {
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
