// style
import "./Navbar.css";

function Navbar({ usersLenght }) {
    return (
        <div className="navbar">
            <div className="navbar-container container">
                <h1 className="navbar-logo">CUser</h1>
                <h3 className="navbar-counter">
                    {usersLenght > 0
                        ? "You have: " + usersLenght
                        : "No User :("}
                </h3>
            </div>
        </div>
    );
}

export default Navbar;
