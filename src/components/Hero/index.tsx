import { Flex, Grid, Image, Heading, Text, Stack} from "@chakra-ui/react"
import { BuySection } from "../BuySection"

export const Hero : React.FC = () => {
  return (
    <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} pt="5rem" overflow="hidden" > 
        <Flex> 
          
          <Image src="./src/assets/images/image-product-1.jpg"/> 

        </Flex>
        <Flex direction="column" px="2.7rem">
          <Text 
            color="brand.100" 
            fontWeight="bolder" 
            mt="2.6rem" 

            letterSpacing="2px">SNEAKERS COMPANY</Text>
          <Heading maxW="25rem" mt="1rem" >Fall Limited Edition Sneakers </Heading> 
          <Text fontSize="1.6rem" color="gray.100" mt="1.5rem">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. they'll withsand everything the weather can offer </Text> 
         <BuySection/> 
        </Flex>
    </Grid>
  )
}
