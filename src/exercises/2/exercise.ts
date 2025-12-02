/*
 	Exercise #2: make this code work
	You only need to make it compile! (No errors!)
*/

type FeatherColor =
  | "white"
  | "black"
  | "pink"
  | "red"
  | "light green"
  | "green";

interface Duck {
  cuteName: string;
  featherColor: FeatherColor;
  quackWord: string;
}

interface Pond {
  name: string;
}

// To start, uncomment me!
//
// function quackAway(pond: unknown) {
//   pond.ducks.forEach((duck: unknown) => {
//     console.log(`The ${duck.name} has ducked with: ${duck.quackWord}!`);
//   });
// }

// quackAway(pond);
