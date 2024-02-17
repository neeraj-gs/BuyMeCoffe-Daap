// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Chai{
    struct Memo{
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


    function buyChai(string calldata name,string calldata message) external payable{
        //external because we will not be calling within the function
        require(msg.value>0,"Too Low Funds, Has to be Greater thn 0");
        owner.transfer(msg.value);
        memos.push(Memo(name,message,block.timestamp,msg.sender));
    }











}