import React from 'react'
import "../style/cart.css"
import {Link} from "react-router-dom"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection"
import {Container,Col,Row} from "reactstrap"
import { toast } from "react-toastify";
import {motion} from "framer-motion";
import {cartActions} from "../redux/slices/cartSlice"
import {useSelector,useDispatch} from 'react-redux'

const Cart = ({item}) => {
  const cartItems=useSelector((state)=>state.cart.cartItems);
const totalAmount=useSelector(state=>state.cart.totalAmount)


  return (
   <Helmet title={"cart"}>
    <CommonSection title="ShoppingCart"/>
<section>
  <Container>
    <Row>
      <Col lg='9'> 
      {
        cartItems.length===0?(<h2 className='fs-4 text-center'>No Items Added</h2>):(
          <table className='table bordered'>
          <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Delete</th>
        
          </tr>
          </thead>
          <tbody>
          {
            cartItems.map((item,index)=>(
             <Tr item={item} key={index} />
            ))
          }
          </tbody>
        </table>
        
        )
      }

      
     
      
       </Col>

      <Col lg='3'> 
      <div>
        <h6>
subTotal
          </h6>
          <span>{totalAmount}</span>
          </div> 
          <p className='fs-6 mt-2'>taxes and shipping will calculated in checkout</p>
          <button className='buy__btn w-100'><Link to='/shop'>Continue Shopping</Link></button>

          <button className='buy__btn w-100 mt-3'><Link to='/checkout'>CheckOut</Link></button>


          </Col>
      
    </Row>
  </Container>
</section>
   </Helmet>
  )
}
const Tr=({item})=>{
  const dispatch = useDispatch();
  const deleteItem= () => {
    dispatch(
      cartActions.removeItem(item.id)
    );
 
  };
  return  <tr >
  <td><img src={item.imgUrl} alt=''  /></td>
  <td>{item.productName}</td>
  <td>{item.price}</td>
  <td>{item.quantity}</td>
  <motion.td onClick={deleteItem} whileTap={{scale:1.2}} ><span><i class="ri-delete-bin-fill"></i></span></motion.td>

  </tr>
}

export default Cart