import React, { useCallback, useState } from "react";
import { createUseStyles } from "react-jss";
import Play from "@mui/icons-material/PlayCircleOutlineRounded";
import { IconButton } from "@mui/material";
import theme from "../../../common/theme";
import HeroModal from "./HeroModal";

const useStyles = createUseStyles({
  container: {
    color: theme.colors.white,
    maxWidth: "700px",
    margin: "auto",
    textAlign: "center"
  },
  subtitle: {
    fontSize: theme.font.size.l
  },
  text: {
    fontSize: theme.font.size.m,
    lineHeight: theme.font.lineHeight.m,
    marginBottom: theme.spacing.xxl
  },
  iconButton: {
    color: theme.colors.white
  },
  playIcon: {
    width: 60,
    height: 60
  }
});

const Hero: React.FC = () => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => setIsModalOpen(!isModalOpen), [isModalOpen]);

  return (
    <div className={classes.container}>
      <h1>Vans Online Store</h1>
      <h2 className={classes.subtitle}>{`"Best shoes for skateboarding!"`}</h2>
      <p className={classes.text}>
        Vans is an American manufacturer of skateboarding shoes and related apparel, established in
        Anaheim, California, and owned by VF Corporation. The company also sponsors surf,
        snowboarding, BMX, and motocross teams.
      </p>
      <IconButton onClick={handleOpenModal} className={classes.iconButton}>
        <Play className={classes.playIcon} />
      </IconButton>
      <HeroModal isOpen={isModalOpen} onClose={handleOpenModal} />
    </div>
  );
};

export default Hero;
