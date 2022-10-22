import React from 'react'
import { Box, Flex, HStack, VStack, Heading, Text, Button, Container, Image, Grid } from '@chakra-ui/react'
import {HotelElement} from './ItemElement'

const PopularHotels = () => {
  return (
    <Flex>
      <Container h="100%" maxW="container.lg">

        <Grid mt="50px" w="100%" templateColumns={["repeat(1,1fr)", "repeat(1,1fr)","repeat(2,1fr)", "repeat(3,1fr)"]} gap="10">
       <PopularItems/>


        </Grid>
      </Container>
    </Flex>
  )
}

export default PopularHotels

const PopularItems = ()=>{
  let items= [{place:'Illorin',name:'Mucenty Hotel',minPrice:'40,000',image:'Img/property-1.jpg'},
  {place:'Illorin',name:'Shining Light Hotel',minPrice:'40,000',image:'Img/property-2.jpg'},
  {place:'Illorin',name:'Godspeed Hotel',minPrice:'40,000',image:'Img/property-4.jpg'},]
  return (
    <>
{
  items.map((val,index)=>(
  <HotelElement key={index} {...val}/>
  ))
}    
    </>
  )
}

