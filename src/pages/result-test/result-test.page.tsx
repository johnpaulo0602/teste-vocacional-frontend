import { Button, Flex, Image, Text } from '@chakra-ui/react';
import {
    ProfessionResultPercentComponent
} from '../../components/profession-result-percent/profession-result-percent.component';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../services/api-axios.service';
import { AppResponse, ListResponse } from '../../interface/requests.inteface';
import { ParticipantSession } from '../../interface/user.interface';
import { ResponseFinal } from '../../interface/response.interface';
import { Group } from '../../interface/question.interface';
import { CareerMock } from '../../mock/career.mock';
import { useNavigate } from 'react-router-dom';

export function ResultTestPage() {
    const [ technologyNote, setTechnologyNote ] = useState<number>( 0 );
    const [ biologicalNote, setBiologicalNote ] = useState<number>( 0 );
    const [ humanNote, setHumanNote ] = useState<number>( 0 );
    const [ communicationNote, setCommunicationNote ] = useState<number>( 0 );
    const [ artNote, setArtNote ] = useState<number>( 0 );

    const navigate = useNavigate();

    const [ firstBiggestNoteKey, setFirstBiggestNoteKey ] = useState<string>( Group.GROUP_I );
    const [ secondBiggestNoteKey, setSecondBiggestNoteKey ] = useState<string>( Group.GROUP_I );

    useEffect( () => {
        const participant = getParticipant();

        axiosInstance.get<AppResponse<ListResponse<ResponseFinal>>>( `/response-question/responses/session/${ participant.sessionHash || '' }/final-result` )
                .then( ( axiosResponse ) => {
                    const { success: { response: { items: [ response ] } } } = axiosResponse.data as AppResponse<ListResponse<ResponseFinal>>;

                    setTechnologyNote( calculatePercentage( response[ Group.GROUP_I ].counterResponse ) );
                    setHumanNote( calculatePercentage( response[ Group.GROUP_II ].counterResponse ) );
                    setBiologicalNote( calculatePercentage( response[ Group.GROUP_III ].counterResponse ) );
                    setCommunicationNote( calculatePercentage( response[ Group.GROUP_IV ].counterResponse ) );
                    setArtNote( calculatePercentage( response[ Group.GROUP_V ].counterResponse ) );

                    getTwoBiggestNotes( response );
                } ).catch( ( error ) => {
            throw new Error( error.message );
        } );
    }, [] );

    const getTwoBiggestNotes = ( response: ResponseFinal ) => {
        // Convert the object values to an array of objects
        const dataArray = Object.entries( response ).map( ( [ key, value ] ) => ( { key, value } ) );

        // Sort the array by counterResponse in descending order
        dataArray.sort( ( a, b ) => b.value.counterResponse - a.value.counterResponse );

        // Get the two largest values
        const [ firstLargest, secondLargest ] = dataArray.slice( 0, 2 );

        setFirstBiggestNoteKey( firstLargest.key );
        setSecondBiggestNoteKey( secondLargest.key );
    };

    const getParticipant = (): ParticipantSession => {
        const participant = localStorage.getItem( 'participant' );

        return JSON.parse( participant );
    };

    const calculatePercentage = ( value: number ): number => {
        if ( value >= 0 && value <= 3 ) return 25;
        if ( value >= 4 && value <= 6 ) return 50;
        if ( value >= 7 && value <= 9 ) return 75;
        if ( value >= 10 && value <= 12 ) return 100;
    };

    const goToHome = () => {
        navigate('/');

        localStorage.removeItem('participant')
    }

    return (
            <Flex direction={ 'column' } gap={ '30px' } height={ '100vh' }>
                <Flex direction={ 'column' } alignItems={ 'center' }>
                    <Text fontSize={ '24px' } fontWeight={ 'bold' } textAlign={ 'center' }>
                        Deu Match! seu perfil é o “{ CareerMock[firstBiggestNoteKey].title || ''}”
                    </Text>
                    <Text textAlign={ 'center' }>
                        { CareerMock[firstBiggestNoteKey].description || ''}
                    </Text>
                </Flex>
                <Flex justifyContent={ 'center' } justifyItems={ 'center' } alignItems={ 'center' }>
                    <Image src={ 'src/assets/images/trofeu-result.svg' }/>
                    {/*<Flex>*/ }
                    {/*    <List display={ 'flex' } flexDirection={ 'column' } gap={ '15px' }>*/ }
                    {/*        <ListItem display={ 'flex' } gap={ '10px' } alignItems={ 'center' }>*/ }
                    {/*            <Image src={ 'src/assets/icons/confirm-icon.svg' }/>*/ }
                    {/*            Curiosidade e entusiasmo por descobrir soluções tecnológicas.*/ }
                    {/*        </ListItem>*/ }
                    {/*        <ListItem display={ 'flex' } gap={ '10px' } alignItems={ 'center' }>*/ }
                    {/*            <Image src={ 'src/assets/icons/confirm-icon.svg' }/>*/ }
                    {/*            Valorização da lógica e pensamento analítico.*/ }
                    {/*        </ListItem>*/ }
                    {/*        <ListItem display={ 'flex' } gap={ '10px' } alignItems={ 'center' }>*/ }
                    {/*            <Image src={ 'src/assets/icons/confirm-icon.svg' }/>*/ }
                    {/*            Capacidade de resolver desafios tecnológicos com eficiência.*/ }
                    {/*        </ListItem>*/ }
                    {/*        <ListItem display={ 'flex' } gap={ '10px' } alignItems={ 'center' }>*/ }
                    {/*            <Image src={ 'src/assets/icons/confirm-icon.svg' }/>*/ }
                    {/*            Vontade de experimentar e aprender continuamente em tecnologia.*/ }
                    {/*        </ListItem>*/ }
                    {/*    </List>*/ }
                    {/*</Flex>*/ }
                </Flex>

                <Flex direction={ 'column' } gap={ '15px' } width={ '100%' }>
                    <Text fontSize={ '24px' } fontWeight={ 'bold' }>Confira o resultado do seu teste!</Text>

                    <Flex alignItems={ 'center' } justifyContent={ 'space-between' }>
                        <Flex gap={ '15px' } boxShadow={ '2xl' } paddingY={ '50px' } paddingX={ '20px' }
                              borderRadius={ '5px' }>
                            <ProfessionResultPercentComponent
                                    percentage={ technologyNote }
                                    iconUrl={ 'src/assets/icons/thecnology-icon.svg' }
                                    label={ 'Tecnologia' }
                            /><ProfessionResultPercentComponent
                                percentage={ biologicalNote }
                                iconUrl={ 'src/assets/icons/biology-icon.svg' }
                                label={ 'Biologicas' }
                        /><ProfessionResultPercentComponent
                                percentage={ humanNote }
                                iconUrl={ 'src/assets/icons/human-icon.svg' }
                                label={ 'Humanas' }
                        /><ProfessionResultPercentComponent
                                percentage={ communicationNote }
                                iconUrl={ 'src/assets/icons/comunication.svg' }
                                label={ 'Comunicação' }
                        /><ProfessionResultPercentComponent
                                percentage={ artNote }
                                iconUrl={ 'src/assets/icons/arts-icon.svg' }
                                label={ 'Artes' }
                        />

                        </Flex>
                        <Image src={ 'src/assets/images/pencil-rocket.svg' }/>
                    </Flex>
                </Flex>

                <Flex direction={ 'column' } fontWeight={ 'bold' } gap={ '50px' }>
                    <Text fontSize={ '24px' }>Veja os cursos que dão match com você!</Text>
                    <Flex>
                        <Image src={ 'src/assets/images/certificate.svg' }/>
                        <Flex gap={ '40px' }>
                            <Flex
                                    direction={ 'column' }
                                    gap={ '20px' }
                                    boxShadow={ 'lg' }
                                    background={ '#fff' }
                                    borderRadius={ '8px' }
                                    padding={ '10px' }
                            >
                                <Text fontSize={ '28px' }>
                                    { CareerMock[firstBiggestNoteKey].title || ''}
                                </Text>
                                <Text fontWeight={ 'light' }>
                                    { CareerMock[firstBiggestNoteKey].description || '' }
                                </Text>
                                {/*<Button marginTop={'auto'}> Saiba mais</Button>*/ }
                            </Flex>

                            <Flex
                                    direction={ 'column' }
                                    gap={ '20px' }
                                    boxShadow={ 'lg' }
                                    background={ '#fff' }
                                    borderRadius={ '8px' }
                                    padding={ '10px' }
                            >
                                <Text fontSize={ '28px' }>
                                    { CareerMock[secondBiggestNoteKey].title || ''}
                                </Text>
                                <Text fontWeight={ 'light' }>
                                    { CareerMock[secondBiggestNoteKey].description || '' }
                                </Text>
                                {/*<Button marginTop={'auto'}> Saiba mais</Button>*/ }
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex justifyContent={ 'center' } padding={ '35px' } width={ '100%' }>
                    <Button onClick={() => goToHome()}>Fazer o teste novamente!</Button>
                </Flex>
            </Flex>
    );
}