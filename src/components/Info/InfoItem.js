import { Step, StepTitle, StyledText } from './Info.styled';
import { FiCornerDownRight } from 'react-icons/fi';

export const InfoItem = ({ item }) => {
  const { step, icon: Icon, title, text } = item;
  return (
    <>
      <Step>{`Крок ${step}`}</Step>
      <StepTitle>
        <Icon size="24" />
        {title}
      </StepTitle>
      <StyledText>
        <FiCornerDownRight size="20" />
        {text}
      </StyledText>
    </>
  );
};

/* <div>
  <h2 className={s.title}>Крок 2.</h2>
  <h3 className={s.subtitle}>
    <AiOutlineFlag size="24" />
    Сформуйте своє перше тренування
  </h3>
  <p className={s.text}>
    <img src={vector} alt="vector" />
    Визначте ціль, оберіть період, розпочинайте тренування.
  </p>
</div>; */
