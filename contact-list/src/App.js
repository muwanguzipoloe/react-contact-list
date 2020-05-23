import React, {useState, useEffect} from "react";
import "./styles.css";
import ContactCard from "./ContactCard"


const App = () => {
/* 
    state object initialized as empty array, 
    when API call is made it will update the contact list.
    The rendering logic within the JSX will look for this array.
*/

  const [contacts, setContacts] = useState([]);
/*
    API call asking for 5 results using fetch and being run by 
    useEffect hook (with a dependency array as a second argument 
    to the hook to specify "only run once").
*/
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setContacts(data.results);
      });
  }, []);

  return (
    <>
      {contacts.map(contact => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}
    </>
  );
};


export default App;