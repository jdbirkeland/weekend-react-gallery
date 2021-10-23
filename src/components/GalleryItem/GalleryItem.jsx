import './GalleryItem.css'

function GalleryItem({newItem}) {

    return(<>
    <div className="newItem">
        <h3>{newItem.description}</h3>
        <button>like pick</button>
    </div>

    </>
    )
}

export default GalleryItem;