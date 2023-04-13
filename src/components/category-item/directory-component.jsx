import { useNavigate } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;

    const navigate = useNavigate();

    const handleNavigate = () => navigate(route);

    return (
        <div className="directory-item-container" onClick={handleNavigate}>
            <div
                className="background-image"
                style={{
                    background: `url(${imageUrl})`,
                }}
            ></div>
            <div className="body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default DirectoryItem;
