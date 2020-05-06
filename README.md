# ASAP : a react SaaS app boilerplate to get stated with your project As Soon As Possible

 - Authentication is handled with Auth0
 - Product listing and billing done with ChargeBee (to be done)

The project was boostraped with create-react-app, and is meant to be deploy on https://vercel.com/ (*formely Zeit) with the `now` command

the authentication is done with Auth0, and has been setup following the tutorials https://auth0.com/docs/quickstart/spa/react/01-login
and https://auth0.com/docs/quickstart/spa/react/02-calling-an-api
Due to the use of now, there the backend code is not 100% the same as the one in the tutorial, but we went for the smallest changes possible.
In order to deal with Google Authentication in your page, you might want to follow https://support.google.com/googleapi/answer/6158849

## Getting started
- git clone https://github.com/maxired/asap.git && cd asap
- yarn
- cp .env.sample .env based

You will have now to update fill .env with your value comming from Auth0
You are now ready to start the project locally
 - now dev

want go live ?
 - now
 you will have to update url settings in Auth0 dashbaord to allow callbackurl to point toward you new domain.
 
 
