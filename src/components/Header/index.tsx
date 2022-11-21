
import {  chakra } from '@chakra-ui/react'  

  import {Nav} from '../Nav'; 
export const Header = () => {
  return (
   <chakra.header 
    py="2.5rem"
    position="fixed" 
    maxW={['37.5rem', '100rem']}
    width="100%"   
    zIndex={1}
    bg="light.gray"
    > 
    
      <Nav/> 

   </chakra.header>
  )
}
