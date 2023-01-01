// const ethers = require("ethers");
// const fs = require("fs");
// require("dotenv").config();
import {ethers} from "ethers";
import * as fs from "fs";
import "dotenv/config";

/* I had issues deploying the contract using the JsonRpcProvider provided by Ganache with WSL */
async function main() {
    const provider = new ethers.providers.JsonRpcProvider(
        process.env.ALCHEMY_RPC_URL!
    );
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
    const abi = fs.readFileSync(
        "./SimpleStorage_sol_SimpleStorage.abi",
        "utf8"
    );
    const binary = fs.readFileSync(
        "./SimpleStorage_sol_SimpleStorage.bin",
        "utf8"
    );

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying contract!");
    const contract = await contractFactory.deploy();
    //   console.log(contract);
    //   console.log("Here is the deployed transaction\n", contract.deployTransaction);
    const transactionReceipt = await contract.deployTransaction.wait(1);

    //   console.log("Let's deployed with only transaction data!");
    //   const nonce = await wallet.getTransactionCount();
    //   const tx = {
    //     nonce: nonce,
    //     gasPrice: 20000000000,
    //     gasLimit: 1000000,
    //     to: null,
    //     value: 0,
    //     data : "0x608060405234801561001057600080fd5b5061088f806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632e64cec1146100515780636057361d1461006f5780636f760f411461008b5780639e7a13ad146100a7575b600080fd5b6100596100d8565b604051610066919061024f565b60405180910390f35b610089600480360381019061008491906102aa565b6100e1565b005b6100a560048036038101906100a0919061041d565b6100eb565b005b6100c160048036038101906100bc91906102aa565b61017a565b6040516100cf9291906104f8565b60405180910390f35b60008054905090565b8060008190555050565b60006040518060400160405280848152602001838152509050600181908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190816101459190610734565b50602082015181600101555050816002846040516101639190610842565b908152602001604051809103902081905550505050565b6001818154811061018a57600080fd5b90600052602060002090600202016000915090508060000180546101ad90610557565b80601f01602080910402602001604051908101604052809291908181526020018280546101d990610557565b80156102265780601f106101fb57610100808354040283529160200191610226565b820191906000526020600020905b81548152906001019060200180831161020957829003601f168201915b5050505050908060010154905082565b6000819050919050565b61024981610236565b82525050565b60006020820190506102646000830184610240565b92915050565b6000604051905090565b600080fd5b600080fd5b61028781610236565b811461029257600080fd5b50565b6000813590506102a48161027e565b92915050565b6000602082840312156102c0576102bf610274565b5b60006102ce84828501610295565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61032a826102e1565b810181811067ffffffffffffffff82111715610349576103486102f2565b5b80604052505050565b600061035c61026a565b90506103688282610321565b919050565b600067ffffffffffffffff821115610388576103876102f2565b5b610391826102e1565b9050602081019050919050565b82818337600083830152505050565b60006103c06103bb8461036d565b610352565b9050828152602081018484840111156103dc576103db6102dc565b5b6103e784828561039e565b509392505050565b600082601f830112610404576104036102d7565b5b81356104148482602086016103ad565b91505092915050565b6000806040838503121561043457610433610274565b5b600083013567ffffffffffffffff81111561045257610451610279565b5b61045e858286016103ef565b925050602061046f85828601610295565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b838110156104b3578082015181840152602081019050610498565b60008484015250505050565b60006104ca82610479565b6104d48185610484565b93506104e4818560208601610495565b6104ed816102e1565b840191505092915050565b6000604082019050818103600083015261051281856104bf565b90506105216020830184610240565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061056f57607f821691505b60208210810361058257610581610528565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026105ea7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826105ad565b6105f486836105ad565b95508019841693508086168417925050509392505050565b6000819050919050565b600061063161062c61062784610236565b61060c565b610236565b9050919050565b6000819050919050565b61064b83610616565b61065f61065782610638565b8484546105ba565b825550505050565b600090565b610674610667565b61067f818484610642565b505050565b5b818110156106a35761069860008261066c565b600181019050610685565b5050565b601f8211156106e8576106b981610588565b6106c28461059d565b810160208510156106d1578190505b6106e56106dd8561059d565b830182610684565b50505b505050565b600082821c905092915050565b600061070b600019846008026106ed565b1980831691505092915050565b600061072483836106fa565b9150826002028217905092915050565b61073d82610479565b67ffffffffffffffff811115610756576107556102f2565b5b6107608254610557565b61076b8282856106a7565b600060209050601f83116001811461079e576000841561078c578287015190505b6107968582610718565b8655506107fe565b601f1984166107ac86610588565b60005b828110156107d4578489015182556001820191506020850194506020810190506107af565b868310156107f157848901516107ed601f8916826106fa565b8355505b6001600288020188555050505b505050505050565b600081905092915050565b600061081c82610479565b6108268185610806565b9350610836818560208601610495565b80840191505092915050565b600061084e8284610811565b91508190509291505056fea264697066735822122050724f502f5d6f44e8563b38b34b404297b3e5a96a53ef7acbfc556b3e19778c64736f6c63430008110033",
    //     chainId: 1337,
    //   };
    // //   const singedTxResponse = await wallet.signTransaction(tx);
    // //   console.log(singedTxResponse);
    //   // Sending a transaction using ethers automatically signs the transaction before signing it
    //   const sentTxResponse = await wallet.sendTransaction(tx);
    //   await sentTxResponse.wait(1);
    //   console.log(sentTxResponse);
    /* Interacting with the contract */
    const currentFavoriteNumber = await contract.retrieve();
    console.log(
        `Current favorite number : ${currentFavoriteNumber.toString()}`
    );
    const transactionResp = await contract.store("70");
    await transactionResp.wait(1);
    const updatedFavoriteNum = await contract.retrieve();
    console.log(`The updated favorite number : ${updatedFavoriteNum}`);
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });