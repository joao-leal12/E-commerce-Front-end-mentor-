import React from 'react'
import { Wrap, Flex, WrapItem, Link  } from '@chakra-ui/react'

export const MenuElements : React.FC = () => {
  return (
    <Flex 
        justify="center" 
        align="center" 
        direction="row" 
        display={['none','none',  'flex']} pl="5.7rem">   
        <Wrap spacing="3.4rem">

            <WrapItem>
                <Link 
                fontSize="1.5rem"  
                textDecoration="none"  
                color="gray.100" 
                _hover={{color: 'gray.hover'}}>Collections</Link>
            </WrapItem>
            <WrapItem>
                <Link 
                fontSize="1.5rem" 
                textDecoration="none"  
                color="gray.100"
                _hover={{color: 'gray.hover'}}
                >Men</Link>
            </WrapItem>
            <WrapItem>
                <Link 
                fontSize="1.5rem"
                textDecoration="none"  
                color="gray.100"
                _hover={{color: 'gray.hover'}}>Women</Link>
            </WrapItem>
            <WrapItem>
                <Link 
                fontSize="1.5rem" 
                textDecoration="none" 
                color="gray.100"
                _hover={{color: 'gray.hover'}}  >About</Link>
            </WrapItem>



        </Wrap>
    </Flex> 
  )
}
