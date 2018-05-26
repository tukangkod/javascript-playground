var link = (height, color, url) => {
    var height = height || 50;
    var color = color || 'red';
    var url = url || 'http://fahmi.my'

	return {height, color, url};
}

console.log(link(20, 'blue', 'http://kode.fahmi.my'));
console.log(link()); // correct, return default
console.log(link(0, 0, 'http://kode.fahmi.my')); // false, expected height = 0

// ES6
var link = (height = 50, color = 'red', url = 'http://fahmi.my') => {
	return {height, color, url};
}

console.log(link(20, 'blue', 'http://kode.fahmi.my'));
console.log(link());
console.log(link(0, 0, 'http://kode.fahmi.my'));

