
const hre = require("hardhat");

async function main() {
  const Chai = await hre.ethers.getContractFactory("Chai"); //fetching bytecode and ABI
  const chai = await Chai.deploy(); //creating an instance of our smart contract, and no arguments to thte constructor

  await chai.deployed();//deploying your smart contract

  console.log("Deployed contract address:",`${chai.address}`); //fetching adress after teh contract is deployed
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});