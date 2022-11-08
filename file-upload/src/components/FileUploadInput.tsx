import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { createUseStyles } from "react-jss";
import theme from "../common/theme";

const useStyles = createUseStyles({
    container: {
        position: "relative",
        display: "flex",
        gap: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 200,
        padding: theme.spacing.l,
        borderRadius: 10,
        border: [2, "dashed", theme.colors.grey],
        color: theme.colors.darkGrey,
        cursor: "pointer",
        transition: theme.transition.hover,
        marginBottom: theme.spacing.m,
        "&:hover": {
          background: theme.colors.lightGrey,
          borderColor: theme.colors.blue
        }
    },
    uploadInput: {
        width: 350,
        maxWidth: "100%",
        color: theme.colors.darkGrey,
        padding: theme.spacing.xs,
        background: theme.colors.white,
        borderRadius: 10,
        border: [1, "solid", theme.colors.grey],
        "&::file-selector-button": {
            marginRight: theme.spacing.l,
            background: "#084cdf",
            border: "none",
            padding: [10, 20],
            color: theme.colors.white,
            borderRadius: 10,
            cursor: "pointer",
            transition: "background .2s ease-in-out",
            "&:hover": {
                background: "#0d45a5"
            }
        }
    },
    title: {
        color: theme.colors.darkGrey,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        transition: "color .2s ease-in-out"
    }
});

type FileUploadInputProps = {
    name: string;
    register: UseFormRegister<FieldValues>
};

const FileUploadInput: React.FC<FileUploadInputProps> = ({ name, register }) => {
    const classes = useStyles();

    return (
        <label htmlFor={name} className={classes.container}>
            <span className={classes.title}>Choose an image:</span>
            <input
                className={classes.uploadInput}
                type="file"
                id={name}
                accept="image/*"
                {...register(name)}
            />
        </label>
    );
}

export default FileUploadInput;