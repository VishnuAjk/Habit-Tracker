import React, {useEffect, useState} from "react";
import HabitList from "../Component/HabitList";
import HabitStatus from "../Component/HabitStatus";
import styles from "../styles/DetailsPage.module.css";

const DetailsPage = () => {
    const [date, setDate] = useState('');

    useEffect(() => {
        const newDate = new Date().toString();
        setDate(newDate.slice(0, 15));
    }, []);

    return (
        <div className={styles.detailsPageContainer}>
            <div className={styles.detailsPageContent}>
                <div className={styles.detailsPageHeader}>
                    Hey user,
                    <span>{`${date.slice(0, 3)} , ${date.slice(3)}`}</span>
                </div>
                <div className={styles.detailsPageBody}>
                    <HabitList />
                    <HabitStatus/>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
