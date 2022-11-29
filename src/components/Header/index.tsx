
import {  chakra } from '@chakra-ui/react'  

  import {Nav} from '../Nav'; 
export const Header = () => {
  return (
   <chakra.header 
    py="5.3rem"
    position={['fixed', 'fixed', 'sticky', 'sticky']} 
    maxW={['37.5rem', '100rem']}
    width="100%"   
    zIndex={1}
   
    > 
    
      <Nav/> 

   </chakra.header>
  )
}
