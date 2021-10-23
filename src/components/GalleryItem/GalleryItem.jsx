import './GalleryItem.css'

function GalleryItem({galleryItem, fetchList, list, likePic}) {

    return(<>
    <div className="newItem">
    
        <h3>{galleryItem.description}</h3>
        <div><img className="photo" src={galleryItem.path} alt="Goat" /></div>
        <div><button onClick={() => likePic(galleryItem)}>Like</button></div>
        <p>Likes: <span>{galleryItem.likes}</span></p>
    </div>

    </>
    )
}

export default GalleryItem;