import { Outlet } from "react-router-dom";
import ProfilefunctionalComponent from "./Profile";
import ProfileClassBasedComponent from "./ProfileClass";

const About = ()=>{
    return (
        <>
        <h1>Welcome to the About us Page</h1>
        <ProfilefunctionalComponent name={"Abhishek functional"}/>
        <ProfileClassBasedComponent name={"Abhishek Class"}/>
        </>
    )
}

export default About;