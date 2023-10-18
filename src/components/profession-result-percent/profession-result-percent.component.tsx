import { Flex, Image, Text } from '@chakra-ui/react';

export function ProfessionResultPercentComponent ({iconUrl, percentage, label}: PercentageProps){
    return (
            <Flex
                    direction={'column'}
                    gap={'10px'}
                    justifyContent={'end'}
                    alignItems={'center'}
                    position={'relative'}
            >
                <Flex
                        height={'200px'}
                        width={'50px'}
                        background={'#F0F0F0'}
                        borderRadius={'5px'}
                >
                    <Flex
                            background={'linear-gradient(268.31deg, #FF675C 2.54%, #FD3078 97.92%)'}
                            justifyContent={'center'}
                            fontWeight={'bold'}
                            padding={'10px'}
                            marginTop={'auto'}
                            borderRadius={'5px'}
                            height={`${percentage}%`}
                            width={'100%'}
                    >
                    </Flex>
                </Flex>
                <Text
                        position={'absolute'}
                        color={percentage <= 26 ? '#fff' : '#000' }
                        bottom={'100px'}
                        fontWeight={'bold'}
                >{percentage}%</Text>
                <Image src={iconUrl} width={'40px'}/>
                <Text>{label}</Text>
            </Flex>
    )
}

interface PercentageProps {
    percentage: number;
    label: string;
    iconUrl: string;
}