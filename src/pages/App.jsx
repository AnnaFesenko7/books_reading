import { Routes, Route } from 'react-router-dom';
import Container from '../components/Container/Container';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Workout } from './Workout';
import NotFound from './NotFound';
import AppBar from 'components/Appbar/Appbar';
// import { Timetable } from './Timetable/Timetable';

export const App = () => {
  return (
    <>
      <Container>
        <AppBar />

        <Routes>
          <Route path="/workout" element={<Workout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};
