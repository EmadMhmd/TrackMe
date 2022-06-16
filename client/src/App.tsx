import React from 'react';
import Message from './components/_shared/message-com';
import Signup from './components/user/signup-com';
import Header from './components/_shared/header-com';
import Footer from './components/_shared/footer-om';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Message />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
