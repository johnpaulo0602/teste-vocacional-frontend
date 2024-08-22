import { Flex } from '@chakra-ui/react';
import { QuestionCardComponent } from '../../components/question-card/question-card.component';
import { useEffect, useState } from 'react';
import { Group, Question, TypeResponse } from '../../interface/question.interface';
import { axiosInstance } from '../../services/api-axios.service';
import { AppResponse, ListResponse } from '../../interface/requests.inteface';
import { ResponseQuestions } from '../../interface/response.interface';
import { ParticipantSession } from '../../interface/user.interface';
import { useNavigate } from 'react-router-dom';

export function QuestionsPage() {
    const navigate = useNavigate();

    const [ questions, setQuestions ] = useState<Question[]>( [] );
    const [ group, setGroup ] = useState<Group>( Group.GROUP_I );
    const [ numberGroup, setNumberGroup ] = useState<number>( 1 );
    const [ counterGroup, setCounterGroup ] = useState<number>( 1 );
    const [ questionA, setQuestionA ] = useState<Question>();
    const [ questionB, setQuestionB ] = useState<Question>();

    const [ canResponse, setCanResponse ] = useState<boolean>( false );

    useEffect( () => {
        loadQuestions();
    }, [ group ] );

    useEffect( () => {
        readyQuestion();
    }, [ questions ] );

    useEffect( () => {
        readyQuestion()
    }, [numberGroup] );

    const loadQuestions = () => {
        axiosInstance.get( `/questions/${ group }` )
                .then( axiosResponse => {
                    const { success: { response: { items } } } = axiosResponse.data as AppResponse<ListResponse<Question>>;

                    setQuestions( items );

                    readyQuestion();
                } )
                .catch( error => {
                    throw new Error( error.message );
                } );
    };

    const sendResponse = ( question?: Question ) => {
        let response: Omit<ResponseQuestions, '_id'>;

        const participant = getParticipant();

        if ( !question ) {
            response = {
                group,
                questionGroup: numberGroup,
                response: TypeResponse.WITHOUT_RESPONSE,
                sessionHash: participant.sessionHash
            };
        } else {
            response = {
                group: question.group,
                questionGroup: question.questionGroup,
                response: question.questionGroupOption === 'a' ? TypeResponse.A : TypeResponse.B,
                sessionHash: participant.sessionHash
            };
        }

        loadNextQuestion();

        axiosInstance.post( '/response-question/register', response ).then( () => {
            loadNextQuestion();
        } ).catch( error => {
            throw new Error( error.message );
        } );
    };

    const getParticipant = (): ParticipantSession => {
        const participant = localStorage.getItem( 'participant' ) || ''

        return JSON.parse( participant );
    };

    const loadNextQuestion = () => {
        incrementNumberGroup()
    };

    const incrementNumberGroup = () => {
        if ( numberGroup <= 11 ) {
            setNumberGroup( numberGroup + 1 );
        } else {
            setNumberGroup( 1 );
            changeGroup();
        }
    };

    const readyQuestion = () => {
        const filteredQuestions = questions
                .filter( question => question.questionGroup === numberGroup );

        setQuestionA( filteredQuestions[ 0 ] );
        setQuestionB( filteredQuestions[ 1 ] );
    };

    const changeGroup = () => {
        switch ( group ) {
            case Group.GROUP_I:
                setGroup( Group.GROUP_II );
                setCounterGroup( 2 );
                break;
            case Group.GROUP_II:
                setGroup( Group.GROUP_III );
                setCounterGroup( 3 );
                break;
            case Group.GROUP_III:
                setGroup( Group.GROUP_IV );
                setCounterGroup( 4 );
                break;
            case Group.GROUP_IV:
                setGroup( Group.GROUP_V );
                setCounterGroup( 5 );
                break;
            case Group.GROUP_V:
                navigate( '/result' );
                break;
        }
    };

    return (
        <Flex
            position="absolute" // Altera a posição para absoluta
            top="50%"           // Coloca o contêiner 50% a partir do topo
            left="50%"          // Coloca o contêiner 50% a partir da esquerda
            transform="translate(-50%, -50%)" // Move o contêiner para que fique centralizado
            width="720px"       // Mantém a largura fixa
            height="400px"      // Mantém a altura fixa
        >
            <QuestionCardComponent
                questionA={ questionA }
                questionB={ questionB }
                counterGroup={ counterGroup }
                sendResponse={ sendResponse }
            />
        </Flex>
    );
}