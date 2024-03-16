import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../Redux/Reducer/habitReducer";
import styles from "../styles/HabitListItem.module.css";

const HabitListItem = ({ habit }) => {
    const dispatch = useDispatch();
    const { id, name, completedDays } = habit;

    const handleDelete = () => {
        dispatch(deleteHabit(id));
    }

    return (
        <div className={styles.habitListItem}>
            <div>
                <p>{name}</p>
                <small> {completedDays}/7 Days</small>
            </div>
            <button className={styles.habitDeleteBtn} onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
}

export default HabitListItem;
