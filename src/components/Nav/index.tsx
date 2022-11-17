import { NavElements } from '../NavElements'
import { chakra } from '@chakra-ui/react'  



export const Nav : React.FC= () => {
  return (
    <chakra.nav>
        <NavElements/>   
    </chakra.nav>
  )
}
