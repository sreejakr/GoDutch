import React, { Fragment, useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'
import './styles/Bills.css';
import Bill from "../assets/icons/Bill.png"
import CreateBillIcon from '../assets/icons/CreateBillIcon.png';
import CreateBill from './CreateBill';


const Bills = () => {
    var user
    const history = useNavigate()
    const [items] = useState([
        {
            title: "BILL 1",
            date: "July 1st, 2023",
        },
        {
            title: "BILL 2",
            date: "July 1st, 2023",
        }
    ])
    const [showModal, setShowModal] = useState(false);

    //useeffect runs on every render
    useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			 user = jwt.decode(token)
			if (!user) {
				localStorage.removeItem('token')
				history.replace('/login')
			} else {
				console.log('logged in successfully')
			}
		}
	}, [])

   const Card = (props) =>{
    return (<div className="card">
            <img src={Bill} className="logo-img" width="40%" />
            <h2 className="card_title">{props.title}</h2>
            <div className="vl"/>
            <p className="card_description">{props.date}</p>
      </div>)
    }
    
    const addNewBill = ()=>{
        
    }
    return (
        <div className='body'>
        <button className="create-bill-button" onClick={
            ()=>setShowModal(true)
        }>
        <img src={CreateBillIcon} width="90%" />
         </button>
         <label className='create-bill-text'>CREATE NEW BILL</label>
        { items.map((item,i)=> (
         <div key = {i} className="wrapper">
            <Card
                title= {item.title}
                date= {item.date}
            />
        </div>
        ))}
        <CreateBill isVisible={showModal} onClose={() => setShowModal(false)}/>
        </div> 
    )
}

export default Bills;