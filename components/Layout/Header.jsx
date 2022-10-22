import React from 'react'
import {Flex,HStack,Box, VStack,Heading,Text,Button,Container} from '@chakra-ui/react'
import SimpleDrawer from '../Drawer/SimpleDrawer'
import FormDrawer from '../Drawer/FormDrawer'
import Link from 'next/link'
const Header = () => {
  return (
 <>
 <Flex zIndex="4" background="white" position="fixed" width="100%" py={["4","4","6"]} w="100%" >
<Container maxW="container.lg">
<HStack w="100%" justifyContent="space-between">
    <Flex  display={["flex","flex","none"]}>
        <SimpleDrawer btnColor={'black'}/>
    </Flex>
    <Flex cursor={'pointer'}>
        <Link href="/">
        <Heading  fontSize={["md","xl","xl","xl"]}><Box as="span" color="green.400">Landmark</Box> Bookings</Heading>
   
        </Link>
    </Flex>

    <HStack display={["none","none","flex"]} spacing={6}>
    <LinkItems/>
    </HStack>
    <FormDrawer/>
</HStack>
</Container>
 </Flex>
 </>
  )
}

export default Header


const LinkItems=()=>{
    let links = [{name:'Home',link:'/'},
    {name:'About',link:'/about'},
    {name:'Hotels',link:'/hotels'},
    {name:'Blog',link:'/info'},
    {name:'Contact',link:'/contact'},

]

    return(
        <>
        {
           links.map((val,index)=>(
        
               <Text key={index} as="div" fontWeight="bold" _hover={{color:'green.400'}} cursor="pointer" fontSize="sm">
                  <Link href={val.link}>
                  {val.name}
                  </Link>
               </Text>
        
      
        
           ))
        }
        </>
    )
}