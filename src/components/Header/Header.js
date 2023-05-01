import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Tooltip } from '@mui/material';
import Modal from '@mui/material/Modal';
import LangSwitch from 'components/langSwitch/langSwitch';
import { FaBookOpen, FaHome } from 'react-icons/fa';
import { CustomeLink } from 'components/CustomLink/CustomLink';
import s from './Header.module.css';

import { authOperations } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { useTranslation } from 'react-i18next';

import {
  StyledHeader,
  LogoLink,
  StyledNav,
  ExitButton,
  PrivateHeader,
} from './Header.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 280,
  bgcolor: 'background.paper',
  outline: 0,
};

export const Header = () => {
  const isLoggedIn = true;
  const isLoggedInName = 'Anna';
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const isLoggedInName = useSelector(authSelectors.getUsername);

  const [user, setUser] = useState(isLoggedInName);

  const { t, i18n } = useTranslation();
  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  const userLogo = user ? user[0] : 'U';
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleExit = () => {
    dispatch(authOperations.logOut());
    setOpen(false);
  };

  const [openInfo, setOpenInfo] = React.useState(false);
  const handleCloseInfo = () => setOpenInfo(false);

  useEffect(() => {
    //проверить массив книг
    if (isLoggedIn) {
      setOpenInfo(true);
    }
  }, [isLoggedIn]);

  const location = useLocation();
  const LINCK_ID = location.pathname;

  const [statistic, setStatistic] = useState(false);

  useEffect(() => {
    if (LINCK_ID === '/statistics') {
      setStatistic(false);
    } else {
      setStatistic(true);
    }
  }, [LINCK_ID]);

  return (
    <>
      <StyledHeader>
        <LogoLink to="/">BR</LogoLink>

        <LangSwitch onChangeLanguage={changeLanguage} />

        {isLoggedIn && (
          <PrivateHeader>
            <StyledNav>
              <CustomeLink to="/">{isLoggedIn && userLogo}</CustomeLink>
              <p className={s.user_name}>{isLoggedIn && user}</p>
            </StyledNav>

            {statistic && (
              <StyledNav>
                <CustomeLink icon={FaBookOpen} to="/" />
                <CustomeLink icon={FaHome} to="/training" />
                <ExitButton type="button" onClick={handleOpen}>
                  {'Вихід'}
                </ExitButton>
              </StyledNav>
            )}
          </PrivateHeader>
        )}
      </StyledHeader>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className={s.modal}>
            <p className={s.modal_text}>
              Якщо Ви вийдете з програми незбережені дані будуть втрачені
            </p>
            <div className={s.btn_modal}>
              <button type="button" onClick={handleClose}>
                Відміна
              </button>
              <button type="button" onClick={handleExit}>
                Вийти
              </button>
            </div>
          </Box>
        </Modal>
      </div>
      {/* <div>
        <Modal open={openInfo} onClose={handleCloseInfo}>
          <Box sx={style} className={s.modalInfo}>
            <InfoModal onClick={handleCloseInfo} />
          </Box>
        </Modal>
      </div> */}
    </>
  );
};
