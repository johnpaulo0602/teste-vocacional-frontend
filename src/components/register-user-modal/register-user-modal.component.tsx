import { Button, Flex, Input, Modal, ModalCloseButton, ModalContent, ModalOverlay, Text, useToast } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../services/api-axios.service';
import { AppResponse, ListResponse } from '../../interface/requests.inteface';
import { ParticipantSession } from '../../interface/user.interface';
import InputMask from 'react-input-mask';


interface RegisterModalProps {
    isOpen: boolean;
    closeModal: () => void
}

export function RegisterUserModalComponent(props: RegisterModalProps) {
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ phone, setPhone ] = useState( '' );
    const [ nameError, setNameError ] = useState(false);
    const [ emailError, setEmailError ] = useState(false);
    const [ phoneError, setPhoneError ] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const submit = async () => {
        // Validação dos campos
        if (!name) {
            setNameError(true);
        }
        if (!email || !validateEmail(email)) {
            setEmailError(true);
        }
        if (!phone) {
            setPhoneError(true);
        }
        if (!name || !email || !validateEmail(email) || !phone) {
            toast({
                title: "Erro",
                description: "Por favor, preencha todos os campos antes de continuar.",
                status: "error",
                duration: 4000,
                isClosable: true,
                position: 'top-right'
            });
            return;
        }

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
                                roundedBottomLeft={'base'}
                                roundedTopLeft={'base'}
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
                            <Text fontWeight={ 'bold' } fontSize={ '20px' }>FALTA POUCO...</Text>
                            <Text>A resposta para sua carreira está a um passo de distância!</Text>
                            <label>
                                <Flex direction={ 'column' } gap={ '6px' }>
                                    <Text>Nome completo</Text>
                                    <Input
                                        isInvalid={nameError}
                                        errorBorderColor="red.300"
                                        onChange={ ( event ) => {
                                            setName( event.target.value );
                                            setNameError(false);
                                        } }
                                    />
                                </Flex>
                            </label>

                            <label>
                                <Flex direction={ 'column' } gap={ '6px' }>
                                    <Text>E-mail</Text>
                                    <Input
                                        isInvalid={emailError}
                                        errorBorderColor="red.300"
                                        onChange={ ( event ) => {
                                            setEmail( event.target.value );
                                            setEmailError(false);
                                        } }
                                    />
                                </Flex>
                            </label>

                            <label>
                            <Flex direction={'column'} gap={'6px'}>
                                <Text>Telefone</Text>
                                <InputMask
                                    mask="(99) 99999-9999"
                                    value={phone}
                                    onChange={(event) => {
                                        setPhone(event.target.value);
                                        setPhoneError(false);
                                    }}
                                >
                                    {(inputProps: any) => (
                                        <Input
                                            {...inputProps}
                                            isInvalid={phoneError}
                                            errorBorderColor="red.300"
                                        />
                                    )}
                                </InputMask>
                            </Flex>
                            </label>

                            <Button
                                onClick={ () => submit() }
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

                    </Flex>
                </ModalContent>
            </Modal>
    );
}