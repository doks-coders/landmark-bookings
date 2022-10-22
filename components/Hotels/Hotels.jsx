import React from 'react'
import { Box, Flex, HStack, VStack, Heading, Text, Button, Container, Image, Grid } from '@chakra-ui/react'
import LinkBanner from '../SubComponents/LinkBanner'
import {HotelElement} from '../SubComponents/ItemElement'
import {useState} from 'react'
import Link from 'next/link'

import Pagination from '../PrimeComponents/Pagination'

const Hotels = () => {


    

    let [indexOfPage,setIndexOfPage] = useState(1)

    let pageEl = 0
  
    const [basicFirst, setBasicFirst] = useState(4);

let [index,setIndex] = useState(1)
      
    
    const showIndex = (el)=>{
 let page = el.page
 console.log(page)
}

  return (
    <>
    <Flex pt="60px">
 
    <Container maxW="container.lg">
          <LinkBanner
            pagemode="linkpage"
            linktitle="Hotels"
            hometitle={"Check Out Our Beautiful Hotels"}
          />
  <Grid mt="50px" w="100%" templateColumns={["repeat(1,1fr)", "repeat(1,1fr)","repeat(2,1fr)", "repeat(3,1fr)"]} gap="10">
       <PopularItems/>


        </Grid>
       
        <Box my="5">
        <Pagination setBasicFirst={setBasicFirst} basicFirst={basicFirst} indexEntered={pageEl} total={6} onIndexChange={showIndex}/>
        </Box>
        
       
       

        </Container>
    </Flex>
   
    </>
  )
}

export default Hotels


const PopularItems = ()=>{
  let items= [{place:'Illorin',name:'Mucenty Hotel',minPrice:'40,000',image:'Img/property-1.jpg'},
  {place:'Illorin',name:'Shining Light Hotel',minPrice:'40,000',image:'Img/property-2.jpg'},
  {place:'Illorin',name:'Godspeed Hotel',minPrice:'40,000',image:'Img/property-4.jpg'},]
  return (
<>
{
  items.map((val,index)=>(
    <HotelElement {...val}/>

  ))
}    
</>
  )
}


  