pragma solidity ^0.4.17;

contract Adder {

  uint private a = 0;
  event ANumberIsAdded(uint value);

  function add(uint i) public {
    a += i;
    ANumberIsAdded(i);
  }

  function getA() public view returns (uint) {
    return a;
  }

}
