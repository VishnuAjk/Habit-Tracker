import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habits: [],
    showStatus: null,
};

const habitSlice = createSlice({
    name: 'habitTracker',
    initialState,
    reducers: {
        addHabit: (state, action) => {
            state.habits.push(action.payload);
            state.showStatus = null;
        },
        deleteHabit:(state, action) =>{
            const habitId = action.payload;
            state.habits = state.habits.filter(habit => habit.id !== habitId);
            state.showStatus = null;
        },
        setShowStatus: (state, action) => {
            state.showStatus = action.payload;
        },
        toggleHabitStatus: (state, action) => {
            const { habitIndex, dayIndex, status } = action.payload;
            const currentHabit = state.habits[habitIndex];

            if(!currentHabit) {
                return state; 
            }

            if(status) {
                if (currentHabit.weekStatus[dayIndex]) {
                    return state;
                }
                currentHabit.completedDays++;
            } 
            else if(status === false) {
                if(currentHabit.weekStatus[dayIndex] === false) {
                    return state;
                }
                if(currentHabit.weekStatus[dayIndex]) {
                    currentHabit.completedDays--;
                }
            } 
            else{
                if(currentHabit.weekStatus[dayIndex] === null) {
                    return state;
                }
                if(currentHabit.weekStatus[dayIndex]) {
                    currentHabit.completedDays--;
                }
            }

            currentHabit.weekStatus[dayIndex] = status;
            state.habits[habitIndex] = currentHabit;

            return state;
        },
    },
});

export const { addHabit, setShowStatus, toggleHabitStatus, deleteHabit } = habitSlice.actions;

export const habitReducer = habitSlice.reducer;

export const habitSelector = state => state.habitReducer;
