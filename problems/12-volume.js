/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/
//  function recVolume(height) {
//   let dimensions = [height]
//   // const measure = num => {
//   //   if(dimensions.length < 3) {
//   //     dimensions.push(num)
//   //   }
//   //   if(dimensions.length === 3) {
//   //     return dimensions.reduce((a, b) => a * b)
//   //   }
//   // }

//   return function(width) {
//     dimensions.push(width);
//     return function(length) {
//       dimensions.push(length)
//       const vol = height * width * length
//       return function() {
//         return vol
//       }
//       }
//     }
//   }
//   let vol = recVolume(4)(5)(3)

//   console.log(vol())

//let recVolume = height => width => length => height * width * length

function recVolume(height) {
	let dimensions = [height];
	let argCount = arguments.length;

	return function(width) {
		dimensions.push(width);
		let area = dimensions.reduce((a,b) => a * b)
		if (argCount === 2) {
			return function() {
				return area;
			}
		}
		return function(length) {
			dimensions.push(length);
			let volume = dimensions.reduce((a,b) => a * b);
			return function() {
				return volume;
			}
		}
	}
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
