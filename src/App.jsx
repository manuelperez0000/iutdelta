import { Route, Routes } from "react-router-dom"

const Xx = ()=>{
  return (<> uuu </>)
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Xx />} />
      <Route path="/login" element={<Xx />} />
      <Route path="/recuperacion" element={<Xx />} />
    </Routes>
  )
}

export default App
