import cors from 'cors';

const express = require('express'); // Enable cross-origin resource sharing (CORS) with various options
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const authConfig = {
    domain: "dev-asap.auth0.com",
    audience: "asap api"
};

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
    }),
  
    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithm: ["RS256"]
});

const requireAuthMiddleware = function (err, req, res, next) {
  if (err && err.name === 'UnauthorizedError') {
   return res.status(401).send({ err: 'invalid token...' });
  }
  next(err)
}

async function handler(req, res) {
  // This is your normal ZEIT Now function.
  res.send({ data: req.user });
}

// Chain some middlewares before calling the ZEIT Now serverless function
export default express().use(cors(), checkJwt, requireAuthMiddleware).get('*', handler);