import { ProductsCard, ProductsImg, ProductsItems } from "./SectionProducts.styled";

export const img30 = require("../../images/sport30.jpg");
export const img31 = require("../../images/sport31.jpg");
export const img34 = require("../../images/sport34.jpg");
export const img36 = require("../../images/sport36.jpg");
export const img38 = require("../../images/sport38.jpg");
export const img40 = require("../../images/sport40.jpg");
export const img49 = require("../../images/sport49.jpg");
export const img54 = require("../../images/sport54.jpg");



export const SectionProducts = ()=>{
  return (

    <section className="sectionProducts">
      <h2 className="productsTitle">Товары</h2>
      <ProductsItems className="productsItems">
        

          <ProductsCard className="productsCard">
            <ProductsImg  className="productsImg" href="#"><img src={img30} alt="Бейсбольная перчатка" /></ProductsImg>
            <a className="productsName" href="#">fggggggggggggggggggggggggggggggggggggggggggggggggggggggggggБейсбольная перчатка</a>
            <button type="button">Купить</button>
          </ProductsCard>

          <ProductsCard className="productsCard">
            <ProductsImg className="productsImg" href="#"><img src={img31} alt="Секундомер" /></ProductsImg>
            <a className="productsName" href="#">Секундомер </a>
            <button type="button">Купить</button>
          </ProductsCard>

          <ProductsCard className="productsCard">
            <ProductsImg className="productsImg" href="#"><img src={img34} alt="Гантели" /></ProductsImg>
            <a className="productsName" href="#">Гантели</a>
            <button type="button">Купить</button>
          </ProductsCard>

          <ProductsCard className="productsCard">
            <ProductsImg className="productsImg" href="#"><img src={img36} alt="Стартовый пистолет" /></ProductsImg>
            <a className="productsName" href="#">Стартовый пистолет</a>
            <button type="button">Купить</button>
          </ProductsCard>

          <ProductsCard className="productsCard">
            <ProductsImg className="productsImg" href="#"><img src={img38} alt="Велосипед" /></ProductsImg>
            <a className="productsName" href="#">Велосипед</a>
            <button type="button">Купить</button>
          </ProductsCard>

          <ProductsCard className="productsCard">
            <ProductsImg className="productsImg" href="#"><img src={img40} alt="Щетка для керлинга" /></ProductsImg>
            <a className="productsName" href="#">Щетка для керлинга</a>
            <button type="button">Купить</button>
          </ProductsCard>

          <ProductsCard>
            <ProductsImg className="productsImg" href="#"><img src={img49} alt="Баскетбольный мяч" /></ProductsImg>
            <a className="productsName" href="#">Баскетбольный мяч</a>
            <button type="button">Купить</button>
          </ProductsCard>

          <ProductsCard className="productsCard">
            <ProductsImg className="productsImg" href="#"><img src={img54} alt="Бейсбольный мяч" /></ProductsImg>
            <a className="productsName" href="#">Бейсбольный мяч</a>
            <button type="button">Купить</button>
          </ProductsCard>
      
      </ProductsItems>
    </section>
  )
}