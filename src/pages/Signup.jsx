
import React,{useState} from 'react'
import Helmet from '../components/Helmet/Helmet';
import {Container,Row,Col,Form,FormGroup} from 'reactstrap';
import {Link} from 'react-router-dom';
import "../style/login.css"
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";

import { ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage';
import { setDoc,doc } from 'firebase/firestore';

import {db} from "../firebase.config"
import {storage} from '../firebase.config'
import {auth} from "../firebase.config"

import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [email,setEmail]=useState('');
  const [username,setUserName]=useState('');
  const [file,setFiles]=useState(null)
  const [password,setPassword]=useState('')
  const [loading,setLoading]=useState(false);

  const navigate =useNavigate()
  const signup=async(e)=>{
    e.preventDefault();
     setLoading(true);
    try{
       const userCredential= await createUserWithEmailAndPassword(auth, email, password)
      const user =  userCredential.user;
      const storageRef=ref(storage,`images/${Date.now()+username}`)
      const uploadTask=uploadBytesResumable(storageRef, file)
     
      uploadTask.on(
        (error)=>{
        toast.error(error.message)
      },
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(
          async(downloadUrl)=>{
       
       //update user profile
          await  updateProfile(user,{
            displayName:username,
            photoURL:downloadUrl
          })
//store user data in firestore database
await setDoc(doc(db, "users" ,user.uid),{
  uid:user.uid,
  displayName:username,
  email,
  photoURL:downloadUrl
})


        })
      })
setLoading(false)

toast.success('Account Created')
navigate('/login')
    }catch(error){
   toast.error(error.message)

    }
  }
  return <Helmet title='Signup' >
    <section>
      <Container>
        <Row>
          {
            loading?<Col lg='12' className='text-center'><h6>Loading....</h6></Col>:<Col lg='6' className='m-auto text-center' >
            <h3 className='fw-bold mb-4' >Signup</h3>
            <Form className='auth__form' onSubmit={signup} >
            <FormGroup  className='form__group'>
                <input type='text' placeholder='UserName ' value={username} onChange={e=>setUserName(e.target.value)} />
              </FormGroup>
              <FormGroup  className='form__group'>
                <input type='email' placeholder='Enter your email' value={email} onChange={e=>setEmail(e.target.value)} />
              </FormGroup>
              <FormGroup  className='form__group'>
                <input type='password' placeholder='Enter your Password'  value={password} onChange={e=>setPassword(e.target.value)}/>
              </FormGroup>
              <FormGroup  className='form__group'>
                <input type='file'
                 onChange={e=>setFiles(e.target.files[0])}/>
              </FormGroup>
              <button  type="submit" className='buy__btn login__btn'>Create an Account</button>
              <p>Already have an account?{" "}<Link to='/login'>Login</Link>  
              </p>
            </Form>

          </Col>
          }
          
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default Signup