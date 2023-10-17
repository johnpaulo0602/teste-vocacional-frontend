import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Group, Question, TypeResponse } from '../../interface/question.interface';
import { axiosInstance } from '../../services/api-axios.service';
import { AppResponse, ListResponse } from '../../interface/requests.inteface';
import { ResponseQuestions } from '../../interface/response.interface';

export function QuestionCardComponent() {
    const [questions, setQuestions] = useState<Question[]>([])

    const [currentGroup, setCurrentGroup] = useState<Group>(Group.GROUP_I)
    const [numberGroup, setNumberGroup] = useState<number>(1)

    const [counterQuestion, setCounterQuestion] = useState<number>(1)

    const [alternativeA, setAlternativeA] = useState<Question>()
    const [alternativeB, setAlternativeB] = useState<Question>()

    useEffect( () => {
       loadQuestions()
    }, [currentGroup] );

    const loadQuestions = () => {
        axiosInstance.get(`/questions/${currentGroup }` )
                .then(axiosResponse => {
                    const {success: {response:{items}}} = axiosResponse.data as AppResponse<ListResponse<Question>>

                    setQuestions(items)

                    if(questions.length){
                        const filtered = questions.filter(question => question.questionGroup === counterQuestion)

                        setAlternativeA(filtered[0])
                        setAlternativeB(filtered[1])
                    }

                })
                .catch(error => {
                    throw new Error( error.message );
                })

    }

    const sendResponse = (question?: Question ) => {
        let participant: any = localStorage.getItem('participant')

        if(participant) {
            participant = JSON.parse(participant)
        }

        console.log(participant);

        let data: Omit<ResponseQuestions, '_id'> = {
            group: currentGroup,
            questionGroup: counterQuestion,
            response: TypeResponse.A,
            sessionHash: ''
        }

        if(!question) {
            data.response = TypeResponse.WITHOUT_RESPONSE;
        } else {
            data.response = question.questionGroupOption === 'a' ? TypeResponse.A : TypeResponse.B
        }

        axiosInstance.post('/response-question/register', data).then(() => {
            if(counterQuestion >= 12) {
                setCounterQuestion(0);
                setNumberGroup(numberGroup + 1)
            }

            setCounterQuestion(counterQuestion + 1)


        }).catch(error => {
            throw new Error(error.message)
        })
    }

    return (
            <Flex
                    position={ 'relative' }
                    boxShadow={ 'xl' }
                    paddingX={ '60px' }
                    paddingY={ '20px' }
                    borderRadius={ '6px' }
                    justifyContent={ 'center' }
                    width={ '100%' }
                    height={ '100%' }
            >
                <Box
                        color={ '#fff' }
                        fontWeight={ 'bold' }
                        position={ 'absolute' }
                        background={ 'linear-gradient(268.31deg, #FF675C 2.54%, #FD3078 97.92%)' }
                        top={ '-3' }
                        paddingX={ '35px' }
                        paddingY={ '10px' }
                        borderRadius={ '5px' }
                >
                    Grupo 1/5
                </Box>
                <Flex
                        direction={ 'column' }
                        padding={ '30px' }
                        width={ '100%' }
                        alignItems={ 'center' }

                >
                    <Box borderBottom={ '1px' } paddingY={ '30px' } width={ '100%' }>
                        <Text fontWeight={ 'bold' } fontSize={ '24px' } textAlign={ 'center' }>Voce prefere?</Text>
                    </Box>
                    <Grid marginTop={ '30px' } gridTemplateColumns={ '1fr 1fr 1fr' } gridGap={ '60px' }
                          justifyContent={ 'space-between' }>
                        <GridItem
                                display={ 'flex' }
                                flexDirection={ 'column' }
                                alignItems={ 'center' }
                                cursor={ 'pointer' }
                                onClick={() => sendResponse(alternativeA)}
                        >
                            <Text fontSize={ '52px' }>🤩</Text>
                            <Text overflowWrap={ 'initial' }>{alternativeA && alternativeA.statement}</Text>
                        </GridItem>

                        <GridItem
                                display={ 'flex' }
                                flexDirection={ 'column' }
                                alignItems={ 'center' }
                                cursor={ 'pointer' }
                                onClick={() => sendResponse()}
                        >
                            <Text fontSize={ '52px' }>🫤</Text>
                            <Text>Tanto faz</Text>
                        </GridItem>

                        <GridItem
                                display={ 'flex' }
                                flexDirection={ 'column' }
                                alignItems={ 'center' }
                                cursor={ 'pointer' }
                                onClick={() => sendResponse(alternativeB)}
                        >
                            <Text fontSize={ '52px' }>🤩</Text>
                            <Text>{alternativeB && alternativeB.statement}</Text>
                        </GridItem>
                    </Grid>
                </Flex>
                <Box position={ 'absolute' } width={ '110%' } bottom={ '-5' }>
                    <Flex justifyContent={ 'space-between' }>
                        <Image src={ 'src/assets/icons/back-button-icon.svg' } cursor={ 'pointer' }/>
                        <Image src={ 'src/assets/icons/tip-button-icon.svg' } cursor={ 'pointer' }/>
                    </Flex>
                </Box>
            </Flex>
    );
}