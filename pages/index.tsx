import {Button, Flex, Heading, Input, useColorMode, useColorModeValue} from '@chakra-ui/react'

const Home = () => {
const {toggleColorMode} = useColorMode()
const formBackground = useColorModeValue("gray.100", "gray.700")

return(
  <Flex height="100vh" align="center" justify="center">
    <Flex direction="column" bg={formBackground} p={12} rounded={6}>
      <Heading mb={6}>Log in</Heading>
      <Input placeholder="lazar@chakra-ui.com" variant="filled" mb={3} type="email" />
      <Input placeholder="*********" variant="filled" mb={6} type="password" />
      <Button mb={6} colorScheme="teal">Log in</Button>
      <Button onClick={toggleColorMode} >Toggle Color Mode</Button>
    </Flex>

  </Flex>
)

  
}

export default Home
