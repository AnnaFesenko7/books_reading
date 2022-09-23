import { WorkoutTitle } from 'components/WorkoutTitle';
import styled from 'styled-components';

const WorkoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f6f7fb;
`;

const WorkoutMaine = styled.div`
  width: 65%;
`;

const WorkoutSidebar = styled.div`
  width: 25%;
`;

export const Workout = () => {
  return (
    <WorkoutContainer>
      <WorkoutMaine>
        <WorkoutTitle text="Моє тренування" />
      </WorkoutMaine>
      <WorkoutSidebar>
        <WorkoutTitle text="Моя мета прочитати" />
      </WorkoutSidebar>
    </WorkoutContainer>
  );
};
