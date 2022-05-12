import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Blog from "./views/Blog";
import Wishlist from "./views/Wishlist";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='' element={<Blog />}></Route>
					<Route path='' element={<Wishlist />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
