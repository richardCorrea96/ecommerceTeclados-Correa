import userIcon from '../../imagenes/user.png'
import './styles.css'

const User = () => {
    return (
        <div>
            <button className='btn-navBar'>
                <img className='img-btn-navBar' src={userIcon} alt='user'/>
            </button>
        </div>
    )
}

export default User;