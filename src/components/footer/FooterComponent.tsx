import { Flex, Link, Text } from '@chakra-ui/react';

export function FooterComponent() {
    return (
        <>
            <Flex maxWidth={'1140px'} margin={'auto'} width={'100%'} justifyContent={'space-between'}>
                <Text color="#000" fontSize="16px" fontFamily="Poppins" fontWeight="400">
                    © 2023 Teste Vocacional Unidesc. Todos os direitos reservados.
                </Text>
                <Flex gap={'24px'}>
                    <Link
                        href="/politica-de-privacidade"
                        color="#000"
                        fontSize="16px"
                        fontFamily="Poppins"
                        fontWeight="400"
                        _hover={{
                            background: 'linear-gradient(268deg, #FF675C 2.54%, #FD3078 97.92%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Política de Privacidade
                    </Link>
                    <Link
                        href="/termos-de-uso"
                        color="#000"
                        fontSize="16px"
                        fontFamily="Poppins"
                        fontWeight="400"
                        _hover={{
                            background: 'linear-gradient(268deg, #FF675C 2.54%, #FD3078 97.92%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Termos de uso
                    </Link>
                </Flex>
            </Flex>
        </>
    );
}
