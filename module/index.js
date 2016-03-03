exports.main = function() {
  var welcome = "Welcome to Open War Prototype v" + process.env.npm_package_version;
  console.log(welcome);
  return welcome;
};