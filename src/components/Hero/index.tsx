import { Grid, Image} from "@chakra-ui/react"

export const Hero : React.FC = () => {
  return (
    <Grid templateColumns="1fr" pt="5rem" overflow="hidden" > 

        <Image src="./src/assets/images/image-product-1.jpg"/> 

    </Grid>
  )
}
