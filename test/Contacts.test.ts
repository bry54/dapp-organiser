import { assert } from 'chai';
import { ethers } from 'hardhat';

describe('Contacts Contract', () => {
  it('Should deploy Contacts contract', async () => {
    const Contacts = await ethers.getContractFactory('Contacts');
    const ContactsInstance = await Contacts.deploy();
    await ContactsInstance.deployed();
    assert.isTrue(ContactsInstance.address !== '', 'Contract not deployed');
  });
});
