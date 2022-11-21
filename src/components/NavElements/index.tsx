import {AiOutlineShoppingCart} from 'react-icons/ai'
import { 
   
    Flex,
    Stack,
    IconButton, 
    Image,

  
  } from '@chakra-ui/react'  

  import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
  import { MenuElements } from '../../MenuElements'
  import { PropsEI  } from '../../types/types' 

  interface MenuEI { 
    menu?: PropsEI

  }
export const  NavElements : React.FC<MenuEI | any >  = ({menu, handleClick}) => {
  return (
    <>
    <Flex px="2.4rem" align="center" justify="space-between"> 
      
        <Stack direction="row" align="center" spacing={['1.1rem', '1.1rem', '0', '0']}>
            {!menu ?( <IconButton 
                aria-label="open-menu" 
                icon= {<HamburgerIcon/> } 
                variant="none"
                size={['lg', 'lg']}
                fontSize={['2.3rem', '2.3rem', '0']}
                padding="0" 
                minWidth="0"
                display={['block', 'block', 'none', 'none']} 
                onClick={handleClick}
            /> 
             ) :  ( 
            
              <IconButton 
                  aria-label="close-menu" 
                  icon={<CloseIcon/>} 
                  variant="none"
                  size={['lg', 'lg']}
                  fontSize={['1.6rem', '1.6rem', '0']}
                  padding="0" 
                  minWidth="0"
                  onClick={handleClick} 
                />  
               )}
          

           
        
    
            <Image 
                
                
                src="./src/assets/images/logo.svg" 
                position="relative" 
                bottom="2px" 
                display="block" 

                
            /> 

          <MenuElements/>
    
        </Stack> 
      
        <Stack direction="row" spacing="1.9rem" justify="center"> 
          <IconButton 
            aria-label="open-car-of-buy"
            icon={<AiOutlineShoppingCart/>}
            variant="none" 
            color="dark.grayBlue"
            fontSize={['2.3rem', '2.3rem', '3rem']} 
            minWidth="1px"
          />
        <IconButton aria-label='open-profile-settings' variant="none">

          <Image src="./src/assets/images/image-avatar.png" maxW={['2.1rem', '2.1rem', '3rem']}/>

        </IconButton> 

    

  
        </Stack>

        
    </Flex>


    </>
  )
}
