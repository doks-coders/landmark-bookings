import {server} from '../config'
import Hompage from '../components/Homepage/Hompage'
import Link from 'next/link'
import Head from 'next/head'
import {Box} from '@chakra-ui/react'
import Layout from '../components/Layout/Layout'


const home = () => {

 


  return (
<>
      {
        <Layout>
          <Hompage/>
          </Layout>
  
         
      
      
      }


    </>
  )
}

export default home




