import { Button, Flex, Input, Modal, ModalCloseButton, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../services/api-axios.service';
import { AppResponse, ListResponse } from '../../interface/requests.inteface';
import { ParticipantSession } from '../../interface/user.interface';


interface RegisterModalProps {
    isOpen: boolean;
    closeModal: () => void
}

export function RegisterUserModalComponent(props: RegisterModalProps) {
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ phone, setPhone ] = useState( '' );
    const navigate = useNavigate();

    const submit = async () => {
        const data = {
            name,
            email,
            phone,
        };

        axiosInstance.post<AppResponse<ListResponse<ParticipantSession>>>( '/participants', data ).then( axiosResponse => {
            const { success: { response: { items: [ participant ] } } } = axiosResponse.data as AppResponse<ListResponse<ParticipantSession>>;

            localStorage.setItem( 'participant', JSON.stringify( participant ) );

            navigate( '/questions' );
        } ).catch( ( error ) => {
            throw new Error( error.message );
        } );
    };

    return (
            <Modal isOpen={ props.isOpen } onClose={ props.closeModal } size={ '4xl' }>
                <ModalOverlay/>
                <ModalContent>
                    <ModalCloseButton/>
                    <Flex>
                        <Flex
                                direction={ 'column' }
                                background={ 'linear-gradient(268.31deg, #FF675C 2.54%, #FD3078 97.92%)' }
                                padding={ '20px' }
                                color={ '#fff' }
                                maxWidth={ '50%' }
                                gap={ '19px' }
                        >
                            <Flex direction={ 'column' } gap={ '6px' }>
                                <Text fontWeight={ 'bold' } fontSize={ '24px' }>Como funciona o teste vocacional?</Text>
                                <Flex alignItems={ 'center' } gap={ '4px' }>
                                    <ChatIcon/>
                                    <Text fontWeight={ 'bold' }>Responda algumas perguntas</Text>
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
                            <Flex direction={ 'column' } gap={ '6px' }>
                                <Flex alignItems={ 'center' } gap={ '4px' }>
                                    <ChatIcon/>
                                    <Text fontWeight={ 'bold' }>Descubra o seu perfil</Text>
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
                        <Flex direction={ 'column' } padding={ '20px' } gap={ '15px' }>
                            <Text fontWeight={ '500' } fontSize={ '24px' }>
                                FALTA POUCO...
                                <br/>
                                A resposta para sua carreira está a um passo de distância!
                            </Text>

                            <label>
                                <Flex direction={ 'column' } gap={ '6px' }>
                                    <Text>Nome completo</Text>
                                    <Input
                                            onChange={ ( event ) => setName( event.target.value ) }
                                    />
                                </Flex>
                            </label>

                            <label>
                                <Flex direction={ 'column' } gap={ '6px' }>
                                    <Text>E-mail</Text>
                                    <Input
                                            onChange={ ( event ) => setEmail( event.target.value ) }
                                    />
                                </Flex>
                            </label>

                            <label>
                                <Flex direction={ 'column' } gap={ '6px' }>
                                    <Text>Telefone</Text>
                                    <Input
                                            onChange={ ( event ) => setPhone( event.target.value ) }
                                    />
                                </Flex>
                            </label>

                            {/*<label>*/ }
                            {/*    <Flex alignItems={'center'} gap={'6px'}>*/ }
                            {/*        <Checkbox/>*/ }
                            {/*        <Text>Estou de acordo com os termos de uso</Text>*/ }
                            {/*    </Flex>*/ }
                            {/*</label>*/ }

                            <Button
                                    onClick={ () => submit() }
                            > Começar o teste agora! </Button>
                        </Flex>

                    </Flex>
                </ModalContent>
            </Modal>
    );
}