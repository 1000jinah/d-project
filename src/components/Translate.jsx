import * as React from "react";

import {
  Fade,
  MenuItem,
  Menu,
  IconButton,
  Icon,
  Typography,
} from "@mui/material";
// import { useEffect } from "react";
import TranslateLang from "../assets/world.svg";
import JapaneseIcon from "../assets/japanese.svg";
import EnglishIcon from "../assets/english.svg";
import { useTranslation } from "react-i18next";
const English = () => {
  const { t } = useTranslation("page");
  return <Typography ml="7px">{t("English")}</Typography>;
};
const Japanese = () => {
  const { t } = useTranslation("page");
  return <Typography ml="7px">{t("Japanese")}</Typography>;
};

export default function TranslateButton() {
  const { t, i18n } = useTranslation();
  const changelanguageToEn = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  };
  const changelanguageToJp = () => {
    i18n.changeLanguage("jp");
    localStorage.setItem("language", "jp");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img
          width="22px"
          height="22px"
          color="#fff"
          src={TranslateLang}
          alt={TranslateLang}
        />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            changelanguageToEn();
          }}
        >
          <Icon>
            <img
              width="19px"
              height="23px"
              pb="4px"
              src={EnglishIcon}
              alt={EnglishIcon}
            />
          </Icon>
          {/* English */}
          <English />
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            changelanguageToJp();
          }}
        >
          <Icon>
            <img
              width="19px"
              height="23px"
              pb="4px"
              src={JapaneseIcon}
              alt={JapaneseIcon}
            />
          </Icon>
          {/* Japanese */}
          <Japanese />
        </MenuItem>
      </Menu>
    </div>
  );
}
