import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {useParams} from "react-router-dom";
import {Main} from "./components/Main";

export function App() {

    const {id} = useParams()

    return (
        <>
            <Header/>
            <div className="row">
                <Footer/>
                {id ? <Main id={id}/> : ""}
            </div>
        </>
    )
}