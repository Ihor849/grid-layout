export const img19 = require("../../images/19.jpg");
export const img21 = require("../../images/21.jpg");
export const img43 = require("../../images/43.jpg");
export const img45 = require("../../images/45.jpg");
export const img66 = require("../../images/66.jpg");
export const img80 = require("../../images/80.jpg");

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
          <img src={img21} alt=""></img>
        </div>
        <div className="galleryItems">
          <img src={img43} alt=""></img>
        </div>
        <div className="galleryItems itemBig">
          <img src={img45} alt=""></img>
        </div>
        <div className="galleryItems">
          <img src={img66} alt=""></img>
        </div>
        <div className="galleryItems">
          <img src={img80} alt=""></img>
        </div>
      </div>

    </section>
    </section>
  )
}