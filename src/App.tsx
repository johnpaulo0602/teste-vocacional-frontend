import { Flex } from '@chakra-ui/react';
import { QuestionsPage } from './pages/questions/questions.page';
import { Home } from './pages/home';

export function App() {
    return (
            <Flex
                    alignItems={ 'center' }
                    justifyContent={ 'center' }
                    height="100vh"
                    paddingTop={ '20px' }
                    marginBottom={ '20px' }
            >
                <Flex maxW={ '1024px' }>
                    <Home/>
                </Flex>
            </Flex>
    );
}