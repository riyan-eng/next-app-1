import getConfig from "next/config";
var { expressjwt: jwt } = require("express-jwt");
const util = require("util");

const { serverRuntimeConfig } = getConfig();

function jwtMiddleware(req, res) {
  const middleware = jwt({
    secret: serverRuntimeConfig.secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      // public routes that don't require authentication
      "/api/users/authenticate",
    ],
  });
  console.log(middleware)
  return util.promisify(middleware)(req, res);
}

export { jwtMiddleware };