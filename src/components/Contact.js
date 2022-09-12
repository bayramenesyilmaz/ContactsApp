import {useEffect, useState} from "react";
import List from "./List/List";
import Form from "./Form/Form";

function Contact(){

    const [contact, setContact] = useState([
        {
            fullName:"Mehmet",
            phone_number: 123
        },
        {
            fullName:"Ahmet",
            phone_number: 456
        },
        {
            fullName:"Hüseyin",
            phone_number: 789
        }

])

    return(
        <div className="main">
            <h1>Contacts</h1>
            <List listContact = {contact} />
            <Form addContact={setContact} contact={contact} />
        </div>
          
    )
}

export default Contact;