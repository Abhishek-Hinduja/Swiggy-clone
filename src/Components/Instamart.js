import { useState } from "react"

const Section = ({title,description})=>{
    const [isvisible, setisvisible] = useState((false))
    return(
        <div className="border border-black m-1">
            <h3 className="font-bold text-xl p-1">{title}</h3>
            {isvisible ? (
                    <button className = "p-1" onClick={()=> setisvisible(false)}>hide</button>
                ):
                <button className="p-1" onClick={()=> setisvisible(true)}>show</button>
            }
            {isvisible && <p className="p-1">{description}</p>}
        </div>
    )
}

const Instamart = ()=>{
    return (
        <div>
        <h1 className="text-3xl p-2 m-2">Instamart</h1>
        <Section
            title={"About Instamart"}
            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"}
        />
        <Section
            title={"Team Instamart"}
            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"}
        />
        <Section
            title={"Career Instamart"}
            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"}
        />
        </div>
    )
}

export default Instamart;