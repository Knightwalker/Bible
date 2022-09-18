
const authenticateAdmin = (req, res, next) => {
  if (typeof req.session.bUserIsAuthenticated === "undefined") {
    return res.send("You need to login with admin account");
  }
  if (typeof req.session.bUserIsAuthenticated != "undefined" && req.session.bUserIsAuthenticated === true) {
    if (req.session.objUser.user_id != "5ff6e22bbf00790f243a3d5e") {
      return res.send("You need to login with admin account");
    }
  }

  next();
}

module.exports = {
  authenticateAdmin:authenticateAdmin
}