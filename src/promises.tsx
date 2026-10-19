// const order = new Promise<string>((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("🍔");
// 		reject(new Error("Sorry, no burgers left!"));
// 	}, 2000);
// })
// 	.then((food) => {
// 		console.log("your food is ready " + food);
// 		return food;
// 	})
// 	.catch((error) => {
// 		console.log(error.message);
// 		return "no food";
// 	});

// console.log(order);

// setTimeout(() => {
// 	console.log("order after 3s:", order);
// }, 3000);

const bestellng = async () => {
	console.log("bestellng started");
	const order = new Promise<string>((resolve, reject) => {
		//resolve("🍔");

		reject(new Error("Sorry, no burgers left!"));
	});
	try {
		const food = await order;
		console.log("your food is ready " + food);
		return food;
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message + " This is from the catch");
		}

		return "no food";
	}
};

bestellng();
console.log("Hi");
