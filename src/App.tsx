import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Login from './pages/auth/login';
import Home from './pages/home';
import axios from 'axios'
import { getHeaders, getTokenFormCookie } from './utill/cookieUtill';
import History from './pages/history';
import Admin from './pages/auth/admin';

function App() {
  const [username, setUserName] = React.useState<string>('');
  const [isAdmin, setIsAdmin] = React.useState<boolean>(false);

  useEffect(() => {

    const token = getTokenFormCookie();

    if (token) {
      axios.get('http://localhost:8081/auth/login', getHeaders(token)
      ).then((res) => {
        setUserName(res.data.data.username)
        setIsAdmin(res.data.data.isAdmin)
      }).catch((err) => {
        console.log(err.response.data)
      })
    }
  }, [])

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Router>
        <Navbar setIsAdmin={setIsAdmin} setUserName={setUserName} username={username} isAdmin={isAdmin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login setIsAdmin={setIsAdmin} setUserName={setUserName} />} />
          {username &&
            <Route path='/history' element={<History />} />
          }
          {isAdmin &&
            <Route path='/admin' element={<Admin />} />
          }
        </Routes>
      </Router>

    </div>
  );
}

export default App;
