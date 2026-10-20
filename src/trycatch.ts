// fetch("https://jsonplaceholder.typicode.com/posts/1")
// 	.then((response) => response.json())
// 	.then((post) => console.log("title:", post.title))
// 	.catch((error) => console.log("failed:", error));

// try {
// 	const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
// 	const post = await response.json();
// 	console.log(post.title);
// } catch (err) {
// 	console.log("failed:", err);
// }

// function loadAuthor() {
// 	return fetch("https://jsonplaceholder.typicode.com/posts/1")
// 		.then((response) => response.json())          // unwrap the post data
// 		.then((post) => {
// 			// use the post's userId to build the next URL
// 			// `...${}...` is a template literal: it puts the value inside the string
// 			return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
// 		})
// 		.then((response) => response.json())          // unwrap the user data
// 		.then((user) => console.log("author:", user.name))
// 		.catch((error) => console.log("failed:", error));
// }

// loadAuthor();

// const loadAuthor = async () => {
// 	try {
// 		const response = await fetch(
// 			"https://jsonplaceholder.typicode.com/posts/1",
// 		);
// 		const post = await response.json();
// 		const newResponse = await fetch(
// 			`https://jsonplaceholder.typicode.com/users/${post.userId}`,
// 		);
// 		const user = await newResponse.json();
// 		console.log("the author is: ", user.name);
// 	} catch (err) {
// 		console.log("failed: ", err);
// 	}
// };

// loadAuthor();

// function getPostCount(userId: number) {
// 	return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
// 		.then((response) => response.json())   // unwrap: an ARRAY of posts
// 		.then((posts) => {
// 			console.log(`user ${userId} has ${posts.length} posts`);
// 			return posts.length;                // 👈 the value we hand back
// 		})
// 		.catch((error) => {
// 			console.log("failed:", error);
// 			return 0;                           // 👈 fallback value if something fails
// 		});
// }

// // using the function:
// getPostCount(1).then((count) => console.log("count:", count));

// const getPostCount = async (userId: number) => {
// 	try {
// 		const response = await fetch(
// 			`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
// 		);
// 		const posts = await response.json();
// 		console.log(`user ${userId} has ${posts.length} posts`);
// 		return posts.length;
// 	} catch (err) {
// 		console.log("failed:", err);
// 		return 0;
// 	}
// };

// const postCount = await getPostCount(5);
// console.log("count: ", postCount);

// const getFirstCommentEmail = (postId: number) =>
// 	fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
// 		.then((response) => response.json())
// 		.then((comments) => comments[0])
// 		.then((firstComment) => {
// 			console.log("first comment by:", firstComment.email);
// 			return firstComment.email;
// 		})
// 		.catch((err) => {
// 			console.log("failed: ", err);
// 			return "Unknown";
// 		});

// getFirstCommentEmail(1).then((email) => {
// 	console.log("email:", email);
// });
