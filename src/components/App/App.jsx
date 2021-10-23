import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function App() {

  useEffect(() => {
    fetchList()
  }, []) //end useEffect

  let [galleryList, setGalleryList] = useState([]);
  // let [galleryItems, setGalleryItems] = useState([]);

  const fetchList = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('entire response', response);
      setGalleryList(response.data)
    }).catch(function (error) {
      console.log('Error on GET', error);
    })
  } //end fetchList/GET

  const addItem = (newItem) => {
    console.log(newItem);
    axios({
      method: 'POST',
      url: '/gallery',
      data: newItem
    }).then(response => {
      console.log('response is', response);
      fetchList();
    }).catch(error => {
      console.log('Error in POST', error);
    });
  }; //end addItem/POST  

  const likePic = (galleryItem) => {
    axios ({
      method: 'PUT',
      url: `/gallery/like/${galleryItem.id}`
    }).then((response) => {
      console.log('liked Pic', response);
      fetchList();
    }).catch((error) => {
      console.log('Error clearing list', error);
    });
  }

  console.log('galleryList', galleryList);
  

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList
        list={galleryList}
        fetchList={fetchList}
        likePic={likePic}
        />
        <p></p>
      </div>
    );
}

export default App;
