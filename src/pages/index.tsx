import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SingnInFormData = {
  email: string;
  password: string;
};
const SingnInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail invalído"),
  password: yup.string().required("Senha obrigatório"),
});

export default function SingIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SingnInFormSchema),
  });

  const formErros = formState.errors;

  const handleSingIn: SubmitHandler<SingnInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        direction="column"
        onSubmit={handleSubmit(handleSingIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={formErros.email}
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            error={formErros.password}
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
