import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { habitSelector, setShowStatus } from "../Redux/Reducer/habitReducer";
import WeekStatus from "./WeekStatus";
import styles from "../styles/HabitStatus.module.css";

const CalculateDayOfWeek = (date) => {
    var days = new Array();
    for (var i = 6; i >= 0; i--){
        days[6-i] = new Date(date.getFullYear(), date.getMonth(), date.getDate() - i).toString();
        days[6-i] = `${days[6-i].slice(0,4)}, ${days[6-i].slice(4,15)}`;
    }
    return days;
}

const HabitStatus = () => {
    const dispatch = useDispatch();
    const { habits, showStatus } = useSelector(habitSelector);
    const weekDays = CalculateDayOfWeek(new Date());

    const [selectedHabitIndex, setSelectedHabitIndex] = useState(null);

    const handleCloseClick = () => {
        dispatch(setShowStatus(null));
    }

    const handleHabitClick = (habitIndex) => {
        setSelectedHabitIndex(habitIndex);
        dispatch(setShowStatus(habits[habitIndex]));
    }

    return (
        <div className={styles.habitStatusContainer}>
            <nav className={styles.habitStatusNavbar}>
                <NavLink to="/">
                    <button className={styles.newHabitBtn}>New Habit</button>
                </NavLink>
            </nav>
            <div className={styles.habitStatusContent}>
                
                <div className={styles.habitStatusWeekly}>
                    {showStatus && selectedHabitIndex !== null &&
                        <WeekStatus
                            handleCloseClick={handleCloseClick}
                            showStatus={showStatus}
                            weekDays={weekDays}
                            habitIndex={selectedHabitIndex}
                        />
                    }
                </div>
                <div className={styles.habitStatusList}>
                    {habits.length === 0 ?
                        <div className={styles.emptyListMessage}>Nothing in Your List</div>
                        :
                        habits.map((habit, i) =>
                            <div key={i} className={styles.habitListItem} onClick={() => handleHabitClick(i)}>
                                {habit.name}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default HabitStatus;
