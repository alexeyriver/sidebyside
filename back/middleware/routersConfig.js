import signupRouter from '../routers/signup.js';
import signinRouter from '../routers/signin.js';
import logoutRouter from '../routers/logout.js';
import adCardRouter from '../routers/adCard.js';



const routersConfig = (app) => {
  app.use('/signup', signupRouter);
  app.use('/signin', signinRouter);
  app.use('/logout', logoutRouter);
  app.use('/newtrip', adCardRouter) ;
  app.use('/trips', adCardRouter) ;



}
export default routersConfig
