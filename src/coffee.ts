const makeCoffee = (type: string) => {
	return new Promise<string>((resolve, reject) => {
		setTimeout(() => {
			if (type === "Tea") {
				reject(new Error("The machine only makes coffee"));
			} else {
				resolve("☕ " + type);
			}
		}, 1000);
	});
};

const morning = async () => {
	try {
		const latte = await makeCoffee("Latte");
		console.log(latte);
		const tea = await makeCoffee("Tea");
		console.log(tea);
		const espresso = await makeCoffee("Espresso");
		console.log(espresso);
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
};

morning();
console.log("Waiting for coffee....");
