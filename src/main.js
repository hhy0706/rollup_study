import sayHello from "@/modules/MyModule";
// import { concat } from "lodash"
import Greeter from "./modules/Greeter";
// const g = new Greeter();
// g.greet();
// const arr  = concat([1,2,3],4,[5])
export function hello(msg){
  console.log("Hello " + msg)
}
// sayHello('hello from Rollup and lodash');