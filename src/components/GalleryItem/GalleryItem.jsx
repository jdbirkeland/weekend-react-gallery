import React, { useState } from 'react';
import './GalleryItem.css'

function GalleryItem({ galleryItem, fetchList, list, likePic, picDescript }) {

    const [showDesc, setShowDesc] = useState(false);
    const noLikes = ["No One Likes This Photo"]
    const likesCounter =[<p className="likesCounter">Likes: <span>{galleryItem.likes}</span></p>]
    // const newLikesCounter = noLikes.replace(noLikes,likesCounter);
    
// const changeStatus = (noLikes) => {
//     if(galleryItem.likes === 0) {
//     onOneLikes = noLikes;}
//     else {
//     console.log('likesCounter');
//     return [likesCounter];   
// }
// }

    const toggleDescription = () => {
        setShowDesc(!showDesc)
    }
    console.log(showDesc);
    return (<>
        <div className="newItem">
        <div className="newPic">
            {/* <h3>{galleryItem.description}</h3> */}
            <img className={showDesc ? "photo toggleClass" : "photo"} 
            src={galleryItem.path} alt="Goat"
            onClick={() => {toggleDescription() }}/>
            {showDesc && <div className="showDesc">{galleryItem.description}</div>}
        </div> 
            <div><button onClick={() => likePic(galleryItem)}>Like</button></div>
            {/* <p className="noOneLikes"> {noLikes} </p> */}
            <p className="likesCounter">Likes: <span>{galleryItem.likes}</span></p>
        </div>
    </>
    )
}

export default GalleryItem;