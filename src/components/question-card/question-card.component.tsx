import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Group, Question, TypeResponse } from '../../interface/question.interface';
import { axiosInstance } from '../../services/api-axios.service';
import { AppResponse, ListResponse } from '../../interface/requests.inteface';
import { ResponseQuestions } from '../../interface/response.interface';

interface QuestionCardProps {
    questionA: Question | undefined;
    questionB: Question | undefined;
    counterGroup: number;
    sendResponse: (question?:Question) => void
}

export function QuestionCardComponent( props: QuestionCardProps ) {
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
                    Grupo { props.counterGroup }/5
                </Box>
                <Flex
                        direction={ 'column' }
                        padding={ '30px' }
                        width={ '100%' }
                        alignItems={ 'center' }

                >
                    <Box borderBottom={ '1px' } paddingY={ '30px' } width={ '100%' }>
                        <Text fontWeight={ 'bold' } fontSize={ '24px' } textAlign={ 'center' }>Você prefere?</Text>
                    </Box>
                    <Grid marginTop={ '30px' } gridTemplateColumns={ '1fr 1fr 1fr' } gridGap={ '60px' }
                          justifyContent={ 'space-between' }>
                        <GridItem
                                display={ 'flex' }
                                flexDirection={ 'column' }
                                alignItems={ 'center' }
                                cursor={ 'pointer' }
                                onClick={ () => props.sendResponse(props.questionA)}
                        >
                            <Text fontSize={ '52px' }>🤩</Text>
                            <Text overflowWrap={ 'initial' }>{ props.questionA?.statement || '' }</Text>
                        </GridItem>

                        <GridItem
                                display={ 'flex' }
                                flexDirection={ 'column' }
                                alignItems={ 'center' }
                                cursor={ 'pointer' }
                                onClick={ () => props.sendResponse() }
                        >
                            <Text fontSize={ '52px' }>🫤</Text>
                            <Text>Tanto faz</Text>
                        </GridItem>

                        <GridItem
                                display={ 'flex' }
                                flexDirection={ 'column' }
                                alignItems={ 'center' }
                                cursor={ 'pointer' }
                                onClick={ () => props.sendResponse(props.questionB)}
                        >
                            <Text fontSize={ '52px' }>🤩</Text>
                            <Text>{ props.questionB?.statement || '' }</Text>
                        </GridItem>
                    </Grid>
                </Flex>
                {/*@TODO: check to function from buttons*/}
                {/*<Box position={ 'absolute' } width={ '110%' } bottom={ '-5' }>*/}
                {/*    <Flex justifyContent={ 'space-between' }>*/}
                {/*        <Image src={ 'src/assets/icons/back-button-icon.svg' } cursor={ 'pointer' }/>*/}
                {/*        <Image src={ 'src/assets/icons/tip-button-icon.svg' } cursor={ 'pointer' }/>*/}
                {/*    </Flex>*/}
                {/*</Box>*/}
            </Flex>
    );
}