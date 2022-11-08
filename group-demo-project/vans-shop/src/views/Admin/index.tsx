import { Grid, IconButton } from "@mui/material";
import React, { useCallback } from "react";
import { FieldValues } from "react-hook-form";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosRounded";
import { FileUploadApi, ProductsApi } from "../../api";
import { BACKEND_BASE_PATH } from "../../api/endPoints";
import NavigationPath from "../../common/routes/navigation-path";
import theme from "../../common/theme";
import { IProductRequest } from "../../models/Product";
import AddNewProductForm from "./components/AddNewProductForm";

const useStyles = createUseStyles({
  container: {
    marginTop: theme.spacing.xl
  },
  title: {
    marginLeft: theme.spacing.s,
    margin: 0
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing.l,
    paddingBottom: theme.spacing.m,
    borderBottom: [1, "solid", theme.colors.mediumGray]
  }
});

const Admin: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const navigateToDashboard = useCallback(() => navigate(NavigationPath.Dashboard), [navigate]);

  const onSubmit = async (formValues: FieldValues) => {
    try {
      const formData = new FormData();
      formData.append("file", formValues.images[0]);

      const fileUploadResponse = await FileUploadApi.uploadFile(formData);
      if (fileUploadResponse?.data && fileUploadResponse.status === 200) {
        const { fileName } = fileUploadResponse.data;

        const newProduct: IProductRequest = {
          name: formValues.name,
          description: formValues.description,
          price: formValues.price,
          size: formValues.size,
          imageUrl: `${BACKEND_BASE_PATH}/images/${fileName}`
        };

        const response = await ProductsApi.addNewProduct(newProduct);

        if (response?.status === 201) {
          navigate(NavigationPath.Dashboard);
        }
      }
    } catch {
      throw new Error("Unable to add new product");
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <IconButton onClick={navigateToDashboard}>
          <ArrowBackIcon />
        </IconButton>
        <h3 className={classes.title}>Admin</h3>
      </div>
      <Grid container spacing={2}>
        <Grid item lg={7}>
          <h3>Add new product</h3>
          <AddNewProductForm onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;
