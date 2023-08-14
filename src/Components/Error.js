import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const error = useRouteError()
    console.log(error)
    return(
        <div className="error-message">
            <h1>Oops!!!</h1>
            <h2>Something Went Wrong!!!</h2>
            <h2>{error.status + " : " + error.statustext}</h2>
        </div>
    )
}

export default Error;