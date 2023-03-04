import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Images from "./components/Images";
import NatureCategory from "./components/Categories/NatureCategory";
import ThreeDCategory from "./components/Categories/ThreeDCategory"
import ExperimentalCategory from "./components/Categories/ExperimentalCategory"
import WallpaperCategory from "./components/Categories/WallpaperCategory";
import AnimalsCategory from "./components/Categories/AnimalsCategory"
import FashionCategory from "./components/Categories/FashionCategory";
import FilmCategory from "./components/Categories/FilmCategory";
import FoodCategory from "./components/Categories/FoodCategory";
import SearchFeed from "./components/Categories/SearchFeed"
function App() {
  const [darkToggle, setDarkToggle] = useState("light");
  const [searchQuery, setSearchQuery] = useState("");
  const navigateToSearch = useNavigate();

  useEffect(() => {
    if (searchQuery !== "") {
      navigateToSearch("/search")
    }
    else {
      navigateToSearch("/")
    }
  }, [searchQuery])
  return (
    <div className={`${darkToggle ? "dark" : "light"}`}>
      <Navbar setSearchQuery={setSearchQuery} darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
      <Hero></Hero>
      <Routes>
        <Route path="/" element={<Images />}></Route>
        <Route path="/search" element={<SearchFeed searchQuery={searchQuery} />}></Route>
        <Route path="/nature" element={<NatureCategory />}></Route>
        <Route path="/3d" element={<ThreeDCategory />}></Route>
        <Route path="/experimental" element={<ExperimentalCategory />}></Route>
        <Route path="/wallpaper" element={<WallpaperCategory />}></Route>
        <Route path="/animals" element={<AnimalsCategory />}></Route>
        <Route path="/fashion" element={<FashionCategory />}></Route>
        <Route path="/film" element={<FilmCategory />}></Route>
        <Route path="/food" element={<FoodCategory />}></Route>
      </Routes>
      {/* <Images /> */}
    </div>
  )
}

export default App
