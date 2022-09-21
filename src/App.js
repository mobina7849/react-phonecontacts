import logo from "./logo.svg";
import "./App.css";
import Form from './component/Form';
//import "./Form.style.css"
//import "./Table.style.css"
//import "./Search.style.css"
import  mm from "./images/download.jpg"
import React, { useState,useEffect } from "react";
import Search from "./component/Search";
import Table from "./component/Table";
//import { createConfirmation } from 'react-confirm';

function App() {
  //useEffect

  const [contacts, setContacts] = useState([
    {
      id: "0",
      userProfile: "https://picsum.photos/20",
      name: "nahid",
      email: "email@gmail.com",
      phone: "0987687654",
      age: "12",
      country: "iran",
      favorite: false,
    },
    {
      id: "1",
      userProfile: "https://picsum.photos/20",
      name: "reza",
      email: "email@gmail.com",
      phone: "0987687654",
      age: "34",
      country: "aragh",
      favorite: true,
    },
    {
      id: "2",
      userProfile: "https://picsum.photos/20",
      name: "ali",
      email: "email@gmail.com",
      phone: "0987687654",
      age: "67",
      country: "turkey",
      favorite: false,
    },
    {
      id: "3",
      userProfile: "https://picsum.photos/20",
      name: "shahin",
      email: "email@gmail.com",
      phone: "0987687654",
      age: "54",
      country: "rom",
      favorite: true,
    },
  ]);
  const [formData, setFormData] = useState({
    id: "0",
    userProfile: "img",
    name: "",
    email: "",
    phone: "",
    age: "",
    country: "",
    favorite: false,
  });
  const[formStatus,setFormStatus]=useState("add")
  const[favoriteStatus,setFavoriteStatus]=useState("all")
  const[filtered,setFiltered]=useState([])
  const[search,setSearch]=useState("")
  const[show,setShow]=useState(false)
  useEffect(()=>{
    handleFilter();
  },[contacts,favoriteStatus])

  const handleFilter=()=>{
    switch(favoriteStatus){
      case 'favorite':
        setFiltered(contacts.filter(contact=>contact.favorite===true))
        break;
      case 'usual':
        setFiltered(contacts.filter(contact=>contact.favorite===false))
        break;
      default:
        setFiltered(contacts)
        break;
    }

  }
  return (
    <div className="container">
      <div className="myprofile">
        <div className="leftProfile">
          <picture>
          <img className="myImg" src={mm}/>
          </picture>
          <p>
          <div className="bold">My Profile</div>
          <div className="Name">Mobina Abbasi</div>
          <div className="Email">mobina.abbasi7849@gmail.com</div>
          </p>
        </div>
        <div>
          <button className="btnProfile" style={{ background: show ? 'linear-gradient(to right,#F11712, #f4e2d8)' : "linear-gradient(to right,#AA31C2, #f4e2d8)"}} onClick={()=>setShow(!show)}>
            {show? "Close":"Add contact"}
          </button>
        </div>
      </div>
      {
        show?<Form formData={formData} setFormData={setFormData} formStatus={formStatus} setFormStatus={setFormStatus} contacts={contacts} setContacts={setContacts} setShow={setShow}/>:null
      }
      <Search setFavoriteStatus={setFavoriteStatus} setSearch={setSearch}/>
      <div className="table">
        <table
          style={{
            width: "100%",
            height:"auto"
          }}
        >
          <thead>
            <tr className="row1">
              <th className="dNone">id</th>
              <th>user profile</th>
              <th className="dNone">age</th>
              <th className="dNone">country</th>
              <th>favorite</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.filter(item=>item.name.toLowerCase().includes(search)).map((contact) => (
              <Table contacts={contacts} setContacts={setContacts} setShow={setShow} setFormData={setFormData} setFormStatus={setFormStatus} contact={contact} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
