const img19 = "../../images/19.jpg"
export const SectionContent =()=>{
 
  return (
    <section className="sectionContent">
      <h1 className="sectionTitle">Grid - Практика</h1>
      <section className="sectionGallery">
      <h2 className="sectionTitleGallery">Gallery</h2>
      <div className="galleryItems">
        
        <div className="galleryItems itemBig">
          <img src={img19} alt="спорт инвентарь"></img>
        </div>
        <div className="galleryItems">
          <img src="../../images/21.jpg" alt=""></img>
        </div>
        <div className="galleryItems">
          <img src="../../images/43.jpg" alt=""></img>
        </div>
        <div className="galleryItems">
          <img src="../../images/45.jpg" alt=""></img>
        </div>
        <div className="galleryItems">
          <img src="../../images/66.jpg" alt=""></img>
        </div>
        <div className="galleryItems">
          <img src="../../images/80.jpg" alt=""></img>
        </div>
      </div>

    </section>
    </section>
  )
}