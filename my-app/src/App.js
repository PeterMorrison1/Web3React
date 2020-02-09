import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HeaderApp from './components/HeaderApp.js';
import PhotoThumb from './components/PhotoThumb';
import PhotoBrowser from './components/PhotoBrowser';
import * as cloneDeep from 'lodash/cloneDeep';
import Home from './components/Home';
import About from './components/About';
import Favourites from './components/Favourites';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      favourites: []
    }
  }

  addToFavourites = (id) => {
    const copyFavourites = cloneDeep(this.state.favourites);
    const newFav = this.state.photos.find(p => p.id === id);
    let found = this.state.favourites.find(fav => fav.id == id);
    if (found == undefined) {
      copyFavourites.push(newFav);
      this.setState({favourites: copyFavourites});
    }
  }

  updatePhoto = (id, photo) => {
    const copyPhotos = cloneDeep(this.state.photos);
    const photoToReplace = copyPhotos.find(p => p.id === id);

    photoToReplace.title = photo.title;
    photoToReplace.location.city = photo.location.city;
    photoToReplace.location.country = photo.location.country;
    this.setState({ photos: copyPhotos })
  }

  async componentDidMount() {
    try {
      const url = "http://randyconnolly.com/funwebdev/3rd/api/travel/images.php";
      const response = await fetch(url);
      const jsonData = await response.json();
      this.setState({ photos: jsonData });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <main>
        <HeaderApp />
        <Favourites favs={this.state.favourites}/>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/browse' exact render={(props) =>
          <PhotoBrowser photos={this.state.photos}
            updatePhoto={this.updatePhoto} addFav={this.addToFavourites}/>
        }
        />
        <Route path='/about' exact render={(props) =>
        <About/>}/>
      </main>
      );
    }
  }
  
  export default App;
