import './App.css';
import Header from './Header';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import React from 'react';
import { useStateValue } from "./StateProvider";
import News from "./News";

function App() {

  const [{user}, dispatch] = useStateValue(null);

  return (
    <div className="app">
      {/* <h1>hello</h1> */}
      <Router>
        {!user ? (
          <Login />
        ) : (

          <>
          
            <Header/>
            
            <div className='app_body'>
              <Sidebar />
              <Routes>
                <Route path='/room/:roomId' element={<Chat />} />
                <Route path='/' element={<h1>welcome to DevChat</h1>} />
                <Route path='/news' element = {<News/>}/>
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;