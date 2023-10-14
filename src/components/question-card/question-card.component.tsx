import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

export function QuestionCardComponent(){
 return(
         <Flex>
             <Box>Grupo 1/5</Box>
             <Flex>
                 <Text>Voce prefere?</Text>
                 <Box>line</Box>
                 <Grid>
                     <GridItem>
                         icon
                         Question label 1
                     </GridItem>

                     <GridItem>
                         icon
                         Tanto faz
                     </GridItem>

                     <GridItem>
                         icon
                         Question label 2
                     </GridItem>
                 </Grid>
             </Flex>
             <Box>
                 <Flex>
                     back icon

                     idea icon
                 </Flex>
             </Box>
         </Flex>
 )
}