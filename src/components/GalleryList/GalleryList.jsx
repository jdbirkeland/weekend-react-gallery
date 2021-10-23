import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'

function GalleryList({ list }) {
    return (
        <>
            <h2>Gallery of Awesome!</h2>

            <div className="listDiv">

                {
                    list.map(newItem => (
                        <GalleryItem
                            newItem={newItem}
                            key={newItem.id}
                            fetchList={fetchList}
                            list={list} />
                    ))
                }
            </div>
        </>
    )
}

export default GalleryList;