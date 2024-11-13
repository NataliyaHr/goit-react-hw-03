import "./App.css";
import contacts from "./users.json";
import ContactList from "./components/ContactList/ContactList";
import Searchbox from "./components/SearchBox/Searchbox";
import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [searchContact, setSearchContact] = useState("");
  const [contactList, setContactList] = useState(() => {
    const saveData = localStorage.getItem("contacts");
    return saveData ? JSON.parse(saveData) : contacts;
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  const handleFilterChange = (event) => {
    setSearchContact(event.target.value);
  };

  const filteredContacts = searchContact
    ? contactList.filter((contact) =>
        contact.name.toLowerCase().includes(searchContact.toLowerCase())
      )
    : contactList;

  const addContact = (newContact) => {
    setContactList((prevContacts) => [...prevContacts, newContact]);
  };
  const deleteContact = (targetId) => {
    setContactList((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== targetId)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm onAdd={addContact} />
      <Searchbox value={searchContact} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;