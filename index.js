// Objects

// Cup
// attributes: {color, material, shape, price, vIn}
// behaviors: {pourInto, pourFrom}

// var Cup= {
// 	color: "pink",
// 	material: "ceramic",
// 	shape: "ellipse",
// 	price: 1499,
// 	vIn: 30,
// 	pourInto: function (v) {
// 		this.vIn = this.vIn + v;
// 	},
// 	pourFrom: function (v) {
// 		this.vIn = this.vIn - v;
// 	}
// }

// Using Function Constructors

function cup (c, m, s, p, vin) {
	this.color = c
	this.material = m
	this.shape = s
	this.price = p
	this.vIn = vin
	this.pourInto = function (v) {
		this.vIn = this.vIn + v;
	}
	this.pourFrom = function (v) {
		this.vIn = this.vIn - v;
	}	 
}

var obj1 = new cup("red", "plastic", "oval", 499, 70);


console.log(obj1.color)
obj1.pourInto(20)
console.log(obj1.vIn)
