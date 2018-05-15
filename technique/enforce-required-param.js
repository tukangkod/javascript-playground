const throwIfMissing = () => {
	throw new Error('Missing Parameter');
}

const func = (requiredParam = throwIfMissing()) => {
	// implementation
	return requiredParam;
}

console.log(func("fahmi")); // console.log fahmi

console.log(func()); // throw error

