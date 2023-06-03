import { Box, Text } from '@chakra-ui/react'

export function Home() {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      height='100vh'
    >
      <Text
        fontSize={'28'}
      >this is main page</Text>
    </Box>
  )
}