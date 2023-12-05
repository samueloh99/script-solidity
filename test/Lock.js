const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("UIntFunctions library", function () {
  let testContract;

  before(async function () {
    const TestUIntFunctions = await ethers.getContractFactory(
      "TestUIntFunctions"
    );
    testContract = await TestUIntFunctions.deploy();
    await testContract.deployed();
  });

  it("should return true for even numbers", async function () {
    expect(await testContract.testIsEven(2)).to.be.true;
    expect(await testContract.testIsEven(10)).to.be.true;
    expect(await testContract.testIsEven(0)).to.be.true; // Zero is even
  });

  it("should return false for odd numbers", async function () {
    expect(await testContract.testIsEven(1)).to.be.false;
    expect(await testContract.testIsEven(9)).to.be.false;
    expect(await testContract.testIsEven(11)).to.be.false;
  });
});
