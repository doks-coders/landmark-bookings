import React from 'react'
import { useState } from 'react'
import { HStack,Box,Flex } from '@chakra-ui/react'

const CustomRadio = () => {
    let [radioMode,setRadioMode] = useState(false)
  return (
    <HStack onClick={()=>setRadioMode(!radioMode)} style={{transition:'1.5s ease'}}  w="40px" rounded="full" borderWidth={0.3} borderColor="blackAlpha.500">
    <Box ml={(radioMode)?"auto":""} style={{transition:'.3s ease'}}  borderRadius="full" bg={radioMode?"green.500":"green.200"} boxSize="20px"></Box>
  </HStack>
  )
}

export default CustomRadio