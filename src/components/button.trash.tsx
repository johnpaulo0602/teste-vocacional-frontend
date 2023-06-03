import { Box, Text } from '@chakra-ui/react'

/**
 * Dont use this component is only to create page to commit
 * @deprecated
 */
export function TrashButton() {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      height='100vh'
    >
      <Text
        fontSize={'28'}
      >Dont use this component</Text>
    </Box>
  )
}