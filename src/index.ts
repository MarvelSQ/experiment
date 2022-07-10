import { add } from "./moduleA";

console.log("this is a experiment module");

console.log(add(1, 2));

// this comment is new
export default {
  name: "Experiment",
  version: "1.0.0",
  something: "this is a update",
};
