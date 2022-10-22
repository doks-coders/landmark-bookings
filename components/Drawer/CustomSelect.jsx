import React from 'react'
import {useState,useEffect,useRef} from 'react'
import {InputGroup,InputLeftAddon,FormLabel,Stack,Textarea,Select,InputRightAddon,Box,Input,HStack,Text} from '@chakra-ui/react'
import { boxShadow } from '../../config'

const CustomSelect = ({options}) => {

     const wrapperRef = useRef(null);

     let [activeOptions,setActiveOptions] = useState(false)
  useOutsideAlerter(wrapperRef,setActiveOptions);



    
    let [chosenText,setChosenText]= useState(options[0])
  return (
    <Box ref={wrapperRef} onClick={()=>setActiveOptions(!activeOptions)} position="relative" flexBasis="50%">
    <HStack borderWidth={1} borderRadius="5" p="3" borderColor="grey" justifyContent="space-between" w="100%">
    <Text>
      {chosenText}
      </Text>
    <Box className={(activeOptions)?"pi pi-chevron-up":"pi pi-chevron-down"} ></Box>
    </HStack>
    
    <Box    display={(activeOptions)?'block':'none'} spacing={0} zIndex="10" position="absolute"  h="100%"   w="100%">
       <Box boxShadow={boxShadow}>
          {
            options.map((val,index)=>(
                <Box key={index} _hover={{background:'gray.50'}} onClick={()=>setChosenText(val)} bg="white"  p="3">
                {val}
              </Box>
            ))
        }
    </Box> 
    

    </Box>
                    </Box>
  )
}

export default CustomSelect


// Hook that alerts clicks outside of the passed ref
 
function useOutsideAlerter(ref,setActiveOptions) {
  useEffect(() => {
    //Alert if clicked on outside of element

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
       // alert("You clicked outside of me!");
       setActiveOptions(false)

      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
