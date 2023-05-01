import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Modal, Box } from '@mui/material';
import { StyledContainer, boxStyle, StyledBox } from './Layout.styled';
import { Header } from 'components/Header/Header';
import { Info } from 'components/Info/Info';
// import { authOperations } from '../../redux/auth';
// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors } from '../../redux/auth';
import s from 'components/Header/Header.module.css';

// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors } from '../../redux/auth';

// const userLogo = user ? user[0] : 'U';
// const dispatch = useDispatch();

// const [open, setOpen] = React.useState(false);
// const handleOpen = () => setOpen(true);
// const handleClose = () => setOpen(false);

// const handleExit = () => {
//   dispatch(authOperations.logOut());
//   setOpen(false);
// };

export const Layout = () => {
  const isLoggedIn = true;
  const isLoggedInName = 'Anna';

  const [openInfo, setOpenInfo] = useState(false);
  const handleCloseInfo = () => setOpenInfo(false);

  useEffect(() => {
    if (isLoggedIn) {
      setOpenInfo(true);
    }
  }, [isLoggedIn]);
  return (
    <StyledContainer>
      <Header isLoggedIn={isLoggedIn} />
      <Outlet />
      {/* <div>
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
      </div> */}

      <Modal open={openInfo} onClose={handleCloseInfo}>
        <Box sx={boxStyle}>
          <Info onClick={handleCloseInfo} />
        </Box>
      </Modal>
    </StyledContainer>
  );
};
