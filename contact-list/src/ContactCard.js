import React, {useState} from "react";
import "./styles.css";

const ContactCard = props => {
  // useState Hook (true) makes sure it's starts in the true state.
  // onClick event changing state of the showAge. 
  
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>
			    Toggle Age 
		    </button>
        {showAge && <p>Age: {props.age}</p>}
      </div>
    </div>
  );
};
  

export default ContactCard;