import { useHistory } from "react-router"

export const NotFoundPage = () => {

    let history = useHistory()

    const handleGoHomePage = ()=>{
        history.push("/")
    }

    return (
        <div>
            <h3>Error 404 Not Found</h3>
            <button onClick={handleGoHomePage}>Volver al inicio</button>
        </div>
    )
}
