import Button from "./components/Button"
import Card from "./components/Card"
import SideBar from "./components/SideBar"

function App() {
  return (
    <div className="min-h-screen flex flex-col gap-10 justify-center items-center py-20">
      <SideBar/>
      <Card/>
      <Button/>
    </div>
  )
}

export default App
