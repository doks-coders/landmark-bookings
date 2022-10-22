import React from 'react'
import { Box, Flex, Button,Input, Grid, Container, Text, Heading, Divider, VStack, HStack, Image } from '@chakra-ui/react'
import Link from 'next/link'


const Footer = () => {
  return (
   <>
   <Flex  flexDirection={'column'} mt="50px">
    <Container maxW="container.lg">
<Box w="100%" >
  <Flex fontSize="sm" flexDirection={['column','column','column','row']} w="100%" >
  <Flex flexDirection={'column'} flexBasis={'50%'}>
<Flex mt="5" flexDirection={'column'}>
<Heading fontSize={'2xl'}><Box as="span" color="green.400">Landmark</Box> Bookings  </Heading>
<Box  color="#aaaaaa">
<Text mt="2">A108 Adam Street</Text>
<Text>New York, NY 535022</Text>
<Text>United States</Text>
</Box>

</Flex>

<Flex mt="4" flexDirection={'column'}>
<HStack>
<Text color="grey"> <b>Phone: </b></Text>
<Text color="#aaaaaa" >+909 039 0239</Text>
</HStack>

<HStack>
<Text color="grey"> <b>Email: </b></Text>
<Text color="#aaaaaa">info@example.com</Text>
</HStack>

</Flex>



</Flex>
<Flex mt="5" flexDirection={'column'} flexBasis={'40%'}>
<UseFulLinks/>

</Flex>
<Flex mt="5"  flexDirection={'column'} flexBasis={'40%'}>
<OurBranches/>
</Flex>
<Flex mt="5" flexDirection={'column'} flexBasis={'50%'}>
<Heading fontSize={'md'}>Join Our Newsletter</Heading>
<Text  color="#aaaaaa" my="2">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</Text>

<Flex maxW="500px">
<Input outlineOffset={0} outline="1"  rounded="full"></Input>
<Button bg="green.500" zIndex={2} fontSize={['12','12']} rounded="full"  ml="-10" color="white">Subscribe</Button>
{/*<Button bg="green.500" zIndex={2} fontSize={['12','md']} rounded="full" p="5" ml="-10" color="white">Subscribe</Button>*/}
</Flex>

</Flex>
  </Flex>

  

</Box>


    </Container>

<Flex mt="20" w="100%" bg="#f1f1f1" py="10">
<Container maxW="container.lg">

<Flex flexDirection={['column','column','row']} alignItems="center"  justifyContent={'space-between'} w="100%">
  <Flex flexDirection={'column'}>

    <Text>
    © Copyright <b>Daventy</b>. All Rights Reserved
    </Text>
    <Text textAlign={['center','center','left']} as="div">
      Designed by <Box as="span" color="green.500">Daventy Agency</Box>
    </Text>

  </Flex>


  <Flex >
 <Box ml="2"><OutLineCircle icon="instagram"/></Box> 
 <Box ml="2"><OutLineCircle icon="twitter"/></Box> 
 <Box ml="2"><OutLineCircle icon="facebook"/></Box> 
 <Box ml="2"><OutLineCircle icon="linkedin"/></Box> 

  </Flex>
</Flex>
</Container>
</Flex>

    
   </Flex>
   </>
  )
}

export default Footer























const UseFulLinks = ()=>{

  const usefullinks = [{name:'Home',link:'/'},
  {name:'About Us',link:'/about'},
  {name:'Hotels',link:'/services'},
  {name:'Blog',link:'/staff'}, //Terms Of Service
  {name:'Contact',link:'/blog'}] //Privacy Policy

  return (
    <>
     <Heading mb="2" fontSize={'md'}>Useful Links</Heading>
    {
      usefullinks.map((val,index)=>(     
        <Link href={val.link}>
        <HStack cursor={'pointer'} _hover={{color:'green'}} color="#aaaaaa" my="2" key={index}>
  <Box color="green.500">
  <i className="pi pi-chevron-right"></i>
  </Box>
 
  <Box>{val.name}</Box>
</HStack>
        </Link>

        
      ))
    }
    </>
  )
}



const OurBranches = ()=>{

  const usefullinks = [{name:'Kwara State',link:'/'},
  {name:'Port Harcourt',link:'/'},
  {name:'Benin City',link:'/'},
  {name:'Lagos',link:'/'},
  {name:'Abuja',link:'/'}]

  return (
    <>
     <Heading mb="2" fontSize={'md'}>Our Branches</Heading>
    {
      usefullinks.map((val,index)=>(     
<HStack _hover={{color:'green'}} cursor={'pointer'}  color="#aaaaaa" my="2" key={index}>
<Box  color="green.500">
  <i className="pi pi-chevron-right"></i>
  </Box>
  <Box>{val.name}</Box>
</HStack>
        
      ))
    }
    </>
  )
}


const OutLineCircle = ({ icon }) => {
  return (
      <>
          <Flex color="white" background="#5fcf80" justifyContent="center" alignItems={'center'}
              borderRadius={'full'} width="40px"
              height="40px" >
              <i style={{ fontSize: '20px' }} className={`pi pi-${icon}`}></i>
          </Flex>
      </>
  )

}

//s