import styles from "./Map.module.css";
import Sidebar from "./Sidebar.jsx";
import Map from "./Map.jsx";

function Map() {
    return (
        <div className={styles.map}>
            <Sidebar />
            <Map />
        </div>
    )
}

export default Map;