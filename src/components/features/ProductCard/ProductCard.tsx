import style from './Product.module.css'

type Product = {
    name: string;
    image:string;
    description: string;
    price: string;
}

type Props = {
    product: Product
}

const ProductCard = ({product}:Props) => {
    const {name, description, price, image} = product

  return (
    <div className={style.container}>
        <div className={style.image_container}>
            <img src={image} alt="" />
        </div>
        <div className={style.info_container}>
            <h3 className={style.name}>{name}</h3>
            <p className={style.description}>{description}</p>
            <span className={style.price}>$ {price}</span>
        </div>
    </div>
  )
}

export default ProductCard