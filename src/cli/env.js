import { env } from "process";

const parseEnv = () => {
  let rssEnvs = Object.keys(env).filter((envElem) => envElem.includes("RSS_"));
  rssEnvs.map((envElem) => {
    console.log(`${envElem}=${env[envElem]}`);
  });
};

parseEnv();
