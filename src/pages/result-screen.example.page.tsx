import { Badge, Box, Button, Flex, Grid, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Item {
    id: string,
    name: string,
    age: number
}

export function ResultScreenExamplePage() {
    const [ name, setName ] = useState<string>( '' );
    const [ email, setEmail ] = useState<string>( '' );
    const router = useNavigate();

    const [ items, setItems ] = useState<Item[]>( [] );

    const submit = () => {
        const data = {
            name,
            email,
            items
        }
    }

    const addItem = () => {
        const age = Math.random();

        const name = `${ age } - my name`;

        let id = Math.random() + Math.random();


        const exists: boolean = items.some( item => item.id === id.toString() );

        if ( exists ) id = Math.random() + Math.random();

        setItems( [ { name, age, id: id.toString() }, ...items ] );
    };

    const navigateByHome = () => {
        router( '/' );
    };
    return (
            <Box padding={ '20px' }>
                <Flex
                        alignItems={ 'center' }
                        justifyContent={ 'center' }
                        wrap={'wrap'}
                        gap={ '10' }
                        borderBottom={ '1px' }
                        padding={ '10' }
                >
                    { items.map( item => {
                        return (
                                <Button
                                        key={ item.id }
                                        color={ 'purple.700' }>
                                    { item.name }
                                </Button>
                        );
                    } ) }

                </Flex>
                <Grid
                        templateColumns="repeat(2, 1fr)"
                        gridGap={ '20px' }
                        padding={ '20px' }
                >
                    <Flex justifyContent={ 'flex-end' }>
                        <Box bg={ '#f13' } width={ '500px' } height={ '200' }>
                            GRAFICO
                        </Box>
                    </Flex>
                    <Flex flexDirection={ 'column' }>
                        <Box padding={ '10px' } borderBottom={ '1px' }>
                            <Flex justifyContent={ 'center' }>
                                <Text fontWeight={ 'bold' }>Resultado</Text>
                            </Flex>
                            <Flex justifyContent={ 'center' }>
                                <Text>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum.
                                </Text>
                            </Flex>
                        </Box>
                        <Box paddingTop={ '10px' }>
                            <Text fontWeight={ 'bold' }>
                                Obrigado
                                <Badge
                                        colorScheme={ 'green' }
                                        padding={ '10px' }
                                        borderRadius={ '20px' }
                                        marginX={ '5px' }
                                >
                                    { name }
                                </Badge> pela sua participacao!
                            </Text>
                        </Box>
                    </Flex>
                </Grid>
                <Flex
                        alignItems={ 'center' }
                        justifyContent={ 'center' }
                        padding={ '20px' }
                        border={ '1px' }
                        borderRadius={ '4px' }
                >
                    <Text fontWeight={ 'bold' }>Nivel de interesse:</Text>
                    <Flex alignItems={ 'center' } justifyContent={ 'space-around' }>
                        <Badge
                                colorScheme={ 'gray' }
                                padding={ '10px' }
                                borderRadius={ '20px' }
                                marginX={ '5px' }
                        > 0 a 3 Pontos - pequeno
                        </Badge>
                        <Badge
                                colorScheme={ 'red' }
                                padding={ '10px' }
                                borderRadius={ '20px' }
                                marginX={ '5px' }
                        > 0 a 3 Pontos - pequeno
                        </Badge>
                        <Badge
                                colorScheme={ 'purple' }
                                padding={ '10px' }
                                borderRadius={ '20px' }
                                marginX={ '5px' }
                        > 0 a 3 Pontos - pequeno
                        </Badge>
                        <Badge
                                colorScheme={ 'blue' }
                                padding={ '10px' }
                                borderRadius={ '20px' }
                                marginX={ '5px' }
                        > 0 a 3 Pontos - pequeno
                        </Badge>
                    </Flex>

                </Flex>
                <Flex justifyContent={ 'center' } padding={ '20px' }>
                    <Input
                            placeholder={ 'Adicione seu nome' }
                            onChange={ ( event ) => {
                                setName( event.target.value );
                            } }
                    ></Input>
                    <Button
                            colorScheme={ 'green' }
                            onClick={ () => addItem() }
                    >
                        <Text fontWeight={ 'bold' }>
                            Finalizar Teste!
                        </Text>
                    </Button>
                </Flex>
            </Box>
    );
}