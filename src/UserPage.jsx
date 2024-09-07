import React from 'react'
import PostListCard from './components/PostListCard'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

function UserPage() {
	const { userid } = useParams();
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${userid}`)
			.then(response => response.json())
			.then(data => setData(data))
			.catch(error => console.error('Error fetching post:', error));
	}, []);

	return (
		<>
			<div id='nameTitle'>All post by {"Name"}
			{data.map((item) => <PostListCard userid={item.userId} title={item.title} id={item.id} key={item.id} /> )}
			</div>
		</>
	)
}

export default UserPage