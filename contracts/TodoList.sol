// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract TodoList {
    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Task) public tasks;
    uint public taskCount;
    address public owner;

    event TaskCreated(uint id, string content, bool completed);
    event TaskCompleted(uint id, bool completed);

    constructor() {
        owner = msg.sender;
    }

    function createTask(string memory _content) public {
        require(msg.sender == owner, "Only owner can add tasks");
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
        emit TaskCreated(taskCount, _content, false);
    }

    function toggleTask(uint _id) public {
        require(msg.sender == owner, "Only owner can toggle tasks");
        Task storage task = tasks[_id];
        task.completed = !task.completed;
        emit TaskCompleted(_id, task.completed);
    }

    function getTask(uint _id) public view returns (uint, string memory, bool) {
        Task memory t = tasks[_id];
        return (t.id, t.content, t.completed);
    }
}
