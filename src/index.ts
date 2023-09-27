import { Iforme } from "./figures/Iforme";
import { Carre } from "./figures/Carre";
import { Cercle } from "./figures/Cercle";
import { Rectangle } from "./figures/Rectangle";
import { Triangle } from "./figures/Triangle";

let carre1 : Iforme
let triangle2 : Iforme
let rectangle3 : Iforme

carre1 = new Carre(8);
triangle2 = new Triangle(2, 3);
rectangle3 = new Rectangle(4, 2);

console.log("aire", carre1.aire(), "perimètre", carre1.perimetre());
console.log("aire", triangle2.aire(), "perimètre", triangle2.perimetre());
console.log("aire", rectangle3.aire(), "perimètre", rectangle3.perimetre());






