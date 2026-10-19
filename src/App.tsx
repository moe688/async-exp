import { useEffect, useState } from "react";
import "./App.css";

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

class Foo {
	name: string;

	constructor(name: string) {
		this.name = name;

		console.log(`Hello from the class Foo, I am ${this.name}`);
	}
}

function App() {
	const [post, setPost] = useState<Post | null>(null);
	const [counter, setCounter] = useState<number>(0);
	const Bar = new Foo("Bar");

	// useEffect(() => {
	// 	fetch("https://jsonplaceholder.typicode.com/posts/1").then((respone) => {
	// 		console.log("Log from first then:", respone);
	// 		return respone.json().then((post) => {
	// 			console.log("Log from second then:", post.userId);
	// 			setPost(post);
	// 		});
	// 	});
	// }, [counter]);

	useEffect(() => {
		const loadPost = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts/1",
			);
			console.log("Log from first await:", response);
			const loadedPost = await response.json();
			console.log("Log from second await:", loadedPost.userId);
			setPost(loadedPost);
		};
		loadPost();
	}, [counter]);

	console.log("The fetch request: ");

	console.log("something");

	console.log(Bar);

	return (
		<section id="center">
			<div className="hero">The post id is: {post?.id}</div>
			<button
				type="button"
				onClick={() => {
					setCounter((prev) => prev + 1);
				}}
			>
				{counter}
			</button>
		</section>
	);
}

export default App;
