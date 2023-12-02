

import React from 'react'
import {Container,Row,Col} from "reactstrap"
import useGetData from '../custom-hooks/useGetData'
import { db } from '../firebase.config'
import {doc,deleteDoc} from "firebase/firestore"
import { toast } from 'react-toastify'

const Users = () => {
    const {data:userData,loading}=useGetData('users')
    const deleteUser=async(id)=>{
        await deleteDoc(doc(db,'users',id))
        toast.success('User Deleted!')
      }
      


  return (
    <Container>
        <Row>
            <Col lg='12'><h4 className='fw-bold align-items-center'>Users</h4></Col>
            <Col lg='12' className='pt-5'>
<table className='table'>
<thead>
    <tr>
        <th>Image</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Action</th>
        
    </tr>
</thead>
<tbody>
    {
        loading?<h4 className='pt-5 fw-bold'>Loading....</h4>
    : userData?.map(user=>(
        <tr key={user.uid}>
            <td><img src={user.photoUrl} alt=''/></td>
            <td>{user.displayNmae}</td>
            <td>{user.email}</td>
            <td><button onClick={()=>{deleteUser(user.uid)}} className='btn btn-danger'>Delete</button></td>
        </tr>
    ))
    }
</tbody>
</table>


            </Col>
        </Row>
    </Container>
  )
}

export default Users