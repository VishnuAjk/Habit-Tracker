import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../Redux/Reducer/habitReducer";
import { DisplayImage } from "../Data/DisplayImage";
import AddHabit from "../Component/AddHabit";
import homeStyles from "../styles/Homepage.module.css";

const Homepage = () => {
    const [showAddHabit, setShowAddHabit] = useState(false);
    const [homeImgUrl, setHomeimgUrl] = useState("https://m.media-amazon.com/images/I/6148xVIsG4L._AC_UF894,1000_QL80_.jpg");

    useEffect(()=>{
        const randomIndex = Math.floor(Math.random() * DisplayImage.length);
        setHomeimgUrl(DisplayImage[randomIndex].url);
    })
    
    const dispatch = useDispatch();

    const toggleAddHabit = () => {
        setShowAddHabit((prev) => !prev);
    };

    const handleAddHabit = (habit) => {
        dispatch(addHabit(habit));
        setShowAddHabit(false);
    };

    return (
        <div className={homeStyles.homePageContainer}>
            <div className={homeStyles.homePageImage}>
                <img src={homeImgUrl}/>
            </div>
            <div className={homeStyles.homePageContent}>
                <div className={homeStyles.addHabitSection}>
                    <button onClick={toggleAddHabit}>
                        {showAddHabit ? "Cancel" : "Add Habit"}
                    </button>
                    {showAddHabit && <AddHabit onAddHabit={handleAddHabit} />}
                </div>
            </div>
        </div>
    );
};

export default Homepage;
