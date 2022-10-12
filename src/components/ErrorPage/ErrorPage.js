import errorImage from '../../images/Error404.png'
import {Link} from 'react-router-dom'
import '../../styles.css'

const ErrorPage = () => {
  return (
    <div className="errorContainer">
        <img className="errorImage"src={errorImage} alt="error404"/>
        <Link to="/">
          <button className="backHome-btn">Back to Home</button>
        </Link>
    </div>
  )
}
export default ErrorPage