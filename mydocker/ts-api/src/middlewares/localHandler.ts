export const beforeMiddleware = function(req, res, next) {
    console.log('Before middleware triggered');
    next();
  }
  
export  const responseHandler = function(req, res, next) {
      console.log('Response Action implementation triggered with response instead of send');
      res.status(200).send({"response":"fine-as-normal"});
  }
  
export  const handler = function(req, res, next) {
      console.log('Response Action implementation is not passed to express. Rather handler is triggered');
      responseHandler(req, res, next);
      next();
  };
  
export  const afterMiddleware = function(req, res, next) {
      console.log('After middleware triggered');
      next(); /* Can be removed safely */
  }