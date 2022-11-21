import { Center, Heading, HStack, Image, Link, Text} from 'native-base';
import { Input } from '../components/Input';

import SignInImg from '../assets/img.png'
import { Button } from '../components/Button';


// interface SignInProps {
//   navigation: ()=> void
// }


export function SignIn (){

  return(
    <Center flex={1} bg='gray.900'>
      <Heading size="xl" fontFamily="heading" color="white" >
          Welcome
        </Heading>
        <Heading mt="1" mb={2} color="white" fontFamily="body" size="xs">
          Sign in to continue!
        </Heading>
      <Center bg='gray.900' 
        borderWidth={1} 
        borderColor="fuchsia.600" 
        rounded={8}
        w={350}
        h={550}
      >
        <Image
        h={200}
        w={200}
        mb={5}
        source={SignInImg}
        alt="Sign In Image" 
        />
        <Input
        mb={10}
        placeholder='Email'/>
        <Input
        mb={10}
        placeholder='Password'/>
        <Button
          w={200}
          
          title='Sign In'
        />
        <HStack mt="6" justifyContent="center" fontSize="sm" color="white">
          <Text fontSize="md" color="white" mb={4}>I'm a new user.</Text>
          <Link
           _text={{
            color: "fuchsia.500",
            fontWeight: "medium",
            fontSize: "md"
          }}
          onPress={() => {}}
          >
            Sign Up
          </Link>
        </HStack>
      </Center>
    </Center>
  )
}