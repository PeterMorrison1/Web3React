import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderApp from './components/HeaderApp.js';
import PhotoThumb from './components/PhotoThumb';
import PhotoBrowser from './components/PhotoBrowser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  async componentDidMount() {
    try {
      const url = "http://randyconnolly.com/funwebdev/3rd/api/travel/images.php";
      const response = await fetch(url);
      const jsonData = await response.json();
      this.setState( {photos: jsonData} );
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    return (
      <main>
        <HeaderApp />
        <PhotoBrowser photos={this.state.photos} />

      </main>
    );
  }
}

export default App;
