import Nav from "./Components/Nav"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Createuser from "./Components/Createuser"
import User from "./Components/User"
import Edituser from "./Components/Edituser"
const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Nav/>
            <Routes>
                <Route element={<Createuser/>} path="/"/>
                <Route element={<User/>} path="/user"/>
                <Route element={<Edituser/>} path="/edit/:index"/>
            </Routes>
            </BrowserRouter>

        </div>
    )
}
export default App