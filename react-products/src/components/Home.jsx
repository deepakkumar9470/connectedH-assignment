import React,{useState,useEffect} from 'react'
import './Home.css'
import {FaRupeeSign} from 'react-icons/fa'


import Cookies from "universal-cookie";
const cookies = new Cookies();

const Home = ({products}) => {
    const [message, setMessage] = useState("");


  //  useEffect(() => {
  //     const configuration = {
  //       method: "get",
  //       url: "http://localhost:5000/api/products",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },

  //     };

  //     try {
  //       const res =   axios(configuration)
  //        setMessage(res.data.msg) 
  //     } catch (error) {
  //       error = new Error();   
  //     }


  //  }, [])


    return (
          <div className="table-responsive container ">

                <table className="table mt-4">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Picture</th>
                    </tr>
                </thead>
                <tbody>
                { 
                       products?.map((p,i)=>{
                           return (
                              
                               <tr key={i}>
                                   <td className="p_id">{p._id}</td>
                                   <td className="p_name">{p.name}</td>
                                   <td className="p_price"><FaRupeeSign/> {p.price} /-</td>
                                   <td className="text-center">
                                       <img  className="p_image" src={p.pic} alt="productpic" />
                                   </td>
                               </tr>
                           )
                       })

                    }  
                   
                </tbody>
                </table>

          </div>
          
    )
}

export default Home
