import { Flex, Image, Text } from '@chakra-ui/react';

export function ProfessionCardComponent (props: ProfessionCardProps){
    return (
            <Flex
                    direction={'column'}
                    gap={'24px'}
                    alignItems={'center'}
                    paddingX={'75px'}
                    paddingY={'32px'}
                    width={'224px'}
                    borderRadius={'16px'}
                    background={'#FFF'}
                    boxShadow={'0px 8px 24px 0px rgba(149, 157, 165, 0.24)'}
                    transition={'transform 0.2s, box-shadow 0.2s'}
                    cursor={'pointer'}
                    _hover={{
                        transform: 'scale(1.05)',
                        boxShadow: '0px 12px 28px 0px rgba(149, 157, 165, 0.4)'
                    }}
            >
                <Image width={'92px'} src={props.imgUrl}/>
                <Text fontWeight={'bold'}>{props.title}</Text>
            </Flex>
    )
}
interface ProfessionCardProps {
    title: string;
    imgUrl: string;
}