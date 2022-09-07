import './NavBar/styles.css'

const ItemDetail = (itemDetail) => {

    const {name, fullDesc ,image, price} = itemDetail;
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