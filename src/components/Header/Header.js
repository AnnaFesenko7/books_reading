import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Box, Tooltip } from '@mui/material';
import Modal from '@mui/material/Modal';
import LangSwitch from 'components/langSwitch/langSwitch';
import { StyledHeader } from './Header.styled';
// import icons from './exit.svg';
import s from './Header.module.css';
import home from '../../img/icon_home.svg';
import library from '../../img/icon_library.svg';
import { authOperations } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { useTranslation } from 'react-i18next';
import { InfoModal } from 'components/InfoModal/InfoModal';
import { StyledButton } from 'components/StyledButton/StyledButton.styled';
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
      {/* кнопки не удалял, чтобы можно было на формулы посмотреть
      
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ua')}>UA</button>
      <div> {t('text')} </div> */}
      <StyledHeader>
        <Link to="/" className={s.logo}>
          BR
        </Link>

        <LangSwitch onChangeLanguage={changeLanguage} />

        {isLoggedIn && (
          <div className={s.blok}>
            <div className={s.blok_user}>
              <button className={s.btn_desktop} type="button">
                {isLoggedIn && userLogo}
              </button>
              <p className={s.user_name}>{isLoggedIn && user}</p>
            </div>

            {statistic && (
              <nav className={s.nav}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? s.active_link : s.link
                  }
                  to="/"
                >
                  <img src={library} alt="library" />
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? s.active_link : s.link
                  }
                  to="/training"
                >
                  <img src={home} alt="home" />
                </NavLink>
              </nav>
            )}
            <div className={s.line}></div>

            <button className={s.button_mobile} type="button">
              {userLogo}
            </button>
            <button
              className={s.button_exit}
              type="button"
              onClick={handleOpen}
            >
              Вихід
            </button>
          </div>
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
      <div>
        <Modal open={openInfo} onClose={handleCloseInfo}>
          <Box sx={style} className={s.modalInfo}>
            <InfoModal />
            <StyledButton type="button" onClick={handleCloseInfo}>
              OK
            </StyledButton>
          </Box>
        </Modal>
      </div>
    </>
  );
};
