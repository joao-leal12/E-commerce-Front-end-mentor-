import React from 'react'
import { Flex } from '@chakra-ui/react' 
import {chakra} from '@chakra-ui/react' 
import {Image} from "@chakra-ui/react"; 
export const Header = () => {
  return (
   <chakra.header>
    <Flex>

        <Image src="./assets/images/icon-menu.svg"/> 


    </Flex>

   </chakra.header>
  )
}
