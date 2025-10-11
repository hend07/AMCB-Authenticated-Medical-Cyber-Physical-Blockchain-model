import web3 from './web3';
import Record from './build/Record.json';

const instance = new web3.eth.Contract(
    JSON.parse(Record.interface),
   // '0x101B340A90F3be8eE5f755fDb1F87674C09061DF' //Deployed Contract Code //Everytime contract code is changed and compiled, need to update this
   // '0xd80402762dAb67f486Ace859D24dD7b764A326B1'
    // '0x8F500fcA7F01aCCF06493bf8fB3F718e1679DBd9'
     '0x7815Dc3728a54d47Df8374Cd010226e7aD17c727'
    );

export default instance;

//Whenever there is a change in Solidity code, use this few commands
//Step 1: cd ethereum
//Step 2: node compile.js
//Step 3: node deploy.js
//Step 4: Paste the contract deployed address above