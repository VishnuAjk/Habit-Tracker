import React from "react";
import { useDispatch } from "react-redux";
import { toggleHabitStatus } from "../Redux/Reducer/habitReducer";
import SingleDayStatus from "./SingleDayStatus";
import { toast } from "react-toastify";
import styles from "../styles/WeekStatus.module.css";

const WeekStatus = ({ habitIndex, handleCloseClick, showStatus, weekDays }) => {
    const dispatch = useDispatch();

    const toggleStatus = (dayIndex, status) => {
        dispatch(toggleHabitStatus({ habitIndex, dayIndex, status }));
        if (status) {
            toast.success(`${showStatus.name} done on ${weekDays[dayIndex]}`);
        }
    }

    return (
        <div className={styles.weekStatusContainer}>
            <button className={styles.closeBtn} onClick={handleCloseClick}>X</button>
            <h1 className={styles.habitName}>Habit: {showStatus.name}</h1>
            <h1 className={styles.habitDetails}>
                <span className={styles.daysCompleted}>Days Completed : {showStatus.completedDays} / 7</span>
                <span className="added-on">Added On: {showStatus.createdOn}</span>
            </h1>
            <div className={styles.weeklyProgress}>
                <h1 className={styles.weeklyProgressHeading}>Your Weekly Progress:</h1>
                <div className={styles.dayStatusContainer}>
                    {weekDays.map((day, i) =>
                        <SingleDayStatus
                            key={i}
                            day={day}
                            index={i}
                            status={showStatus.weekStatus[i]}
                            toggleStatus={toggleStatus}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default WeekStatus;
