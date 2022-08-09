import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import PostDetail from './pages/postDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home underline={true} />} />
            <Route path='login' element={<Login />} />
            <Route path=':postId' element={<PostDetail />} />
            <Route path='/allposts'>
              <Route index element={<Home underline={false} />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
