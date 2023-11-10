import { ethers } from "hardhat";

async function main() {
    const timeStampInSec = Math.round(Date.now() / 1000);

    const contactsContract = await ethers.deployContract('Contacts');
    const deployedContacts = await contactsContract.waitForDeployment();

    return [
        `Contacts Contract deployed to: ${await deployedContacts.getAddress()}`
    ];
}

// We recommend this pattern to be able to use async/await everywhere and properly handle errors.
main()
    .then((result) => {
        console.info(result)
        process.exit(0)
    })
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
