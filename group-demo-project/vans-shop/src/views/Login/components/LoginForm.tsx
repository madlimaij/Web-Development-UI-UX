import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../common/components/Button";
import TextInput from "../../../common/components/TextInput";

interface ILoginFormProps {
  onSubmit: (data: FieldValues) => void;
}

const LoginForm: React.FC<ILoginFormProps> = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required!").email("Invalid email!"),
    password: Yup.string().required("Password is required!")
  });

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput name="email" label="E-mail" control={control} errors={errors} type="text" />
      <TextInput
        name="password"
        label="Password"
        control={control}
        errors={errors}
        type="password"
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
