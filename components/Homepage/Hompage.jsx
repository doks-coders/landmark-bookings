import React from 'react'
import Header from '../Layout/Header'
import Banner from '../SubComponents/Banner'
import Services from '../SubComponents/Services'
import PopularHotels from '../SubComponents/PopularHotels'
import Agents from '../SubComponents/Agents'
import News from '../SubComponents/News'
import Testimonials from '../SubComponents/Testimonials'
import LinkBanner from '../SubComponents/LinkBanner'
import Footer from '../Layout/Footer'
import { Box } from '@chakra-ui/react'
//Header

//Banner
//Services
//PopularHotels
//Agents
//Latest News
//Testimonials

//Footer

const Hompage = () => {
  return (
    <>
<Box fontSize={'12','md'}>

<Banner/>
    <Services/>
    <LinkBanner
    pagemode="homepage"
    hometitle="Popular Hotels"
    linktitle="All Hotels"
    />
    <PopularHotels/>

    <LinkBanner
    pagemode="homepage"
    hometitle="Our Team"
    linktitle="All Members"
    />

    <Agents/>

    <LinkBanner
    pagemode="homepage"
    hometitle="Latest News"
    linktitle="All News"
    />

    <News/>
    <Testimonials/>
</Box>
    
 

    </>
  )
}

export default Hompage