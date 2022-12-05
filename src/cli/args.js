import { argv } from "process";

const parseArgs = () => {
  let propList = argv.filter((argElem) => argElem.includes("--"));
  let valuesList = argv.filter((valueElem) => !valueElem.includes("--"));
  propList.map((el, i) => {
    console.log(`${el} is ${valuesList[i + 2]}`);
  });
};

parseArgs();
