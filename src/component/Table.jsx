import React from 'react';
import './Table.style.css'
const Table = ({setContacts,contacts,setShow,setFormData,setFormStatus,contact}) => {
    const handleDelete = (id) => {
        if (window.confirm("Do you want to delete this contact?")) {
          setContacts(contacts.filter((contact) => contact.id !== id));
        }
      };
    const handleFavorite = (id) => {
        setContacts(
          contacts.map((contact) =>
            contact.id === id
              ? { ...contact, favorite: !contact.favorite }
              : contact
          )
        );
      };
    
      const handleUpdate=(contact)=>{
        setShow(true)
        //console.log('lkjuhg')
        setFormData(contact)
        setFormStatus("update")
        
      }
    return ( 
        <tr key={contact.id} className="row">
            <td className='dNone'>{contact.id}</td>
            <td className="profile">
            <picture>
                <img src={`https://picsum.photos/id/${(contact.id)*10}/50/50`} className="imgProfile"/>
            </picture>
            <div className="content">
                <p className='name'>{contact.name}</p>
                <p className='email'>{contact.email}</p>  
                <p className='phone'>{contact.phone}</p>
            </div>
            </td>
            <td className='dNone'>{contact.age}</td>
            <td className='dNone'>{contact.country}</td>
            <td  className='favorite' onClick={() => handleFavorite(contact.id)}>
                {contact.favorite ? (
                <iconify-icon
                 icon="material-symbols:favorite"
                 style={{ color: "red", width: "30", height: "30" }}
                 ></iconify-icon>
             ) : (
                 <iconify-icon
                 icon="ic:twotone-favorite-border"
                 style={{ color: " red", width: "30", height: "30" }}
                  ></iconify-icon>
            )}
            </td>
            <td className='btns'>
                <button onClick={() => handleDelete(contact.id)}>
                <iconify-icon icon="fluent:delete-24-filled" style={{color:"red", width:"30" ,height:"30"}}></iconify-icon>
                </button>
                <button onClick={() => handleUpdate(contact)}><iconify-icon icon="akar-icons:edit" style={{color: "blue", width:"40" ,height:"40"}}></iconify-icon></button>
            </td>
        </tr>
     );
}
 
export default Table;