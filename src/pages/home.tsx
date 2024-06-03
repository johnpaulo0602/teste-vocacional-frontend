import { Container, Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { ProfessionCardComponent } from '../components/profession-card/profession-card.component';
import { RegisterUserModalComponent } from '../components/register-user-modal/register-user-modal.component';
import { FooterComponent } from '../components/footer/FooterComponent';
import { useState } from 'react';
import logoApplication from '../assets/icons/logo-icon.svg'
import technologyIcon from '../assets/icons/thecnology-icon.svg'
import biologyIcon from '../assets/icons/biology-icon.svg'
import humanIcon from '../assets/icons/human-icon.svg'
import communicationIcon from '../assets/icons/comunication.svg'
import artIcon from '../assets/icons/arts-icon.svg'

export function Home() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Box maxWidth={'1140px'} margin={'auto'} width={'100%'}>
                <Flex
                    flexDirection={'column'}
                    marginTop={'6rem'}
                >
                    <Flex justifyContent={'space-between'} position={'relative'}>
                        <Flex direction={'column'} justifyContent={'center'} gap={'15px'} width={'50%'}>
                            <Image src={logoApplication} maxWidth={'216px'} />
                            <Text
                                fontSize={'30px'}
                                fontWeight={'bold'}
                                margin={0}
                                padding={0}>
                                Dê match com a <span style={{
                                    background: 'var(--Gradient, linear-gradient(268deg, #FF675C 2.54%, #FD3078 97.92%))',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>carreira</span> dos seus sonhos!
                            </Text>
                            <Text>
                                Escolher a profissão certa nunca foi tão fácil e divertido.
                                Faça nosso teste vocacional grátis e deixe a paixão pelos estudos te guiar na direção de um futuro promissor.
                                Descubra as opções que a Unidesc oferece para você brilhar no mercado de trabalho.
                            </Text>

                            <Button
                                onClick={() => { setIsOpen(true) }}
                                borderRadius='8px'
                                background='linear-gradient(268deg, #FF675C 2.54%, #FD3078 97.92%)'
                                textColor={'White'}
                                width={'60%'}
                                _hover={{
                                    background: 'linear-gradient(268deg, #FD3078 2.54%, #FF675C 97.92%)'
                                }}
                            >
                                Começar o teste agora!
                            </Button>
                        </Flex>
                        <Flex>
                            <Image src={'src/assets/images/estudante-home.png'} maxHeight={'400px'} />
                            <Image
                                src={'/src/assets/images/gruaduation-icon.png'}
                                width={'238px'}
                                background={'cover no-repeat'}
                                position={'absolute'}
                                top={'0'}
                                left={'44rem'}
                            />
                            <Image
                                src={'/src/assets/images/certificate.png'}
                                width={'132px'}
                                background={'cover no-repeat'}
                                position={'absolute'}
                                top={'-6rem'}
                                left={'66rem'}
                            />
                            <Image
                                src={'/src/assets/images/learning-online.png'}
                                width={'148px'}
                                background={'cover no-repeat'}
                                position={'absolute'}
                                top={'18rem'}
                                left={'46rem'}
                            />
                        </Flex>
                    </Flex>

                    <Flex direction={'column'} gap={'30px'} margin={'6rem'}>
                        <Text textAlign={'center'} fontSize={'30px'} fontWeight={'bold'}>
                            Conheça as áreas que combinam com você!
                        </Text>
                        <Text textAlign={'center'} paddingX={'20px'}>
                            Encontre o caminho que mais combina com você! Conheça as cinco áreas disponíveis para o
                            teste vocacional e descubra onde suas habilidades e paixões se encaixam melhor.
                        </Text>

                        <Flex flexWrap={'wrap'} gap={'60px'} justifyContent={'center'}>
                            <ProfessionCardComponent title={'Tecnológicas'} imgUrl={technologyIcon} />
                            <ProfessionCardComponent title={'Biológicas'} imgUrl={biologyIcon} />
                            <ProfessionCardComponent title={'Humanas'} imgUrl={humanIcon} />
                            <ProfessionCardComponent title={'Comunicação'} imgUrl={communicationIcon} />
                            <ProfessionCardComponent title={'Artes'} imgUrl={artIcon} />
                        </Flex>

                        <Flex alignItems={'center'} justifyContent={'center'}>
                            <Button
                                onClick={() => { setIsOpen(true) }}
                                borderRadius='8px'
                                background='linear-gradient(268deg, #FF675C 2.54%, #FD3078 97.92%)'
                                textColor={'White'}
                                paddingX={'6rem'}
                                _hover={{
                                    background: 'linear-gradient(268deg, #FD3078 2.54%, #FF675C 97.92%)'
                                }}
                            >
                                Fazer teste agora!
                            </Button>
                        </Flex>
                    </Flex>
                    <RegisterUserModalComponent isOpen={isOpen} closeModal={() => setIsOpen(false)} />
                </Flex>
            </Box>
            <Box
                background="#FFF"
                boxShadow="0px 8px 24px 0px rgba(0, 0, 0, 0.24)"
                paddingY="20px"
                textAlign="center"
            >
                <FooterComponent />
            </Box>
        </>
    )
}
