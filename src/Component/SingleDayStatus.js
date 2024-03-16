import React, { useState } from "react";
import styles from "../styles/SingleDayStatus.module.css";

const SingleDayStatus = ({ day, index, status, toggleStatus }) => {
    const [activeStatus, setActiveStatus] = useState(status);

    const handleButtonClick = (newStatus) => {
        toggleStatus(index, newStatus);
        setActiveStatus(newStatus);
    };

    return (
        <div className={styles.singleDayStatus}>
            <div className={styles.dayHeader}>{day}</div>
            <div className={styles.statusButtons}>
                <button
                    className={`${styles.statusBtn} ${activeStatus === true ? styles.done : ""}`}
                    onClick={() => handleButtonClick(true)}
                >
                    <i className="fa-solid fa-circle-check"></i>
                </button>
                <button
                    className={`${styles.statusBtn} ${activeStatus === false ? styles.notDone : ""}`}
                    onClick={() => handleButtonClick(false)}
                >
                    <i className="fa-solid fa-circle-xmark"></i>
                </button>
                <button
                    className={`${styles.statusBtn} ${activeStatus === null ? styles.pending : ""}`}
                    onClick={() => handleButtonClick(null)}
                >
                    <i className="fa-solid fa-ellipsis"></i>
                </button>
            </div>
        </div>
    );
}

export default SingleDayStatus;
