import { Flex } from '@chakra-ui/react';
import { QuestionCardComponent } from '../../components/question-card/question-card.component';

export function QuestionsPage(){
    return(
         <Flex
                 alignItems={'center'}
                 justifyContent={'center'}
                 width={'720px'}
                 height={'400px'}
         >
             <QuestionCardComponent/>
         </Flex>
    )
}