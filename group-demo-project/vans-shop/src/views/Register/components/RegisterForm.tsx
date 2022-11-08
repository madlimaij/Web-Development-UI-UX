import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../common/components/Button";
import TextInput from "../../../common/components/TextInput";

interface IRegisterFormProps {
  onSubmit: (data: FieldValues) => void;
}

const RegisterForm: React.FC<IRegisterFormProps> = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Firstname is required!"),
    lastName: Yup.string().required("Lastname is required!"),
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
      <TextInput name="firstName" label="Firstname" control={control} errors={errors} type="text" />
      <TextInput name="lastName" label="Lastname" control={control} errors={errors} type="text" />
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

export default RegisterForm;
