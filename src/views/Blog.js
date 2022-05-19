import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import { useState, useEffect } from "react";
import Footer from "../common/Footer";
import "./Blog.css";

function Blog() {
	const params = useParams();
	const [post, setPost] = useState(null);
	const [user, setUser] = useState(null);

	const getBlog = async (blogId) => {
		const responseData = await fetch(
			"https://jsonplaceholder.typicode.com/posts/" + blogId
		);
		const apiPost = await responseData.json();
		setPost(apiPost);
	};

	const getUser = async (userId) => {
		const responseData = await fetch(
			"https://jsonplaceholder.typicode.com/users/" + userId
		);
		const apiUser = await responseData.json();
		setUser(apiUser);
	};

	useEffect(() => {
		if (params && params.blogId) {
			getBlog(params.blogId);
		}
	}, [params]);

	useEffect(() => {
		if (post && post.userId) {
			getUser(post.userId);
		}
	}, [post]);

	return (
		<>
			<Container className='mb-4'>
				{post && user ? (
					<>
						<Row>
							<img
								className='post_cover'
								src={`https://picsum.photos/seed/${post.id}/2000`}
							/>
						</Row>
						<Row>
							<h1>{post.title}</h1>
							<h3 style={{ minHeight: "500px" }}>{post.body}</h3>
							<Button className='mt-4 mb-4'>Add to wishlist!</Button>
						</Row>
						<Row>
							<div className='author_container mt-4'>
								<img src={`https://robohash.org/${user.id}.png?set=set4`} />
								<div className='mt-4'>
									<h3>{user.name}</h3>
									<h4>{user.email}</h4>
									<h4>{user.website}</h4>
									<h4>{user.phone}</h4>
								</div>
							</div>
						</Row>
					</>
				) : (
					<div>Loading...</div>
				)}
			</Container>
			<Footer />
		</>
	);
}

export default Blog;
