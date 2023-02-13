import { Route, Routes } from 'react-router-dom';
import './App.scss';
import UserPost from './components/userPost/userPost';
import UsersTable from './components/usersTable/userTable';
import { useAppSelector } from './hooks/redux';

function App() {
  const { posts } = useAppSelector((state:any) => state.postReducer)
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UsersTable />} />
        <Route path='/post' element={<UserPost title={posts.title} body={posts.body} />} />
      </Routes>
    </div>
  );
}

export default App;
