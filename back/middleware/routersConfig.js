import signupRouter from '../routers/signup.js';
import signinRouter from '../routers/signin.js';
import logoutRouter from '../routers/logout.js';


const routersConfig = (app) => {
  app.use('/signup', signupRouter);
  app.use('/signin', signinRouter);
  app.use('/logout', logoutRouter);

}
export default routersConfig
