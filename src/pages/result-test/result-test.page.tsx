import {
    Accordion,
    AccordionButton, AccordionIcon, AccordionItem,
    AccordionPanel, Box,
    Button,
    Flex, Image,
    List,
    ListItem,
    Text
} from '@chakra-ui/react';
import {
    ProfessionResultPercentComponent
} from '../../components/profession-result-percent/profession-result-percent.component';

export function ResultTestPage() {
    return (
            <Flex direction={'column'} gap={'30px'} alignItems={'start'}>
                <Flex direction={'column'} alignItems={'center'}>
                    <Text fontSize={'24px'} fontWeight={'bold'} textAlign={'center'}>Deu Match! seu perfil é o “Explorador Tecnológico”</Text>
                    <Text textAlign={'center'}>
                        Você se encaixa no perfil do "Explorador Tecnológico".
                        Isso significa que você tem uma paixão pelo mundo da tecnologia,
                        inovação e resolução de problemas complexos.
                        Suas principais características incluem:
                    </Text>
                </Flex>
                <Flex justifyContent={'space-between'} alignItems={'center'} gap={'100px'}>
                    <Image src={'src/assets/images/trofeu-result.svg'}/>
                    <Flex>
                        <List display={'flex'} flexDirection={'column'} gap={'15px'}>
                            <ListItem display={'flex'} gap={'10px'} alignItems={'center'}>
                                <Image src={'src/assets/icons/confirm-icon.svg'}/>
                                Curiosidade e entusiasmo por descobrir soluções tecnológicas.
                            </ListItem>
                            <ListItem display={'flex'} gap={'10px'} alignItems={'center'}>
                                <Image src={'src/assets/icons/confirm-icon.svg'}/>
                                Valorização da lógica e pensamento analítico.
                            </ListItem>
                            <ListItem display={'flex'} gap={'10px'} alignItems={'center'}>
                                <Image src={'src/assets/icons/confirm-icon.svg'}/>
                                Capacidade de resolver desafios tecnológicos com eficiência.
                            </ListItem>
                            <ListItem display={'flex'} gap={'10px'} alignItems={'center'}>
                                <Image src={'src/assets/icons/confirm-icon.svg'}/>
                                Vontade de experimentar e aprender continuamente em tecnologia.
                            </ListItem>
                        </List>
                    </Flex>
                </Flex>

                <Flex direction={'column'} gap={'15px'} width={'100%'}>
                    <Text fontSize={'24px'} fontWeight={'bold'}>Confira o resultado do seu teste!</Text>

                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                        <Flex gap={'15px'} boxShadow={'2xl'} paddingY={'50px'} paddingX={'20px'} borderRadius={'5px'}>
                            <ProfessionResultPercentComponent
                                    percentage={100}
                                    iconUrl={'src/assets/icons/comunication.svg'}
                                    label={'tecnologia'}
                            /><ProfessionResultPercentComponent
                                    percentage={100}
                                    iconUrl={'src/assets/icons/comunication.svg'}
                                    label={'tecnologia'}
                            /><ProfessionResultPercentComponent
                                    percentage={100}
                                    iconUrl={'src/assets/icons/comunication.svg'}
                                    label={'tecnologia'}
                            /><ProfessionResultPercentComponent
                                    percentage={100}
                                    iconUrl={'src/assets/icons/comunication.svg'}
                                    label={'tecnologia'}
                            /><ProfessionResultPercentComponent
                                    percentage={100}
                                    iconUrl={'src/assets/icons/comunication.svg'}
                                    label={'tecnologia'}
                            />

                        </Flex>
                        <Image src={'src/assets/images/pencil-rocket.svg'}/>
                    </Flex>
                </Flex>

                <Flex direction={'column'} fontWeight={'bold'} gap={'50px'}>
                        <Text fontSize={'24px'}>Veja os cursos que dão match com você!</Text>
                    <Flex >
                        <Image src={'src/assets/images/certificate.svg'}/>
                        <Flex gap={'40px'}>
                            <Flex
                                    direction={'column'}
                                    gap={'20px'}
                                    boxShadow={'lg'}
                                    background={'#fff'}
                                    borderRadius={'8px'}
                                    padding={'10px'}
                            >
                                <Text fontSize={'28px'}>Engenharia de Software</Text>
                                <Text fontWeight={'light'}>
                                    Este curso é altamente compatível com seu perfil,
                                    pois permite que você aplique sua lógica
                                    e habilidades analíticas para desenvolver
                                    software inovador.
                                </Text>
                                {/*<Button marginTop={'auto'}> Saiba mais</Button>*/}
                            </Flex>

                            <Flex
                                    direction={'column'}
                                    gap={'20px'}
                                    boxShadow={'lg'}
                                    background={'#fff'}
                                    borderRadius={'8px'}
                                    padding={'10px'}
                            >
                                <Text fontSize={'28px'}>Engenharia de Software</Text>
                                <Text fontWeight={'light'}>
                                    Este curso é altamente compatível com seu perfil,
                                    pois permite que você aplique sua lógica
                                    e habilidades analíticas para desenvolver
                                    software inovador.
                                </Text>
                                {/*<Button marginTop={'auto'}> Saiba mais</Button>*/}
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex>
                        {/*<Text><Text>Explore</Text> Outras Áreas de Interesse</Text>*/}
                    </Flex>
                </Flex>

                <Flex justifyContent={'center'} padding={'35px'} width={'100%'}>
                    <Button>Fazer o teste novamente!</Button>
                </Flex>
            </Flex>
    );
}