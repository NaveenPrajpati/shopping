import React from 'react'
import useCategory from '../../hooks/useCategory';
import { Link } from 'react-router-dom';

function Navbar() {
	const categories = useCategory();

	return (
		<div>
			<nav className="bg-white shadow-lg">
				<div className="max-w-6xl mx-auto px-4">
					<div className="flex justify-between">
						<div className="flex items-center space-x-7">
							<div>
								{/* <!-- Website Logo --> */}
								<select name="" id="">
									<option value=""> <Link
										className="text-white text-lg font-semibold "
										to={"/categories"}
										data-bs-toggle="dropdown"
									>
										Categories
									</Link></option>
									{categories?.map((c, index) => (
										<option key={index} className="text-center my-2">

											<Link
												className="text-blue-700  font-semibold "
												to={`/category/${c.slug}`}
											>
												{c.name}
											</Link>
										</option>
									))}
								</select>



								{/* <a href="#" className="flex items-center py-4 px-2">
								<img src="logo.png" alt="Logo" className="h-8 w-8 mr-2"/>
								<span className="font-semibold text-gray-500 text-lg">Navigation</span>
							</a> */}
							</div>
							{/* <!-- Primary Navbar items --> */}
							<div className="hidden md:flex items-center space-x-1">
								<a href="" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Tranding</a>
								<a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Best Selling</a>
								<a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Deal Of Day</a>
								<a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">FAQ</a>
							</div>
						</div>
						{/* <!-- Secondary Navbar items --> */}
						<div className="hidden md:flex items-center space-x-3 ">
							<a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</a>
							<a href="" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
						</div>
						{/* <!-- Mobile menu button --> */}
						<div className="md:hidden flex items-center">
							<button className="outline-none mobile-menu-button">
								<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
									x-show="!showMenu"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M4 6h16M4 12h16M4 18h16"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
				{/* <!-- mobile menu --> */}
				<div className="hidden mobile-menu">
					<ul className="">
						<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Deal Of Day</a></li>
						<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Best Selling</a></li>
						<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Events</a></li>
						<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">FAQ</a></li>
					</ul>
				</div>
				<script>
					const btn = document.querySelector("button.mobile-menu-button");
					const menu = document.querySelector(".mobile-menu");

					{/* btn.addEventListener("click", ()=>{
					menu.classList.toggle("hidden")
				}) */}
				</script>
			</nav>
		</div>
	)
}

export default Navbar