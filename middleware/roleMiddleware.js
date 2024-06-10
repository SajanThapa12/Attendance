module.exports = (roles) => {
  return (req, res, next) => {
    if (
      req.session &&
      req.session.user &&
      roles.includes(req.session.user.role)
    ) {
      next();
    } else {
      res.status(403).json({ error: "Forbidden" });
    }
  };
};
