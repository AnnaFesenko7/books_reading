import styled from 'styled-components';
import { Link } from 'react-router-dom';

// .main_wrapper {
//   background-color: #ffffff;
//   box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
// }

// .text_style {
//
//
//   font-weight: 300;
//   font-size: 14px;
//   line-height: 1.21;
//   color: #242a37;
// }
export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.whit};
  margin: 0;
  padding-top: 14px;
  padding-bottom: 13px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
`;

export const LogoLink = styled(Link)`
  text-align: center;
  color: ${p => p.theme.colors.secondaryText};
  font-family: 'Abril Fatface';
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.35;
`;

export const PrivateHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  font-weight: ${p => p.theme.fontWeights.light};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  cursor: pointer;
`;

export const ExitButton = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: ${p =>
    `${p.theme.borders.normal} ${p.theme.colors.secondaryText}`};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
  }
`;

// @media screen and (max-width: 480px) {
//   .link {
//     width: 25px;
//     height: 25px;
//   }
// }

// .link:hover {
//   background-color: #f5f7fa;
// }

// .active_link {
//   composes: link;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 33px;
//   height: 33px;
//   margin-right: 5px;
//   background-color: #f5f7fa;
//   border-radius: 50%;

//   background-color: #e0e5eb;

//   /* background-color: transparent; */
// }

// .line {
//   display: block;
//   width: 1px;
//   height: 33px;
//   background-color: #e0e5eb;
// }

// /* ** MODAL ** */

// .modal {
//   padding-bottom: 48px;
//   padding-top: 48px;
//   padding-left: 22px;
//   padding-right: 22px;
//   box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
// }

// .modal_text {
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 1.38;
//   text-align: center;
//   margin: 0 0 20px 0;
//   color: #242a37;
// }

// .btn_modal {
//   display: flex;
//   justify-content: space-evenly;
// }

// .btn_modal button {
//   display: block;
//   justify-content: space-evenly;
//   border-radius: 0%;
//   width: 98px;
//   height: 40px;
//   cursor: pointer;
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 1.21;
// }

// .btn_modal_cancel {
//   color: #242a37;
//   background-color: transparent;
//   border: 1px solid #242a37;
//   transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
// }

// .btn_modal_cancel:hover {
//   border: 1px solid #f25137;
// }

// .btn_modal_exit {
//   color: #ffffff;
//   background-color: #ff6b08;
//   border-color: transparent;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
//   transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
// }

// .btn_modal_exit:hover {
//   background-color: #d15807;
// }

// .btn_info:hover,
// .btn_info:focus {
//   color: #ffffff;
//   background-color: #ff6b08;
//   border: none;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
// }

// .modalInfo {
//   padding-top: 43px;
//   padding-left: 20px;
//   padding-right: 20px;
//   padding-bottom: 36px;
// }

// .btn_info {
//   display: block;
//   width: 127px;
//   height: 40px;
//   margin-left: auto;
//   margin-right: auto;
//   border-radius: 0%;
//   background-color: transparent;
// }
// .nav img {
//   display: block;
//   margin-right: 0;
// }

// /* ** MEDIA ** */

// @media screen and (min-width: 350px) {
//   .header {
//     width: 350px;
//   }

//   .header_l {
//     width: 350px;
//   }
// }

// @media screen and (min-width: 480px) {
//   .header {
//     width: 480px;
//   }
//   .header_l {
//     width: 480px;
//   }
// }

// @media screen and (min-width: 768px) {
//   .header {
//     width: 768px;
//     padding-top: 14px;
//     padding-bottom: 13px;
//     padding-left: 32px;
//     padding-right: 32px;
//   }
//   .header_l {
//     composes: header;
//   }

//   .button_mobile {
//     display: none;
//   }
//   .blok_user {
//     display: flex;
//     align-items: center;
//     width: 300px;
//   }
//
//   .user_name {
//     composes: text_style;
//     margin: 0;
//   }
// }

// @media screen and (min-width: 1280px) {
//   .header {
//     width: 1280px;
//     padding-left: 16px;
//     padding-right: 16px;
//   }
//   .header_l {
//     composes: header;
//   }
//   .blok_user {
//     width: 572px;
//   }
// }
