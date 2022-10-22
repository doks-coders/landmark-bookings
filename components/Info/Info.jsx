import React from 'react'
import {useState,useEffect} from 'react'
import { Box, Flex, HStack, VStack, Heading, Text, Button, Container, Image, Grid } from '@chakra-ui/react'
import LinkBanner from '../SubComponents/LinkBanner'
const Info = () => {
  return (
    <>
      <Flex pt="60px" flexDir={'column'} h="100%">
        <Container maxW="container.lg">
          <LinkBanner
            pagemode="linkpage"
            linktitle="Mucenty Hotels"
            hometitle={"Mucenty Hotels"}
          />
        </Container>
        <Container mt="50px" maxW="container.lg">
        <Box minHeight={'500px'} >
      <Carousel/>
      </Box>

        </Container>

        <Container maxW="container.lg">
          
        <Flex mt="50px" flexDirection={['column','column','row']}  w="100%" >
            <Flex mt="20px" h="100%" flexBasis={'50%'}>
              <Flex w={["90%","90%","80%"]} flexDirection="column">

                <HStack my="2" style={{ fontSize: '35px' }}>
                  <Box>
                    <Box p="5" border="2px" borderColor="green.400">
                      N
                    </Box>
                  </Box>
                  <Box fontWeight="bold">
                    15,000
                  </Box>
                </HStack>

                <Heading mt="40px" fontSize="2xl">Quick Summary</Heading>
                <Box w="100px" my="2" h="1" bg="green.500"></Box>
                <Flex w="100%" flexDirection="column">
                  <QuickSummary />
                </Flex>

              </Flex>
            </Flex>

            <Flex mt="20px" h="100%" flexDirection="column" flexBasis={'50%'}>
              <Box >
                <Heading fontSize="2xl">Property Description</Heading>
                <Box w="100px" my="2" h="1" bg="green.500"></Box>

                <Text mt="20px">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar quam id dui posuere blandit.
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
                </Text>
              </Box>




              <Box my="30px">
                <Heading fontSize="2xl">Amenities</Heading>
                <Box w="100px" my="2" h="1" bg="green.500"></Box>

                <Grid mt="50px" w="100%" templateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(3,1fr)"]} gap="6">
                  <Text> - TV </Text>
                  <Text> - Internet </Text>
                  <Text> - Balcony </Text>
                  <Text> - Cable </Text>
                  <Text> - Refreshments </Text>
                </Grid>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  )
}

export default Info


let QuickSummary = () => {

  let summary = [
    { key: 'Location', value: 'Omu Aran' },
    { key: 'Property Type', value: 'Hotel' },
    { key: 'Beds', value: '2' },
    { key: 'Baths', value: '1' },
    { key: 'Living Room', value: '1' },
  ]

  return (
    <>
      {
        summary.map((val, index) => (
          <Flex py="2" justifyContent="space-between" >
            <Text fontWeight="bold">{val.key}:</Text>
            <Text>{val.value}</Text>
          </Flex>
        ))
      }

    </>
  )
}

let HotelRooms = ({hotelRooms,setImageSrc})=>{


return (
  <>
  {
hotelRooms.map((val,index)=>(
  <Flex m={["0.5","0.5","0"]} mr={["0","0","0.5"]} onClick={()=>setImageSrc(val.image)} key={index}  backgroundRepeat={'no-repeat'} flexDirection={'column'} justifyContent="flex-end"  backgroundPosition="center" backgroundImage={val.image} flexBasis={'50%'} >
  <Flex  borderBottom={ "3px solid #2eca6a"}  py="10px" bg="white">
   <Text zIndex="3" fontSize={['10px','10px','md']} fontWeight={'bold'} color="black" textAlign="center" w="100%">{val.name}</Text>
  </Flex>
 </Flex>
))
  }
  
  </>
)

}



let Carousel = ()=>{
  let [imageSrc,setImageSrc] =  useState(0)

  let [showDiv, setShowDiv] = useState(true)
  let hotelRooms = [
    {image:'Img/post-6.jpg',name:'Student Bedroom'},
    {image:'Img/post-4.jpg',name:'Family Bedroom'},
    {image:'Img/post-5.jpg',name:'Master Bedroom'},
  ]

  useEffect(() => {
    const refreshDisplay = async () => {
      setShowDiv(false)
      setTimeout(() => {
        setShowDiv(true)
      }, 50)
    }
    refreshDisplay()

  }, [imageSrc])


  
 useEffect(()=>{
  const uploadFirstImage = async () => {
    setImageSrc(hotelRooms[0].image)
  }
  uploadFirstImage()

 },[])



  return (
    <>
   
    <Flex   flexDirection={['column','column','column','row']}>
            <Flex  display={['none','none','none','flex']} h="500px"  flexDirection={'column'} flexBasis="20%">

           <HotelRooms setImageSrc={setImageSrc} hotelRooms={hotelRooms}/>
            </Flex>
            <Flex flexDirection={['column','column','column','row']} h={"500px"} position="relative" flexBasis={["40%","40%","90%"]}>
            <Image   className="fade" objectFit={'cover'} h={["300px","400px","400px","100%"]}    w="100%" src={imageSrc}></Image>

            <Flex mt="0.5" display={['flex','flex','flex','none']} h="150px" justifyContent="flex-end" flexDirection="column" w="100%" >
              <Flex h="100%" >
              <HotelRooms setImageSrc={setImageSrc} hotelRooms={hotelRooms}/>
              </Flex>
            </Flex>
            </Flex>
    
          </Flex>
    

    </>
  )
}
