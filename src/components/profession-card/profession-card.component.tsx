import { Flex, Image, Text } from '@chakra-ui/react';

export function ProfessionCardComponent (props: ProfessionCardProps){
    return (
            <Flex
                    direction={'column'}
                    gap={'15px'}
                    alignItems={'center'}
                    boxShadow={'lg'}
                    paddingX={'75px'}
                    paddingY={'40px'}
                    borderRadius={'6px'}
            >
                <Image src={props.imgUrl}/>
                <Text fontWeight={'bold'}>{props.title}</Text>
            </Flex>
    )
}

interface ProfessionCardProps {
    title: string;
    imgUrl: string;
}