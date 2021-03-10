import signupRouter from '../routers/signup.js';
import signinRouter from '../routers/signin.js';
import logoutRouter from '../routers/logout.js';
import adCardRouter from '../routers/adCard.js';
import messageRouter from '../routers/messages.js'
import profileRouter from '../routers/profile.js'
import authorTripProfile from '../routers/authorTripProfile.js'
import pastTripsRouter from '../routers/profile.js'



const routersConfig = (app) => {
  app.use('/signup', signupRouter);
  app.use('/signin', signinRouter);
  app.use('/logout', logoutRouter);
  app.use('/newtrip', adCardRouter) ;
  app.use('/trips', adCardRouter) ;
  app.use('/messages',messageRouter)
  app.use('/profile',profileRouter)
  app.use('/users',authorTripProfile)

}
export default routersConfig
