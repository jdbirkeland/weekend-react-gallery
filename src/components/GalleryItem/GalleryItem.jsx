import React, { useState } from 'react';
import './GalleryItem.css'

function GalleryItem({ galleryItem, fetchList, list, likePic, picDescript }) {

    const [showDesc, setShowDesc] = useState(false);
    
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
            {/* <div><button onClick={() => likePic(galleryItem)}>Like</button></div> */}
            <button class="button" onClick={() => likePic(galleryItem)}>
    <div class="hand">
        <div class="thumb"></div>
    </div>
    <span>Like<span>d</span></span>
</button>
            <p>Likes: <span>{galleryItem.likes}</span></p>
        </div>
    </>
    )
}

export default GalleryItem;