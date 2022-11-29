import { NavElements } from '../NavElements'
import { chakra } from '@chakra-ui/react'  
import {useState, useEffect} from 'react'


export const Nav : React.FC= () => { 
  const [activeMenu, setActiveMenu] = useState<boolean>(false )
  
  function handleClick () : void { 

        setActiveMenu(!activeMenu)

    }

  return (  
    <chakra.nav>
        <NavElements menu={activeMenu} handleClick={handleClick}/>   
    </chakra.nav>
  )
}
