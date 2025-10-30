
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Auth/Home"
import Login from "./pages/Auth/Login"
// import SignUp from "./pages/Auth/SignUp"

const App = () => {
  return (
<>
<BrowserRouter>
<Routes>
 
  <Route path="/" exact element={<Home></Home>}/>
  <Route path="/login" exact element={<Login/>}/>
  <Route path="/SignUp" exact element={<SignUp/>}/>




</Routes>
</BrowserRouter>
</>
  )
}

export default App
 