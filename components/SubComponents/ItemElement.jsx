import React from 'react'
import { Box, Flex, HStack, VStack, Heading, Text, Button, Container, Image, Grid } from '@chakra-ui/react'


export const HotelElement = ({image,place,name,minPrice})=>{
    return (
      <Flex  className="hovercontainer" >
      <Box h={["280","280","320"]} className="imagezoom"   w="100%" objectFit="cover"  
     
     backgroundColor='black' /* fallback color */
     backgroundImage={`url("${image}")`}
     backgroundPosition='center'
     backgroundSize='cover'
     src={image}></Box>
        <Box className='backgroundOverlay'   bg="black" position="absolute" top="0" w="100%" h="100%"  opacity={0.6}></Box>
        <Flex   px="5" py="10" position="absolute" top="0" w="100%" h="100%" justifyContent={'flex-end'} flexDir="column">
        <Text color="white" fontSize={["sm","sm","md"]}>{place} </Text>
            <Text   color="white" fontSize={["xl","xl","xl"]}>{name}</Text>
            <Box>
            <Button mt="3" color="white" fontSize={["sm","sm","md"]} variant="outline" _hover={{}} rounded="full" border="2px" borderColor={'green'}>BOOK | N{minPrice}</Button>
            </Box>
           
        </Flex>
      </Flex>
  
    )
}

export const AgentItem = ({key,image,name,number,email,about}) => {
  return (
    <Flex key={key} className="hovercontainer" >
    <Box h={["280","280","320"]} w="100%" objectFit="cover"

      backgroundColor='black' /* fallback color */
      backgroundImage={`url("${image}")`}
      backgroundPosition='center'
      backgroundSize='cover'
      src={image}></Box>
    <Box className='greenOverlay' bg="green.400" position="absolute" top="0" w="100%" h="100%" opacity={0.1}></Box>

    <Flex className='overlay'  justifyContent={'space-between'} px="10" py="10" position="absolute" top="0" w="100%" h="100%" flexDir="column">
      <Flex fontSize={["11","sm","sm"]}  h="70%" justifyContent={'space-evenly'} flexDirection="column" >

        <Text color="black" fontWeight={'bold'} cursor="pointer" fontSize={["lg","lg","xl"]}>{name}</Text>
        <Text  color="blackAlpha.800" >{about}</Text>

        <Text > <Box as="span" fontWeight="bold">Phone:</Box>  {number}</Text>
        <Text ><Box as="span" fontWeight="bold">Email:</Box> {email}</Text>
      </Flex>
      <VStack>
        <HStack spacing="5">
          <Box>
            <i className="pi pi-instagram"></i>
          </Box>
          <Box>
            <i className="pi pi-facebook"></i>
          </Box>
          <Box>
            <i className="pi pi-twitter"></i>
          </Box>
        </HStack>
      </VStack>
    </Flex>
  </Flex>
  )
}


export const NewsItem = ({image,category,date,name})=>{
  return (
    <Flex className="hovercontainer" >
  <Box h={["250","250","320"]} className="imagezoom"   w="100%" objectFit="cover"  
 
 backgroundColor='black' /* fallback color */
 backgroundImage={`url("${image}")`}
 backgroundPosition='center'
 backgroundSize='cover'
 src={image}></Box>
    <Box className='backgroundOverlay'   bg="black" position="absolute" top="0" w="100%" h="100%"  opacity={0.6}></Box>
    <Flex   px="5" py="10" position="absolute" top="0" w="100%" h="100%" justifyContent={'flex-end'} flexDir="column">
      <Flex>
      <Box px="3" py="1" rounded="full" bg="green.400" as="span" color="black" fontSize={["11","12","12"]}>
      {category}
      </Box>
      </Flex>
     
   
        <Text noOfLines={1} cursor="pointer" color="white" fontSize={["md","lg","xl"]}>{name}</Text>
        <Box fontSize={["11","sm","sm"]} color="white">
        {date}
        </Box>
       
    </Flex>
  </Flex>
  )
}




