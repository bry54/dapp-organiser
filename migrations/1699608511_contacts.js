const Contacts = artifacts.require('Contacts');

module.exports = function(_deployer) {
  _deployer.deploy(Contacts)
};
