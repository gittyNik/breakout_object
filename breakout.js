// Objects

// Cup

// attributes - radius, height, color, material, price, volumeofLiquidInside,
// Behaviours - pourInto, pourFrom

// var Cup = {
// 	radius: 10,
// 	height: 20,
// 	color: "pinkishred",
// 	material: "Ceramic",
// 	price: 12399,
	// volumeofLiquidInside: 12,
// 	pourInto: function(v) {
// 		this.volumeofLiquidInside = this.volumeofLiquidInside + v;
// 	},
// 	pourFrom: function(v) {
// 		this.volumeofLiquidInside = this.volumeofLiquidInside - v;
// 	}
// }

// Functional constructor

function fnName(rad, ht, clr, mt, vIn) {
	this.radius = rad;
	this.height = ht;
	this.color = clr;
	this.material = mt;
	this.vInside = vIn;
	this.pourInto = function (v) {
		this.vInside = this.vInside + v;
	};
	this.pourFrom = function (v) {
		this.vInside = this.vInside - v;
	};
}

var obj1 = new FnName(32, 40, "pink", "metal", 23);

obj1.pourFrom(20);
console.log(obj1.constructor);
