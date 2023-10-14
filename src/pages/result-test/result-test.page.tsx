import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Button,
    Flex,
    List,
    ListItem,
    Text
} from '@chakra-ui/react';
import {
    ProfessionResultPercentComponent
} from '../../components/profession-result-percent/profession-result-percent.component';

export function ResultTestPage() {
    return (
            <Flex>
                <Flex>
                    <Text>Deu Match! seu perfil é o <Text>“Explorador Tecnológico” </Text></Text>
                    <Text>
                        Você se encaixa no perfil do "Explorador Tecnológico".
                        Isso significa que você tem uma paixão pelo mundo da tecnologia,
                        inovação e resolução de problemas complexos.
                        Suas principais características incluem:
                    </Text>
                </Flex>
                <Flex>

                    <Flex>
                        <List>
                            <ListItem>
                                Curiosidade e entusiasmo por descobrir soluções tecnológicas.
                            </ListItem>
                            <ListItem>
                                Valorização da lógica e pensamento analítico.
                            </ListItem>
                            <ListItem>
                                Capacidade de resolver desafios tecnológicos com eficiência.
                            </ListItem>
                            <ListItem>
                                Vontade de experimentar e aprender continuamente em tecnologia.
                            </ListItem>
                        </List>
                    </Flex>
                </Flex>

                <Flex>
                    <Text>Confira o <Text>resultado</Text> do seu teste!</Text>

                    <Flex>
                        <ProfessionResultPercentComponent/>
                        <ProfessionResultPercentComponent/>
                        <ProfessionResultPercentComponent/>
                        <ProfessionResultPercentComponent/>
                        <ProfessionResultPercentComponent/>
                    </Flex>
                </Flex>

                <Flex>
                    <Flex>
                        <Text>Veja os cursos que dão <Text>match</Text> com você!</Text>
                    </Flex>
                    <Flex>
                        <Flex>
                            <Text>Engenharia de Software</Text>
                            <Text>
                                Este curso é altamente compatível com seu perfil,
                                pois permite que você aplique sua lógica
                                e habilidades analíticas para desenvolver
                                software inovador.
                            </Text>
                            <Button> Saiba mais</Button>
                        </Flex>

                        <Flex>
                            <Text>Engenharia de Software</Text>
                            <Text>
                                Este curso é altamente compatível com seu perfil,
                                pois permite que você aplique sua lógica
                                e habilidades analíticas para desenvolver
                                software inovador.
                            </Text>
                            <Button> Saiba mais</Button>
                        </Flex>
                    </Flex>

                    <Flex>
                        <Text><Text>Explore</Text> Outras Áreas de Interesse</Text>
                        <Accordion>
                            <AccordionItem>
                                <AccordionButton>test</AccordionButton>
                            </AccordionItem>
                            <AccordionPanel>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            </AccordionPanel>
                        </Accordion>
                    </Flex>
                </Flex>

                <Flex>
                    <Button>Fazer o teste novamente!</Button>
                </Flex>
            </Flex>
    );
}