import { Grid} from "@chakra-ui/react"
import { HeroImage } from "../HeroImage"
import { HeroInfors } from "../HeroInfors"

export const Hero : React.FC = () => {
  return (
    <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']}  overflow="hidden"  alignItems="center" paddingTop={["0", "0", "9rem"]}> 
       
        <HeroImage/>
        <HeroInfors/>
        
    </Grid>
  )
}
