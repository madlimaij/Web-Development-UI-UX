import React from "react";

type SubmitFormProps = {
   children: React.ReactNode,
   handleSubmit: React.FormEventHandler<HTMLFormElement>
}

const SubmitForm: React.FC<SubmitFormProps> = ({ children, handleSubmit }) => {
    return <form onSubmit={handleSubmit}>{children}</form>
}

export default SubmitForm;