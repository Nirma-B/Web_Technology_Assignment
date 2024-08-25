import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Gallery from './Components/Gallery';

function App() {
 
  return (
    <div className="App">
      <Header />
      <main>
        <Form />
        <Gallery />
        <div className="terms-and-conditions">
          <label id="checkbox">
            <input type="checkbox" required /> I agree to the <a href="/terms">terms & conditions</a>.
          </label>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
