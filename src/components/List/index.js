import React from 'react'
import { FlatList } from 'react-native'
import {
  ContainerItem,
  Image,
  Text,
} from "./styles";

const List = ({ list, title, trending }) => {

  return (
    <>
      <Text>{title}</Text>
      <FlatList
        data={list}
        keyExtractor={(item, index) => `${index}`}
        horizontal
        style={{ marginTop: 10 }}
        renderItem={({ item }) => {
          const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`

          return (
            <ContainerItem trending={trending}>
              <Image source={{ uri, }} trending={trending}  />
            </ContainerItem>
          )
        }}
      />
    </>
  )
}

export default List
