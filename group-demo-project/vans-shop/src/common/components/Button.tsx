import { styled } from "@mui/material";
import MuiButton from "@mui/material/Button";
import theme from "../theme";

const Button = styled(MuiButton)(() => ({
  backgroundColor: theme.colors.darkGray,
  "&:hover": {
    backgroundColor: theme.colors.darkGrayOpacity
  }
}));

export default Button;
