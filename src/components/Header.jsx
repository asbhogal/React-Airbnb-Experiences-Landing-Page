import AirbnbLogo from '../mockups/airbnb-logo.svg';

const Header = () => {
    return (
        <div className="Header">
            <div className="AirbnbLogo">
                <img src={ AirbnbLogo }></img>
            </div>
        </div>
    )
}

export default Header;