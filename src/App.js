import React, { useState } from "react";
import Contact from "./components/Contact";

import "./styles/app.css";
import ContactAdder from "./components/ContactAdder";
import NavBar from "./components/NavBar";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContactData = (contactData) => {
    const allContacts = [contactData, ...contacts];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };

  const clearAllContacts = () => {
    localStorage.clear();
    setContacts([]);
  }

  return (
    <>
      <NavBar />
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>

      <div className="contact_list">
        <h3>Contact list</h3>

        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}

        <button onClick={clearAllContacts} style={{background:"#cc0800"}}>Clear All Contact</button>
      </div>
    </>
  );
};

export default App;
