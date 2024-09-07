import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Users from './Users';
import UserPage from './UserPage';
import Posts from './Posts';
import PostPage from './PostPage';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Users />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/users/:userid' element={<UserPage />} />
				<Route path='/users/:userid/posts/:postid' element={<PostPage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)