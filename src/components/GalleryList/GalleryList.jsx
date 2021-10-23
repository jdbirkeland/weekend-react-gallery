import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'

function GalleryList({ list, fetchList, likePic, picDescript }) {
    return (
        <>
            <h2>Gallery of Awesome!</h2>

            <div className="listDiv">

                {
                    list.map(galleryItem => (
                        <GalleryItem
                            galleryItem={galleryItem}
                            key={galleryItem.id}
                            fetchList={fetchList}
                            list={list} 
                            likePic={likePic}
                            picDescript={picDescript}/>
                    ))
                }
            </div>
        </>
    )
}

export default GalleryList;