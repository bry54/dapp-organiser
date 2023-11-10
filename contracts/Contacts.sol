// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Contacts {

    struct Contact {
        string fullName;
        string primaryPhone;
        string emailAddress;
    }

    address public owner;

    mapping(address => Contact[]) private contacts;

    event ContactAdded(address indexed user, string fullName, string primaryPhone, string emailAddress);

    constructor() {
        owner = msg.sender;
    }

    function addContact(string memory _fullName, string memory _primaryPhone, string memory _emailAddress) public {
        Contact memory newContact = Contact(_fullName, _primaryPhone, _emailAddress);
        contacts[msg.sender].push(newContact);
        emit ContactAdded(msg.sender, _fullName, _primaryPhone, _emailAddress);
    }

    function getContacts() public view returns (Contact[] memory) {
        return contacts[msg.sender];
    }
}
