  import {Header} from './components/Header'; 
  import { Container } from '@chakra-ui/react'; 
  import { Hero } from './components/Hero';
  export const App : React.FC = () => {
    return (
      <Container maxW={["375px", '100rem']} p="0" position="relative">
          <Header/> 
          <Hero/> 
      </Container>
    
    )
  }
