import React from 'react'
import { Box, Flex, HStack, VStack, Heading, Text, Button, Container, Image, Grid } from '@chakra-ui/react'
import {useState,useEffect} from 'react'

import AOS from "aos";
import "aos/dist/aos.css";






const Testimonials = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

let [testimonial,setTestimonial] = useState([
  {image:'Img/agent-1.jpg',
comment:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor asperiores, 
deserunt optio reiciendis sed illum voluptas. Dolorum harum neque eaque nulla! Placeat id 
unde alias animi iusto reiciendis nam.`,
name:'Lawrence Gibson'},
{image:'Img/agent-3.jpg',
comment:`Ipsum dolor sit amet  adipisicing elit. Eveniet dolor asperiores, 
deserunt optio reiciendis sed illum voluptas. Dolorum harum neque eaque nulla! Placeat id 
unde alias animi iusto reiciendis nam.`,
name:'Michael Russel'},
{image:'Img/agent-4.jpg',
comment:`Ipsum dolor sit amet  adipisicing elit. Eveniet dolor asperiores, 
deserunt optio reiciendis sed illum voluptas. Dolorum harum neque eaque nulla! Placeat id 
unde alias animi iusto reiciendis nam.`,
name:'Rachel Anderson'},
])

let [index,setIndex] = useState(0)
  return (
    <>
      <Flex>
      <Container  mt="50px" py="10"  maxW="container.lg">



 <HStack justifyContent={'space-between'}>
<Heading>Testimonials</Heading>
<HStack  >
<Text> 
  {
 (index!=0) ?<Box onClick={()=>setIndex(index-1)}   _hover={{color:'green'}} cursor="pointer" as="span"><i className="pi pi-chevron-left fadeActive"></i></Box> :
 <Box  color="blackAlpha.500" as="span"><i className="pi pi-chevron-left "></i></Box>
  }
 
{
  ((testimonial.length-1)===index)?(
    <>
    <Box  color="blackAlpha.500" as="span"><i className="pi pi-chevron-right"></i></Box>
    </>
  ):
  (<>
   <Box onClick={()=>setIndex(index+1)} _hover={{color:'green'}} cursor="pointer" as="span"> <i className="pi pi-chevron-right fadeActive"></i></Box>
  </>)
}
  </Text>

</HStack>
</HStack>


<Flex  flexDirection={['column-reverse','column-reverse','row']} mt="50px" w="100%" >
<Flex display={['none','none','flex']} mt="10px"  p="5" flexBasis={'50%'} >
<Image objectFit="cover"  src={testimonial[index].image} w="100%" h="500px" />
</Flex>
<Flex fontSize={['11','12','md']} mt="10px" flexDirection="column" flexBasis={'50%'} p="5" >
<VStack spacing="6">
  <Flex 
  justifyContent={'center'}
  alignItems="center"
  height="70px" 
  width="70px"
  borderRadius="full" p="2" bg="green.500">
    <i 

    style={{fontSize:'25px',color:'white'}}
    className="pi pi-user"></i>
  </Flex>


<Flex p="4" bg="blackAlpha.200">
 {testimonial[index].comment}
</Flex>



</VStack>
<HStack mt="6">

<Flex 

  justifyContent={'center'}
  alignItems="center"
  height="70px" 
  width="70px"
  borderRadius="full"  bg="green.500">
   <Image objectFit="cover"  borderRadius="full" src={testimonial[index].image} w="100%" h="100%"/>


  </Flex>

  <Flex>
    {testimonial[index].name}
  </Flex>

  
</HStack>
</Flex>
</Flex>

      </Container>
    </Flex>
    </>
   
  )
}

export default Testimonials