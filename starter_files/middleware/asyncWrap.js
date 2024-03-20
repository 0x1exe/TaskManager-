const asyncWrapper = (wrapFunc) => {
  return async (req, res, next) => {
    try {
      await wrapFunc(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = asyncWrapper;
