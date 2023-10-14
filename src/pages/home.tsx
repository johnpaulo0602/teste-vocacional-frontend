import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { ProfessionCardComponent } from '../components/profession-card/profession-card.component';
import { RegisterUserModalComponent } from '../components/register-user-modal/register-user-modal.component';

export function Home() {
  return (
    <Flex
            flexDirection={'column'}
      height='100vh'
    >
        <Flex>
            <Flex direction={'column'} justifyContent={'center'} gap={'15px'}>
                <Image src={'src/assets/icons/logo-icon.svg'} maxWidth={'360px'}/>
                <Text fontSize={'30px'} fontWeight={'bold'} margin={0} padding={0}>
                    De match com a carreira
                    <br/> dos seus sonhos!
                </Text>
                <Text>
                    Escolher a profissao certa nunca foi tao facil e divertido. Faca nosso teste vocacional
                    gratis e deixe a paixao pelos estudos te guiar na direcao de um futuro promissor.
                    Descubra as opcoes que a Unidesc oferece para voce brilhar no mercado de trabalho
                </Text>

                <Button background={'linear-gradient(268.31deg, #FF675C 2.54%, #FD3078 97.92%)'}>
                    Comecar o teste Agora!
                </Button>
            </Flex>
            <Image src={'src/assets/images/estudante-home.svg'} maxHeight={'600px'}/>
        </Flex>

        <Flex direction={'column'} gap={'30px'}>
            <Text textAlign={'center'} fontSize={'30px'} fontWeight={'bold'}>
                Conheca as areas que combinam com voce!
            </Text>
            <Text textAlign={'center'} paddingX={'20px'}>
                Encontre o caminho que mais combina com voce! conheca as cinco areas disponiveis
                para o teste vocacional e descrubra onde suas habilidades e paixoes se encaixam
                melhor.
            </Text>

            <Flex flexWrap={'wrap'} gap={'60px'} justifyContent={'center'}>
                <ProfessionCardComponent title={'Tecnologicas'} imgUrl={'src/assets/icons/thecnology-icon.svg'}/>
                <ProfessionCardComponent title={'Biologas'} imgUrl={'src/assets/icons/biology-icon.svg'}/>
                <ProfessionCardComponent title={'Humanas'} imgUrl={'src/assets/icons/human-icon.svg'}/>
                <ProfessionCardComponent title={'Comunicacao'} imgUrl={'src/assets/icons/comunication.svg'}/>
                <ProfessionCardComponent title={'Artes'} imgUrl={'src/assets/icons/arts-icon.svg'}/>
            </Flex>

            <Flex alignItems={'center'} justifyContent={'center'}>
                <Button>Fazer teste agora!</Button>
            </Flex>
        </Flex>
        <RegisterUserModalComponent/>
    </Flex>
  )
}