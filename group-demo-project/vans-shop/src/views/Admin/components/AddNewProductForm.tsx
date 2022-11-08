import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "../../../common/components/TextInput";
import Button from "../../../common/components/Button";
import FileUploadInput from "../../../common/components/FileUploadInput";

interface IAddNewProductFormProps {
  onSubmit: (data: FieldValues) => void;
}

const AddNewProductForm: React.FC<IAddNewProductFormProps> = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    description: Yup.string().required("Description is required!"),
    price: Yup.number().typeError("Must be a number!").required("Price is required!"),
    size: Yup.number().typeError("Must be a number!").required("Size is required!")
  });

  const {
    handleSubmit,
    control,
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput name="name" label="Name" control={control} errors={errors} type="text" />
      <TextInput
        name="description"
        label="Description"
        control={control}
        errors={errors}
        multiline
        rows={4}
        type="text"
      />
      <TextInput name="price" label="Price" control={control} errors={errors} type="number" />
      <TextInput name="size" label="Size" control={control} errors={errors} type="number" />
      <FileUploadInput name="images" register={register} />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default AddNewProductForm;
