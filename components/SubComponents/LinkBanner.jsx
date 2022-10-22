import React from 'react'
import { Box, Flex, HStack, VStack, Heading, Text, Button, Container, Image, Grid } from '@chakra-ui/react'
import Link from 'next/link'
/**
 * homepage.title
 * homepage.linktitle
 * pagemode
 * 
 linkpage.title
 * 
 */
const LinkBanner = ({hometitle,linktitle,pagemode}) => {
  return (
    <>
    <Flex fontSize={['12','md']}>
      <Container borderLeft={(pagemode ==='linkpage') ? "3px solid #2eca6a":""} mt="50px" py="10"  maxW="container.lg">
        {
(pagemode ==='homepage') && <HStack justifyContent={'space-between'}>
<Heading fontSize={['12','xl']}>{hometitle}</Heading>
<HStack  cursor="pointer">
<Text>{linktitle}</Text>
<i className='pi pi-chevron-right'></i>
</HStack>
</HStack>

        }

{
(pagemode === 'linkpage') && <HStack justifyContent={'space-between'}>
<Heading fontSize={['12','xl']}>{hometitle}</Heading>
<HStack  >
<Text> <Box _hover={{color:'green'}} cursor="pointer" as="span"> <Link href="/">Home</Link></Box>{' / '}  
 <Box _hover={{color:'green'}} cursor="pointer" as="span">{linktitle}</Box>  </Text>

</HStack>
</HStack>
}

      </Container>
    </Flex>
    </>
  )
}

export default LinkBanner