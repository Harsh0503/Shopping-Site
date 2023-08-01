import { Routes, Route } from "react-router-dom"

// import CategoryItem from "./components/category-item/category-item"

import Home from "./Routes/Home/Home.component"

import Navigation from "./Routes/Home/Navigation/Navigation.component"
import SignIn from "./Routes/Home/Sign-In/Sign-In.component"

import Shop from '../src/Routes/Shop/shop.component'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
        
      </Route>

    </Routes>
  );
};

export default App;
