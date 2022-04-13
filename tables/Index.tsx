import React, { useState } from 'react'
import { View, Text, FlatList, ScrollView, TextInput, ActivityIndicator } from 'react-native'
import { useTable } from './hook'
import { IUser } from './interface/IUser'
import { styles } from './style'


export const Table = ({ datos, modelo, acciones }: any) => {
  const [cpyuser, setcpyuser] = useState(datos)

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
    return (cpyuser?.map((item: IUser, index: number) => {
      return (renderBody({ item, index }))
    }))
  }


  const filter = (texto: string) => {
    startLoading()
    if (texto === "") {
      setcpyuser(datos)
    } else {
      setcpyuser(cpyuser?.filter((item: IUser) => {
        return (item.name.toLowerCase().includes(texto.toLowerCase()))
      }))
    }
  }
  const [loading, setLoading] = useState(false);
  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <View>
      <TextInput placeholder='buscar' style={{ marginTop: 30 }} onChangeText={filter}></TextInput>
      {(cpyuser?.length > 0) ? (

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
      ) :
        (loading) ?



          (


            <View style={styles.container}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <Text>No hay datos</Text>

          )
      }


    </View>
  )
}
