import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';

export function QuestionCardComponent() {
    return (
            <Flex
                    position={ 'relative' }
                    boxShadow={ 'xl' }
                    paddingX={ '60px' }
                    paddingY={ '20px' }
                    borderRadius={ '6px' }
                    justifyContent={ 'center' }
                    width={'100%'}
                    height={'100%'}
            >
                <Box
                        color={'#fff'}
                        fontWeight={'bold'}
                        position={ 'absolute' }
                        background={'linear-gradient(268.31deg, #FF675C 2.54%, #FD3078 97.92%)' }
                        top={ '-3' }
                        paddingX={ '35px' }
                        paddingY={ '10px' }
                        borderRadius={ '5px' }
                >
                    Grupo 1/5
                </Box>
                <Flex
                        direction={'column'}
                        padding={'30px'}
                        width={'100%'}
                        alignItems={'center'}

                >
                    <Box borderBottom={'1px'} paddingY={'30px'} width={'100%'}>
                        <Text fontWeight={'bold'} fontSize={'24px'} textAlign={'center'}>Voce prefere?</Text>
                    </Box>
                    <Grid marginTop={'30px'} gridTemplateColumns={'1fr 1fr 1fr'} gridGap={'60px'} justifyContent={'space-between'}>
                        <GridItem display={'flex'} flexDirection={'column'} alignItems={'center'} cursor={'pointer'}>
                            <Text fontSize={'52px'}>🤩</Text>
                            <Text overflowWrap={'initial'}>obter uma bolsa para estudar educação</Text>
                        </GridItem>

                        <GridItem display={'flex'} flexDirection={'column'} alignItems={'center'} cursor={'pointer'}>
                            <Text fontSize={'52px'}>🫤</Text>
                            <Text>Tanto faz</Text>
                        </GridItem>

                        <GridItem
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'center'}
                                cursor={'pointer'}
                        >
                            <Text fontSize={'52px'}>🤩</Text>
                            <Text> fazer o projeto de um viaduto8</Text>
                        </GridItem>
                    </Grid>
                </Flex>
                <Box position={'absolute'} width={'110%'} bottom={'-5'}>
                    <Flex justifyContent={'space-between'}>
                        <Image src={'src/assets/icons/back-button-icon.svg'} cursor={'pointer'}/>
                        <Image src={'src/assets/icons/tip-button-icon.svg'} cursor={'pointer'}/>
                    </Flex>
                </Box>
            </Flex>
    );
}