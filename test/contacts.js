const Contacts = artifacts.require("Contacts");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Contacts", function (accounts) {
  let contactsInstance;

  before(async () =>{
    contactsInstance = await Contacts.deployed();
  });

  it("should add a contact", async () => {
    const initialContacts = await contactsInstance.getContacts();
    assert.equal(initialContacts.length, 0, 'Initial contacts array should be empty');

    const name = 'John Doe';
    const phone = '123-456-7890';
    const email = 'john@example.com';

    await contactsInstance.addContact(name, phone, email);

    const updatedContacts = await contactsInstance.getContacts();
    assert.equal(updatedContacts.length, 1, 'Contacts array should have one entry');

    const addedContact = updatedContacts[0];
    assert.equal(addedContact.fullName, name, 'Contacts name should match');
    assert.equal(addedContact.primaryPhone, phone, 'Phone number should match');
    assert.equal(addedContact.emailAddress, email, 'Email should match');
  });

});
