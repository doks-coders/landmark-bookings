import React from 'react'

import { Box, Flex, HStack, VStack, Heading, Text, Button, Container, Image, Grid } from '@chakra-ui/react'
import {NewsItem} from './ItemElement'

const News = () => {
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

export default News


const PopularItems = ()=>{
  let items= [{category:'Holiday',name:'Holidays Are Coming Soon',date:'18, Sept 2022',image:'Img/property-1.jpg'},
  {category:'Travel',name:'Start Packing Now',date:'18, Sept 2022',image:'Img/property-2.jpg'},
  {category:'Travel',name:'Convocation Plans',date:'18, Sept 2022',image:'Img/property-4.jpg'},]
  return (
    <>
{
  items.map((val,index)=>(
    
    <NewsItem key={index} {...val}/>
  ))
}    
    </>
  )
}


