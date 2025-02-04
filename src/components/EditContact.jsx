import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function EditContact(props)
{
    const { id } = useParams()
    const { contacts, editContact } = props
    const contact = contacts[id - 1]

    const INITIAL_CONTACT =
    {
        firstName: contact.firstName,
        lastName: contact.lastName,
        street: contact.street,
        city: contact.city,
        id: contact.id
    }
    const [newContact, setNewContact] = useState(INITIAL_CONTACT)

    const handleInput = (event) =>
    {
        const { name, value } = event.target
        setNewContact({...newContact, [name]: value})
    }

    const navigate = useNavigate()
    const handleClick = () =>
    {
        editContact({newContact})
        navigate(`/contacts/${contact.id}`)
    }

    return (
        <>
            <h1>Edit Contact</h1>

            <h2>First Name:</h2>
            <input type="text" name="firstName" value={newContact.firstName} onChange={handleInput}/>
            
            <h2>Last Name:</h2>
            <input type="text" name="lastName" value={newContact.lastName} onChange={handleInput}/>
            
            <h2>Street:</h2>
            <input type="text" name="street" value={newContact.street} onChange={handleInput}/>
            
            <h2>City:</h2>
            <input type="text" name="city" value={newContact.city} onChange={handleInput}/>

            <button onClick={handleClick}>Save</button>
        </>
    )
}