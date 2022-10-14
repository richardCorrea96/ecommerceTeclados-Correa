import teclados from '../../images/teclados.jpg'
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <div className="homeContainer">
        <div className="homeTitleDescriptionContainer">
            <div className="homeTitleContainer">
                <p className="titleLine1">MechKeebs,</p>
                <p className="titleLine2">your custom</p>
                <p className="titleLine3">keebs site!</p>
            </div>
            <div>
                <p className="homeDescription">Build your own mechanical keyboard, starting here! Keycap sets,
                mechanical switches, lube stations, screw trays and accessories.
                Check our products, and make your endgame keeb today!.🚀</p>
            </div>
            <div className="ourProducts-btnContainer">
              <Link to="/allproducts"><button className="ourProducts-btn">Our products!!</button></Link>
            </div>
        </div>
        <div className="homImgContainer">
            <img className="homeImg" src={teclados}/>
        </div>
    </div>
  )
}

export default Home