
import {Image, Grid, GridItem } from '@chakra-ui/react'
export const HeroImage = () => {
  return (
        <Grid gridTemplateColumns={["1fr", "1fr", "repeat(4, 1fr)"]} gap={["0", "0", "3rem"]} maxW="42.2rem"> 
            
            <GridItem colStart={1} colEnd={5} borderRadius="16px" overflow="hidden">
                 <Image src="./src/assets/images/image-product-1.jpg" /> 
            </GridItem>
            <GridItem   borderRadius="16px" overflow="hidden">
                     <Image src="./src/assets/images/image-product-1.jpg" /> 
            </GridItem>
            <GridItem  borderRadius="16px" overflow="hidden">
                 <Image src="./src/assets/images/image-product-1.jpg" />
             </GridItem>
            <GridItem  borderRadius="16px" overflow="hidden">
                 <Image src="./src/assets/images/image-product-1.jpg" /> 
            </GridItem>
            <GridItem  borderRadius="16px" overflow="hidden">
                 <Image src="./src/assets/images/image-product-1.jpg" /> 
            </GridItem>

        </Grid>
  )
}
