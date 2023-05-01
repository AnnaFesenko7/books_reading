import React, { Component } from 'react';
import { FaBookOpen, FaFlag, FaHome } from 'react-icons/fa';
import { InfoItem } from './InfoItem';
import { StyledButton } from 'components/StyledButton/StyledButton.styled';
import { Wrapper } from './Info.styled';

const modalContent = [
  {
    step: 1,
    icon: FaBookOpen,
    title: 'Створіть особисту бібліотеку',
    text: 'Додайте до неї книжки, які маєте намір прочитати.',
  },
  {
    step: 2,
    icon: FaFlag,
    title: 'Сформуйте своє перше тренування',
    text: 'Визначте ціль, оберіть період, розпочинайте тренування.',
  },
];

export const Info = ({ onClick }) => {
  return (
    <Wrapper>
      {modalContent.map((item, index) => (
        <li key={index}>
          <InfoItem item={item} />
        </li>
      ))}
      <StyledButton type="button" onClick={onClick}>
        OK
      </StyledButton>
    </Wrapper>
  );
};
