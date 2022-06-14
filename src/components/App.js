import React from 'react';
import reactDom from 'react-dom';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App(){
    return(
        <div>
           <Header />
           <Content />
           <Content />
           <Content />
           <Content />
           <Footer />
        </div>
    )
}

export default App;