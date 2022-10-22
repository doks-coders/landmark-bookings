import React from 'react'

import {Drawer,DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter,useDisclosure,DrawerCloseButton,List,ListItem,Divider,Flex,Button} from '@chakra-ui/react'

import {InputGroup,InputLeftAddon,FormLabel,Stack,Textarea,Select,InputRightAddon,Box,Input,HStack,Text} from '@chakra-ui/react'
import CustomSelect from './CustomSelect'
import CustomRadio from './CustomRadio'
import DropdownArray from '../PrimeComponents/DropdownArray'

function FormDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    let checkEvent = (e)=>{
      console.log(e)
    }

    const [item,setItem] =  React.useState('Test')


    let  typeOfProduct=[
      {
          typeKey:'Select Size',
          typeModes:[  { name: 'SM' },
          { name: 'MD' },
          { name: 'XL' },
          { name: 'XXL' }]
      },
    ]
    
      let [selectedModeArray,setSelectedModeArray] = React.useState([{name:'None'},{name:'None'}])




      let getModeArray = (e,index)=>{
        let NewselectedModeArray = [...selectedModeArray]
        NewselectedModeArray[index] = e.value
        setSelectedModeArray(NewselectedModeArray)
            }
  
    return (
      <>
      

        <Button onClick={onOpen} bg="green.400" color="white">
    <i className="pi pi-search"></i>
</Button>

        <Drawer
        size="md"
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Search
            </DrawerHeader>
  
            <DrawerBody>
      



              <Stack flexWrap={'wrap'} spacing='24px'>

             

                <Box flexBasis="50%">
                <FormLabel  htmlFor='type'>Type</FormLabel>
                <CustomSelect options={["All Type","For Rent","For Sale"]}  />
                </Box>
             
              
                <Box flexBasis="50%">
                <FormLabel htmlFor='city'>City</FormLabel>

                <CustomSelect options={["All Cities","Lagos","Abuja"]}  />


                </Box>

                <Box flexBasis="50%">
                <FormLabel htmlFor='bedrooms'>Bedrooms</FormLabel>

                
                <CustomSelect options={["All Bedrooms","1","2","3","4 and Above"]}  />

                </Box>
             
                <Box flexBasis="50%">
                <FormLabel htmlFor='bathrooms'>Bathrooms</FormLabel>
                  
                <CustomSelect options={["All Bathrooms","1","2","3","4 and Above"]}  />

                </Box>
                <Box flexBasis="50%">
                <FormLabel htmlFor='bathrooms'>Min Price</FormLabel>
                  
                <CustomSelect options={["N250k","N500k","N1m","N10m"]}  />

                </Box>

            
             
              
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onClose} colorScheme='green'>Submit</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
export default FormDrawer

