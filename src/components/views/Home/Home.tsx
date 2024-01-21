// import required modules
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import style from './Home.module.css'
import ProductCard from '../../features/ProductCard/ProductCard';

const products = [
  {
    name: "Producto 1",
    image: "https://www.paulinacocina.net/wp-content/uploads/2023/09/pizza-margherita-paulina-cocina-recetas.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat culpa tempore dolorum eos aliquid libero nobis temporibus, fuga, nulla nihil. Similique laudantium doloribus molestias? Veritatis ex veniam consequuntur vel?",
    price: "1500",
  },
  {
    name: "Producto 2",
    image: "https://newluxbrand.com/wp-content/uploads/2022/01/pizza-jamo%CC%81n-y-queso-Newlux-1024x1024-optimized.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat culpa tempore dolorum eos aliquid libero nobis temporibus, fuga, nulla nihil. Similique laudantium doloribus molestias? Veritatis ex veniam consequuntur vel?",
    price: "1900",
  },
  {
    name: "Producto 3",
    image: "https://www.vvsupremo.com/wp-content/uploads/2018/05/Pepperoni-Pizza-1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat culpa tempore dolorum eos aliquid libero nobis temporibus, fuga, nulla nihil. Similique laudantium doloribus molestias? Veritatis ex veniam consequuntur vel?",
    price: "1800",
  },
]

const Home = () => {
  return (
      <section className={style.wrapper}>
        <div className={style.category_name_container}>
          <h2>Categoría</h2>
        </div>
        <Swiper loop={true} navigation={true} modules={[Navigation]} className={style.swipper}>
          {
            products.map((product, index)=>(
              <SwiperSlide key={index}><ProductCard product={product}/></SwiperSlide>
            ))
          }
        </Swiper>
      </section>
  )
}

export default Home