import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import AboutUs from './Pages/AboutUs';
import HomePage from './Pages/HomePage';
import UserPage from './Pages/UserPage';

function App() {
  console.log('page rendered');
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="usersPage" element={<UserPage />} />
        <Route exact path="aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;

// 'ctrl+alt+down arrow - down paste'
// 'render'
