import { Routes, Route } from "react-router-dom"

// import CategoryItem from "./components/category-item/category-item"

import Home from "./Routes/Home/Home.component"

import Navigation from "./Routes/Home/Navigation/Navigation.component"


const Shop = () => {
  return (
    <h1>This is shop Page </h1>
  )

}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        
        <Route path='shop' element={<Shop />} />
      </Route>

    </Routes>
  );
};

export default App;
