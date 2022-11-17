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
    <Flex px="2.4rem" align="center"> 
      
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
        
    
            <Image src="./src/assets/images/logo.svg" position="relative" bottom="2px"/> 
        
    
        </Stack>

        
    </Flex>


    </>
  )
}
