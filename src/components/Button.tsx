import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

interface Props extends IButtonProps {
  title: string;
}

export function Button({ title,  ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      rounded="sm"
      fontSize="md"
      bg="fuchsia.700"
      _pressed={{
        bg: "fuchsia.400"
      }}
      _loading={{
        _spinner: { color: "white" }
      }}
      {...rest}
    >
      <Text
        fontSize="sm"
        textAlign="center"
        fontFamily="heading"
        color="white"
      >
        {title}
      </Text>
    </ButtonNativeBase >
  );
}