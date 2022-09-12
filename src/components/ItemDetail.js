import './NavBar/styles.css'

const ItemDetail = ({itemDetail}) => {

    return (
            <>
            <div className='ItemImgDetail'>
                <img className='ImgDetail' src={itemDetail.image} alt={itemDetail.name}/>
            </div>
            <div className='ItemDetail'>
                <p className='nameDetail'>{itemDetail.name}</p>
                <p className='priceDetail'>{itemDetail.price}</p>
                <p className='descDetail'>{itemDetail.fullDesc}</p>

            </div>
            </>
);
};
export default ItemDetail;