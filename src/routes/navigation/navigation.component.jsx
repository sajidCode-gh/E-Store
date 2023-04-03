import "./navigation.styles.scss";
import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutAuth } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const { currentValue } = useContext(UserContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {currentValue ? (
                        <span className="nave-link" onClick={signOutAuth}>
                            Sign Out
                        </span>
                    ) : (
                        <Link className="nav-link" to="/auth">
                            SIGN IN
                        </Link>
                    )}
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
