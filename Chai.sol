// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Chai{
    struct memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo[] memos;
    address payable owner; //owner is payable in nature, owner recieves funds

    constructor(){
        owner = payable(msg.sender); //normal to payable not passolble so typecast it to payable
    }
}