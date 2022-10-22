import React from 'react'
import { Box, Flex, HStack, VStack, Heading, Text, Button, Container, Image, Grid } from '@chakra-ui/react'
import {AgentItem} from './ItemElement'

const Agents = () => {
  return (
    <Flex>
      <Container h="100%" maxW="container.lg">

        <Grid mt="50px" w="100%" templateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]} gap="10">
          <AgentItems />


        </Grid>
      </Container>
    </Flex>
  )
}

export default Agents



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

