import React, { Component } from 'react';
import { FaBookOpen, FaFlag, FaHome } from 'react-icons/fa';
import { InfoModalItem } from './InfoModalItem';
import { Wrapper } from './InfoModule.styled';

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

export const InfoModal = () => {
  return (
    <Wrapper>
      {modalContent.map((item, index) => (
        <li key={index}>
          <InfoModalItem item={item} />
        </li>
      ))}
    </Wrapper>
  );
};
