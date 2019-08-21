pragma solidity ^0.5.0;

contract TodoList {

  constructor () public {
    createTask("Check out dappuniversity.com");
  }
  
  uint public taskCount = 0; // "state variable"

  struct Task {
    uint id;
    string content;
    bool completed;
  }

  mapping (uint => Task) public tasks;

  function createTask(string memory _content) public {
    taskCount++;
    tasks[taskCount] = Task(taskCount, _content, false);
  }

}