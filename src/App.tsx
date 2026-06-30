import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PlanB from "./pages/projects/PlanB"
import Recipes from "./pages/projects/Recipes"
import Weather from "./pages/projects/Weather"
import TasksMng from "./pages/projects/TasksMng"

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projects/PlanB" element={<PlanB />}/>
      <Route path="/projects/Recipes" element={<Recipes />}/>
      <Route path="/projects/Weather" element={<Weather />}/>
      <Route path="/projects/TasksMng" element={<TasksMng />}/>
    </Routes>
  )
}

export default App
