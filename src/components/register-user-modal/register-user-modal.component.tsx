import { Button, Checkbox, Flex, Input, Modal, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';

export function RegisterUserModalComponent (){
 return (
         <Modal isOpen={false} onClose={() => {}} size={'4xl'}>
             <ModalOverlay/>
             <ModalContent>
                <Flex>
                    <Flex
                            direction={'column'}
                            background={'linear-gradient(268.31deg, #FF675C 2.54%, #FD3078 97.92%)'}
                            padding={'20px'}
                            color={'#fff'}
                            maxWidth={'50%'}
                            gap={'19px'}
                    >
                        <Flex direction={'column'} gap={'6px'}>
                            <Text fontWeight={'bold'} fontSize={'24px'}>Como funciona o teste vocacional?</Text>
                            <Flex alignItems={'center'} gap={'4px'}>
                                <ChatIcon/>
                                <Text fontWeight={'bold'}>Responda algumas perguntas</Text>
                            </Flex>
                            <Text>
                                Você verá diferentes opções em cada pergunta.
                                Escolha a opção que mais combina com você,
                                a que você mais curte!
                                <br/>
                                Se em alguma pergunta nenhuma das opções te
                                chamar a atenção, não tem problema!
                                É só escolher a alternativa "tanto faz".
                            </Text>
                        </Flex>
                        <Flex direction={'column'} gap={'6px'}>
                            <Flex alignItems={'center'} gap={'4px'}>
                                <ChatIcon/>
                                <Text fontWeight={'bold'}>Descubra o seu perfil</Text>
                            </Flex>
                            <Text>Responda algumas perguntas</Text>
                            <Text>
                                Depois de responder todas as perguntas,
                                vamos mostrar o resultado e te ajudar a
                                identificar as áreas em que você tem
                                mais habilidades e interesse.
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex direction={'column'}  padding={'20px'} gap={'15px'}>
                        <Text fontWeight={'500'} fontSize={'24px'}>
                            FALTA POUCO...
                            <br/>
                            A resposta para sua carreira está a um passo de distância!
                        </Text>

                        <label>
                            <Flex direction={'column'} gap={'6px'}>
                                <Text>Nome completo</Text>
                                <Input/>
                            </Flex>
                        </label>

                        <label>
                            <Flex direction={'column'} gap={'6px'}>
                               <Text>E-mail</Text>
                               <Input/>
                           </Flex>
                        </label>

                        <label>
                            <Flex direction={'column'} gap={'6px'}>
                               <Text>Telefone</Text>
                               <Input/>
                           </Flex>
                        </label>

                        <label>
                            <Flex alignItems={'center'} gap={'6px'}>
                                <Checkbox/>
                                <Text>Estou de acordo com os termos de uso</Text>
                            </Flex>
                        </label>

                        <Button> Começar o teste agora! </Button>
                    </Flex>

                </Flex>
             </ModalContent>
         </Modal>
 )
}