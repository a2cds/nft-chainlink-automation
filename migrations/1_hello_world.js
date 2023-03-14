const HelloWorld = artifacts.require("HelloWorld");

module.exports = async function (deployer, _network, accounts) {
    await deployer.deploy(HelloWorld, "Antonio Carlos da Silva");
}