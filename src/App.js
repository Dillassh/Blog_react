import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Blog from "./views/Blog";
import Wishlist from "./views/Wishlist";
import Navbar from "./common/Navbar";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<div style={{ marginTop: "90px" }}></div>
				<Routes>
					<Route path='/' element={<Home />}>
						Home
					</Route>
					<Route path='/blog/:blogId' element={<Blog />}>
						Blog
					</Route>
					<Route path='/wishlist' element={<Wishlist />}>
						Wishlist
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
