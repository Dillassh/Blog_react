import "./Home.css";
import { Container, Row, Button } from "reactstrap";
import { useState, useEffect } from "react";
import Post from "../components/Home/Post";
import Footer from "../common/Footer";

function Home() {
	const counterSize = 6;
	const [posts, setPosts] = useState(null);
	const [postCounter, setPostCounter] = useState(counterSize);

	const getPosts = async () => {
		const responseData = await fetch(
			"https://jsonplaceholder.typicode.com/posts"
		);
		const apiPosts = await responseData.json();
		console.log(apiPosts);
		setPosts(apiPosts);
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<>
			<Container>
				<Row>
					<div
						style={{
							height: "50vh",
							width: "100%",
						}}>
						<img
							alt='img1'
							className='cover_image'
							src='https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80'
						/>
					</div>
				</Row>
				<Row>
					{posts ? (
						<>
							{posts.slice(0, postCounter).map((post, index) => {
								return <Post post={post} key={"post_" + index} />;
							})}
						</>
					) : (
						<div>Loading...</div>
					)}
				</Row>
				<Row>
					<Button
						className='mx-auto mb-5 '
						style={{ width: "200px" }}
						onClick={() => {
							setPostCounter(postCounter + counterSize);
						}}>
						Show more!
					</Button>
				</Row>
			</Container>
			<Footer />
		</>
	);
}

export default Home;
