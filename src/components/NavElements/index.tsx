import {AiOutlineShoppingCart} from 'react-icons/ai'
import { 
   
    Flex,
    Stack,
    IconButton, 
    Image,

  
  } from '@chakra-ui/react'  

  import {HamburgerIcon} from '@chakra-ui/icons'

export const  NavElements : React.FC = () => {
  return (
    <>
    <Flex px="2.4rem" align="center" justify="space-between"> 
      
        <Stack direction="row" align="center" spacing="1.1rem">
            
            <IconButton 
                aria-label="open-menu" 
                icon={<HamburgerIcon/>} 
                variant="none"
                size="lg" 
                fontSize="2.3rem" 
                padding="0" 
                minWidth="0"
            />  
        
    
            <Image 
                
                
                src="./src/assets/images/logo.svg" 
                position="relative" 
                bottom="2px"
            /> 
        
    
        </Stack> 
        <Stack direction="row" spacing="1.9rem" justify="center"> 
          <IconButton 
            aria-label="open-car-of-buy"
            icon={<AiOutlineShoppingCart/>}
            variant="none" 
            color="dark.grayBlue"
            fontSize="2.3rem" 
            minWidth="1px"
          />
        <IconButton aria-label='open-profile-settings' variant="none">

          <Image src="./src/assets/images/image-avatar.png" maxW="2.1rem"/>

        </IconButton> 

    

  
        </Stack>

        
    </Flex>


    </>
  )
}
