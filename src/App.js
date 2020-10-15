import React from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';
import routesConfig from './routesConfig';
import Footer from './pages/footer/footer';

function App() {
  return (
    <div>
      <header className="py-3 header">
        <nav className="nav-links">
          <Link className='px-2' to='/'>Home</Link> 
          <Link className='px-2' to='/user'>User</Link> 
          <Link className='px-2' to='/login'>Login</Link>
        </nav>
      </header>
      {routesConfig.map(
        (value, key) => {
          return <Route key={key} path={value.path} component={value.component} exact={value.exact}
          ></Route>
        }
        )}
        <Footer></Footer>
    </div>
  );
}

export default App;
