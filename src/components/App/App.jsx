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

  const fetchList = () => {
    axios({
      method: 'GET',
      url: '/like'
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
      url: '/like',
      data: newItem
    }).then(response => {
      console.log('response is', response);
      fetchList();
    }).catch(error => {
      console.log('Error in POST', error);
    });
  }; //end addItem/POST  

  const likePic = () => {
    axios ({
      method: 'PUT',
      url: '/like/${list.id}'
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
        list={galleryList}/>
        <p></p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
