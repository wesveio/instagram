import React from 'react';
import Header from './components/Header';
import Stories from './components/Stories';
import Posts from './components/Posts';
import Footer from './components/Footer';

const App = () => (
    <div className="App">
        <Header />
        <Stories />
        <Posts />
        <Footer />
    </div>
)

export default App;