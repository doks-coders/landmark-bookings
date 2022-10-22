import React from 'react'
import { Box, Flex, HStack, VStack, Heading, Text, Button, Container, Image, Grid } from '@chakra-ui/react'

const Services = () => {
  return (
    <>
      <Flex mt="50px" >
        <Container  h="100%" maxW="container.lg">
          <Heading> What We Offer</Heading>
          <Grid mt="50px"  w="100%" templateColumns={["repeat(1,1fr)", "repeat(1,1fr)","repeat(2,1fr)", "repeat(3,1fr)"]} gap="6">
        <ServiceElements/>
          </Grid>
        </Container>
      </Flex>

    </>
  )
}

export default Services




const ServiceElements = ()=>{
let services=[{icon:'instagram',heading:'Easy Booking',text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque repudiandae fugit iure voluptatibus sint aliquid consequuntur modi sapiente cupiditate, nesciunt possimus cumque eaque assumenda ad explicabo. Perferendis dicta animi commodi.'},
{icon:'facebook',heading:'Easy Transportation',text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque repudiandae fugit iure voluptatibus sint aliquid consequuntur modi sapiente cupiditate, nesciunt possimus cumque eaque assumenda ad explicabo. Perferendis dicta animi commodi.'},
{icon:'twitter',heading:'Online Payments',text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque repudiandae fugit iure voluptatibus sint aliquid consequuntur modi sapiente cupiditate, nesciunt possimus cumque eaque assumenda ad explicabo. Perferendis dicta animi commodi.'},

]
  return (
    <>
    {
      services.map((val,index)=>(
        
          <Flex flexDirection="column" w="100%" >
          <HStack  my="2" style={{ fontSize: '25px' }}>
            <Box>
            <Box p="5" border="2px" borderColor="green.400">
            <i style={{ fontSize: '25px' }} className={`pi pi-${val.icon}`}></i>
            </Box>
              
            </Box>
            <Box fontSize={'sm','lg'} fontWeight="bold">
              {val.heading}
            </Box>
          </HStack>

          <Text fontSize={'12','sm'} color="blackAlpha.800" noOfLines={3} my="5">
          {val.text}
          </Text>

        </Flex>
        
      ))
    }
    </>
  )
}