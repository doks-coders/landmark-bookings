import React from 'react'
import { Box, Flex, HStack, VStack, Heading, Text, Button, Container, Image, Grid } from '@chakra-ui/react'
import LinkBanner from '../SubComponents/LinkBanner'
import {AgentItem} from '../SubComponents/ItemElement'

const About = () => {
  return (
    <>
      <Flex pt="60px" flexDir={'column'} h="100%">
        <Container maxW="container.lg">
          <LinkBanner
            pagemode="linkpage"
            linktitle="About"
            hometitle={"Let's Make Travelling Easier For You"}
          />
        </Container>
        <Container h="100%" maxW="container.lg">

          <Flex h={["200px", "300px", "450px"]} mt="50px" position={'relative'}>
            <Flex w="100%" position="absolute" justifyContent="flex-end" h={["200px", "300px", "450px"]}>
              <Image w="90%" objectFit="cover" src="Img/post-2.jpg"></Image>
            </Flex>
            <Flex w="100%" top="0" flexDirection="column" position="absolute" justifyContent="flex-end" h={["200px", "300px", "450px"]}>

              <Flex mb={["5"]} w="100%" h="40%" >
                <Flex fontSize={["12", "xl", "3xl"]} fontWeight={'bold'} w="35%" justifyContent={'center'} alignItems="center" bg="green.400" flexDirection="column">
                  <Text>Landmark</Text>
                  <Text>Bookings</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex mt="60px" flexDirection={['column','column','row']} minH="100px">
            <Flex mt="20px" flexBasis="50%" >
              <Image h={["200px","200px","400px"]} src="Img/post-4.jpg" w={["100%","100%","90%"]}></Image>
            </Flex>
            <Flex  mt="20px" flexDirection={'column'} flexBasis="50%" >
              <Heading  fontSize={["md", "xl", "xl"]}>Sed porttitor lectus nibh</Heading>
              <Box w="100px" mt="10px" h="5px" bg="green.400"></Box>
              <Text my="4">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus</Text>
            </Flex>
          </Flex>
        </Container>
        <Container maxW="container.lg">
        <Box mt="60px">
          <Heading>Our Founders</Heading>
          <Grid mt="20px" w="100%" templateColumns={["repeat(1,1fr)", "repeat(1,1fr)",  "repeat(2,1fr)", "repeat(3,1fr)"]} gap="10">
          <AgentItems />


        </Grid>
          </Box>
        </Container>
      </Flex>
    </>
  )
}

export default About



const AgentItems = () => {
  let items = [{
    name: 'Sammie Wu', image: 'Img/agent-1.jpg', about: 'Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.',
    number: '09023455435',
    email: 'guonnie@gmail.com'
  },
  {
    name: 'Georg Clovech', image: 'Img/agent-3.jpg', about: 'Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.',
    number: '09023455435',
    email: 'guonnie@gmail.com'
  },
  {
    name: 'Sarah Banks', image: 'Img/agent-4.jpg', about: 'Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.',
    number: '09023455435',
    email: 'guonnie@gmail.com'
  },]
  return (
    <>
      {
        items.map((val, index) => (
    <AgentItem key={index} image={val.image} name={val.name} number={val.number} email={val.email} about={val.about}/>
        ))
      }
    </>
  )
}

