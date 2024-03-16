import React from "react";
import { useSelector } from "react-redux";
import { habitSelector } from "../Redux/Reducer/habitReducer";
import HabitListItem from "./HabitListItem";
import styles from  "../styles/HabitList.module.css";

const HabitList = () => {
    const { habits } = useSelector(habitSelector);

    return (
        <div className={styles.habitListContainer}>
            <nav className={styles.habitListNavbar}>
                {habits.length === 0 ? "Nothing in your list" : "Your Habit List"}
            </nav>
            <div className={styles.habitListItems}>
                {habits.map((habit, i) => (
                    <HabitListItem key={i} habit={habit} />
                ))}
            </div>
        </div>
    );
};

export default HabitList;
