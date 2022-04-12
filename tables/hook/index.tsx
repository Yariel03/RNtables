import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { IUser } from '../interface/IUser'

export const useTable = () => {
    const title =
        [{
            name: 'ID',
        },
        {
            name: 'NOMBRE',
        },
        {
            name: 'APELLIDO',
        },
        {
            name: 'EDAD',
        },
        {
            name: 'CORREO',
        },
        {
            name: 'ACTIVO',
        }
        ]



    const data: IUser[] = [
        {
            id: 1,
            name: 'Juan',
            lastName: 'Perez de la estratosfera rocio mario',
            age: 25,
            email: 'brya@nomail.com',
            active: true
        },
        {
            id: 2,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 3,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'juan@nomail.com',
            active: true
        },
        {
            id: 4,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 1,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'brya@nomail.com',
            active: true
        },
        {
            id: 2,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 3,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'juan@nomail.com',
            active: true
        },
        {
            id: 4,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 1,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'brya@nomail.com',
            active: true
        },
        {
            id: 2,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 3,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'juan@nomail.com',
            active: true
        },
        {
            id: 4,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 1,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'brya@nomail.com',
            active: true
        },
        {
            id: 2,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 3,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'juan@nomail.com',
            active: true
        },
        {
            id: 4,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 1,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'brya@nomail.com',
            active: true
        },
        {
            id: 2,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 3,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'juan@nomail.com',
            active: true
        },
        {
            id: 4,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 1,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'brya@nomail.com',
            active: true
        },
        {
            id: 2,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 3,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'juan@nomail.com',
            active: true
        },
        {
            id: 4,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 1,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'brya@nomail.com',
            active: true
        },
        {
            id: 2,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 3,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'juan@nomail.com',
            active: true
        },
        {
            id: 4,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 1,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'brya@nomail.com',
            active: true
        },
        {
            id: 2,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 3,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'juan@nomail.com',
            active: true
        },
        {
            id: 4,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 1,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'brya@nomail.com',
            active: true
        },
        {
            id: 2,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 3,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'juan@nomail.com',
            active: true
        },
        {
            id: 4,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 1,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'brya@nomail.com',
            active: true
        },
        {
            id: 2,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 3,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'juan@nomail.com',
            active: true
        },
        {
            id: 4,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 1,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'brya@nomail.com',
            active: true
        },
        {
            id: 2,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 3,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'juan@nomail.com',
            active: true
        },
        {
            id: 4,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 1,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'brya@nomail.com',
            active: true
        },
        {
            id: 2,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },
        {
            id: 3,
            name: 'Juan',
            lastName: 'Perez',
            age: 25,
            email: 'juan@nomail.com',
            active: true
        },
        {
            id: 4,
            name: 'Pedro',
            lastName: 'Perez',
            age: 25,
            email: 'pedro@nomail.com',
            active: true
        },

    ]




    return (
        { data, title }
    )
}