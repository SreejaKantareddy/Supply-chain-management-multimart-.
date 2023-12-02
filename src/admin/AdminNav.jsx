

import React from 'react'
import {Container,Row,Col} from "reactstrap";
import useAuth from '../custom-hooks/useAuth';
import "../style/admin-nav.css"
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import {auth} from "../firebase.config"
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const admin__nav=[
    {
    path:'/dashboard',
    display:'Dashboard'
   },
   {
    path:'/dashboard/all-products',
    display:'All-Products'
   },
   {
    path:'/home',
    display:'Home'
   },
   {
    path:'/dashboard/users',
    display:'Users'
   },
  {     path:'dashboard/add-product',
     display:'Add-Product'
    }
   
  
  
  ]
  const AdminNav = () => {

    

        const navigate=useNavigate()

    const {currentUser}=useAuth()

    const logout =()=>{
        signOut(auth).then(()=>{
          toast.success('LoggedOut')
          navigate('/')
        }).catch(err=>{
          toString.error(err.message)
        }
      
        )
      }
    
        
      
  return(
  <>
  <header className='admin__header'>
    <div className="admin__nav-top">
        <Container>
            <div className="admin__nav-wrapper-top">
                <div className="logo">
                    <h2>Multimart</h2>
                </div>
                <div className="search__box">
                    <input type='text' placeholder='Search....'   />
                    <span><i class="ri-search-line"></i></span>
                </div>
                <div className="admin__nav-top-right">
                    <span><i class="ri-notification-line"></i></span>
                    <span><i class="ri-settings-2-line"></i></span>
                    <img src={ currentUser && currentUser.photoURL} alt=''  />
                    <span onClick={logout}>Logout</span>

                </div>
            </div>
            </Container>
    </div>

  </header>

<section className="admin__menu p-0">
    <Container>
        <Row>
            <div className="admin__navigation">
                <ul className="admin__menu-list">
                    {
                        admin__nav.map((items,index)=>(

                            <li className='admin__menu-item' key={index}> 
                              <NavLink to={items.path} className={navClass=>navClass.isActive?'active__admin_menu':''}>{items.display}</NavLink>
                              </li>
                         
                        ))
                    }

                </ul>
            </div>
        </Row>
    </Container>
</section>

  </>

  
  )
}
  

export default AdminNav