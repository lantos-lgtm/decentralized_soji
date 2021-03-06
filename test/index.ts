import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", function () {
    it("Should return the new greeting once it's changed", async function () {
        const Greeter = await ethers.getContractFactory("Greeter");
        const greeter = await Greeter.deploy("Hello, world!");
        await greeter.deployed();

        expect(await greeter.greet()).to.equal("Hello, world!");

        const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

        // wait until the transaction is mined
        await setGreetingTx.wait();

        expect(await greeter.greet()).to.equal("Hola, mundo!");
    });
});


describe("SojiNFT", function () {
    it("Should mint a soji", async function () {
        const SojiNFT = await ethers.getContractFactory("SojiNft");
        const sojiNFT = await SojiNFT.deploy();
        await sojiNFT.deployed();

        const mintTx = await sojiNFT.mintSpecialSOJI(
            "Darling",
            "zerotwo says darling",
            "ipfs://QmVVPeKMwWv4iUzzGvZRyLi5D5qBjsw6oHuYwwc6WbWfBZ",
            "ipfs://QmPnXjkAz28XwihzCuJRWw7r2cF89hzRTfTu69WpkK6fn7",
            "['darling', 'zerotwo']"

        );
        
    })
});