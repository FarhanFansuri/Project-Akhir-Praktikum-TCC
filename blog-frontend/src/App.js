// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavbarBlog from './components/NavbarBlog';
import InputPostBlog from './pages/InputPostBlog';
import React, { Suspense} from 'react';
const PostBlog =  React.lazy(() => import('./pages/PostBlog'));

function App() {

  return (
    <div className="App">

      <NavbarBlog/>
      <Routes>
        <Route path='/' element={
        <Suspense fallback={<div>Loading...</div>}>
          <PostBlog/>
      </Suspense>
        } />
        <Route path='/inputpost' element={<InputPostBlog/>} />
      </Routes>
    </div>
  );
}

export default App;
