import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHabit, habitSelector } from "../Redux/Reducer/habitReducer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addhabitStyle from "../styles/AddHabit.module.css";

const AddHabit = () => {
    const dispatch = useDispatch();
    const { habits } = useSelector(habitSelector);
    const [habitName, setHabitName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const newDate = new Date().toString();
        const weekStatus = Array(7).fill(null);
        const data = {
            id: habits.length,
            name: habitName,
            completedDays: 0,
            createdOn: `${newDate.slice(4, 15)}`,
            weekStatus: weekStatus
        };

        dispatch(addHabit(data));
        setHabitName('');
        toast.success('New Habit is Added !!');
    }

    return (
        <div className={addhabitStyle.addHabitContainer}>
            <h1 className={addhabitStyle.addHabitHeading}>Add Habit</h1>
            <div className={addhabitStyle.addhabitformContainer}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="habit-name" className={addhabitStyle.formLable}>Habit:</label>
                    <input
                        type="text"
                        placeholder="Enter habit name..."
                        id="habit-name"
                        value={habitName}
                        className={addhabitStyle.formInput}
                        onChange={(e) => setHabitName(e.target.value)}
                        required
                    />
                    <button type="submit" className={addhabitStyle.addHabitBtn}>ADD HABIT</button>
                </form>
            </div>
        </div>
    )
}

export default AddHabit;
