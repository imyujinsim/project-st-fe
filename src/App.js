import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/LogIn';
import UserSignUp from './pages/UserSignUp';
import Detail from './pages/Detail';
import SearchResult from './pages/SearchResult';
import UserInfo from './pages/UserInfo';
import AgreePage from './pages/AgreePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<UserSignUp />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/result" element={<SearchResult />} />
      <Route path="/userInfo" element={<UserInfo />} />
      <Route path="/agree" element={<AgreePage />} />
    </Routes>
  );
};

export default App;
