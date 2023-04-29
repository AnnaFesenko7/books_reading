import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
`;

export const Step = styled.h2`
  font-size: ${p => p.theme.fontSize.mainTitleSize};
  line-height: 22px;
  margin-bottom: 16px;
`;

export const StepTitle = styled.h3`
  display: flex;
  font-size: ${p => p.theme.fontSize.main};
  line-height: 17px;
  gap: 8px;
  margin-bottom: 8px;

  svg {
    color: ${p => p.theme.colors.notActiveText};
  }
`;

export const StyledText = styled.p`
  display: flex;
  font-weight: 400;
  font-size: ${p => p.theme.fontSize.main};
  color: ${p => p.theme.colors.notActiveText};
  margin-left: 34px;
  display: flex;

  svg {
    color: ${p => p.theme.colors.accentColor};
  }
`;
