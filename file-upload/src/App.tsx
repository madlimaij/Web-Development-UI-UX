import React from 'react';
import { useForm, FieldValues } from "react-hook-form";
import { Button } from "@mui/material";
import { uploadFile } from './api/controller/uploadFileController';
import './App.css';
import FileUploadInput from './components/FileUploadInput';
import Header from './components/Header';
import SubmitButton from './components/SubmitButton';
import SubmitForm from './components/SubmitForm';

const App: React.FC = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = async (formValues: FieldValues) => {
    const formData = new FormData();
    formData.append("file", formValues.images[0]);
    const result = await uploadFile(formData);

    console.log("result from onSubmit", result);
  }

  return (
    <div className="App">
      <Header title="File upload demo" />
      <SubmitForm handleSubmit={handleSubmit(onSubmit)}>
        <FileUploadInput name="images" register={register} />
        <SubmitButton title="Vajuta siia" />
      </SubmitForm>
      <div>
        <h2>MUI demo</h2>
        <Button variant="text" onClick={() => alert("Hello")}>Material UI button</Button>
      </div>
    </div>
  );
}

export default App;
