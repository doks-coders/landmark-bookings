import React from 'react'
import {useState,useEffect} from 'react'
import {Box,Flex,HStack, VStack,Heading,Text,Button,Container,Image} from '@chakra-ui/react'
import Link from 'next/link'

const Banner = () => {
  return (
    <>
<BannerArray/>
    </>
  )
}
export default Banner



const BannerArray= ()=>{
  let bannerArray = [{image:'Img/post-single-1.jpg',location:'Kwara State, Omu-Aran',name:'Mucenty',type:'hotels',price:'160,000',indexnumber:'22423'},
  {image:'Img/post-single-2.jpg',location:'Kwara State, Omu-Aran',name:'Blessing',type:'lodge',price:'70,000',indexnumber:'22423'}]


  let [indexBanner,setindexBanner] =  useState(0)

  let [showBanner, setShowBanner] = useState(true)

  //Show fade when button is clicked
  let [fadeActive, setfadeActive] = useState(false)

  const {image,location,name,type,price,indexnumber} = bannerArray[indexBanner]


  useEffect(() => {
    const refreshDisplay = async () => {
      setShowBanner(false)
      setTimeout(() => {
        setShowBanner(true)
      }, 50)
    }
    refreshDisplay()

  }, [indexBanner])
 



  let preVal = ()=>{

    console.log('prev val')
    setfadeActive(true)
    setindexBanner(indexBanner-1)
  }

  let nextVal = (index)=>{
    console.log(index)
    setfadeActive(true)
    console.log('next val')

    setindexBanner(indexBanner+1)
  }


  return (
    <>
    <BannerElement maxLength={bannerArray.length} indexBanner={indexBanner} showBanner={showBanner} fadeActive={fadeActive}  image={image} location={location} name={name} type={type} price={price} indexnumber={indexnumber} nextVal={nextVal} preVal={preVal}/>
    </>
  )
}


const BannerElement = ({maxLength,showBanner,image,location,indexnumber,name,type,price,nextVal,preVal,indexBanner,fadeActive})=>{
  return (
   
    <Flex   h="100vh" position="relative" >
    <Image display={(showBanner || !fadeActive) ?"block":"none"}  className={fadeActive ?"fade":"" }  w="100%" h="100%" objectFit="cover" src={image}></Image>
    
    <Flex display={(showBanner || !fadeActive) ?"flex":"none"}  className={fadeActive ?"fade":"" } flexDirection="column" justifyContent={'center'} position="absolute"  w="100%" h="100%" >
      <Flex mt="60px" w="100%" px="2"  justifyContent={'space-between'} color="white">
     
         
         
        {(indexBanner===0)?
        <Button disabled zIndex="3" borderRadius="full"  w="50px" h="50px" bg="black" >
          <i className="pi pi-chevron-left"></i>
          </Button>:
           <Button  onClick={()=>preVal(1)} zIndex="3" borderRadius="full"  w="50px" h="50px" bg="black">
           <i className="pi pi-chevron-left"></i>
           </Button>

        }

        {
          ((maxLength-1) === indexBanner)?
          <Button disabled zIndex="3" borderRadius="full"  w="50px" h="50px" bg="black">
          <i className="pi pi-chevron-right"></i>
          </Button>:
          <Button onClick={()=>nextVal(1)} zIndex="3" borderRadius="full"  w="50px" h="50px" bg="black">
          <i className="pi pi-chevron-right"></i>
          </Button>
        }
          
      </Flex>
    </Flex>
    <Flex bg="black" position="absolute" top="0" w="100%" h="100%" opacity={0.5}>
    
    </Flex>
      <Container position="absolute" mx="auto" right="0" left="0" top="0" h="100%" maxW={["container.sm","container.md","container.lg"]}>
    <Flex h="100%" justifyContent={'center'} alignItems={['center','center','center','normal']} flexDirection="column" w="100%"  >
     <Box fontSize="sm">
     <Text mt="70px" color="white">{location}</Text>
    <Text color="white">{indexnumber}</Text>
    
     </Box>
    <Box my="10">
    <Heading  color="white" fontSize={["3xl","5xl","6xl"]}>{name.toUpperCase()}</Heading>
    <Heading  color="green.300" textAlign={['center','center','center','left']} fontSize={["3xl","5xl","6xl"]}>{type.toUpperCase()}</Heading>
    </Box>
    
    <Box>
      <Link href="/info">
        <>
        <Button display={['block','block','none']} fontSize={"sm"} _hover={{}} mt="8"  color="white"  rounded="full" variant="outline" borderColor={'green'}>
      BOOK | N{price} 
    </Button>

    {
      <Button  display={["none","none","block"]} _hover={{}} my="8"  color="white" h="100px" rounded="full" variant="outline" borderColor={'green'}>
      BOOK | N{price} 
    </Button>
       
    }
        </>
     
      </Link>
   
    </Box>
    </Flex>
      </Container>
    
        </Flex>
  )
}