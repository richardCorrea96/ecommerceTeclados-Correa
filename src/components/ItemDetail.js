import './NavBar/styles.css'

//correccion 
const ItemDetail = ({name, image, price, fullDesc}) => {

    return (
            <>
            <div className='ItemImgDetail'>
                <img className='ImgDetail' src={image} alt={name}/>
            </div>
            <div className='ItemDetail'>
                <p className='nameDetail'>{name}</p>
                <p className='priceDetail'>{price}</p>
                <p className='descDetail'>{fullDesc}</p>

            </div>
            </>
);
};
export default ItemDetail;