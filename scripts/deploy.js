// scripts/deploy.js

const { ethers } = require("hardhat");

async function main() {
  const MyERC721 = await ethers.getContractFactory("MyERC721");

  console.log("Deploying MyERC721Token...");
  const myERC721 = await MyERC721.deploy(
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  );

  await myERC721.deployed();

  console.log("MyERC721Token deployed to:", myERC721.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

