const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
    // URL from where we can extract the metadata for a LW3Punks
    const metadataURL = "ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/";

    const lw3Contract = await ethers.getContractFactory("LW3Punks");

    const deployedLW3Contract = await lw3Contract.deploy(metadataURL);

    await deployedLW3Contract.deployed();

    // print the address of the deployed contract
    console.log("LW3Punks Contract Address:", deployedLW3Contract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });