import {extendTheme} from '@chakra-ui/react'; 
 

export const theme = extendTheme({ 
    config: { 

        initialColorMode: 'light', 
        useSystemColorMode: false

    }, 


    fonts: { 

        body: "Roboto", 
        heading: "Roboto"
    },

    colors: {

        orange: {100: '#FF7C1D'}, 
         

        dark : { 
            
            blue: 'hsl(220, 13%, 13%)', 
            grayBlue: ' hsl(219, 9%, 45%)',
            900: '#000' 
            
        }, 

        light : { 
            900: '#fff', 
            gray: 'hsl(223, 64%, 98%)' , 

        }, 

        gray: { 
            100: "#8F9095",
            hover: '#69696A' 
            

        }

    }, 

    styles : { 
        global: { 
            '*' : { 
                
                padding: "0px",
                margin: '0px', 
                boxSizing: 'border-box'
            },
            'html, body': { 

                fontFamily: 'Roboto', 
                
            }, 
              
              ':root' : { 

                fontSize: '62.5%'
              }
        }   
    }

})  