
import {  chakra } from '@chakra-ui/react'  

  import {Nav} from '../Nav'; 
export const Header = () => {
  return (
   <chakra.header 
    py="2.5rem"
    position="fixed" 
    width="100%"  
    maxW="37.5rem"
    zIndex={1}
    bg="light.gray"
    > 
    
      <Nav/> 

   </chakra.header>
  )
}
