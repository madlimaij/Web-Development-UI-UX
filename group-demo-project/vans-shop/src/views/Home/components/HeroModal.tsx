import React from "react";
import { createUseStyles } from "react-jss";
import { Box, IconButton, Modal } from "@mui/material";
import ReactPlayer from "react-player";
import Close from "@mui/icons-material/Close";
import theme from "../../../common/theme";

const useStyles = createUseStyles({
  closeButton: {
    position: "absolute",
    top: -20,
    right: -20,
    backgroundColor: theme.colors.white,
    "&:hover": {
      backgroundColor: theme.colors.white
    }
  }
});

const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  p: 2
};

interface IHeroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HeroModal: React.FC<IHeroModalProps> = ({ isOpen, onClose }) => {
  const classes = useStyles();

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalStyles}>
        <IconButton className={classes.closeButton} onClick={onClose}>
          <Close />
        </IconButton>
        <ReactPlayer url="https://www.youtube.com/watch?v=A-xxdtZcXeE" muted playing />
      </Box>
    </Modal>
  );
};

export default HeroModal;
