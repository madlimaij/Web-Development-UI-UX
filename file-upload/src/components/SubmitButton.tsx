import React from "react";

type SubmitButtonProps = {
    title: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ title }) => {
    return <button type="submit">{title}</button>
}

export default SubmitButton;