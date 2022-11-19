import { Flex, Grid, Image, Heading, Text} from "@chakra-ui/react"

export const Hero : React.FC = () => {
  return (
    <Grid templateColumns="1fr" pt="5rem" overflow="hidden" > 
        <Flex> 
          
          <Image src="./src/assets/images/image-product-1.jpg"/> 

        </Flex>
        <Flex direction="column">
          <Text>SNEAKERS COMPANY</Text>
          <Heading>Fall Limited Edition Sneakers </Heading> 
          <Text>These low-profile sneakers are your perfect casual wear como</Text>
        </Flex>
    </Grid>
  )
}
