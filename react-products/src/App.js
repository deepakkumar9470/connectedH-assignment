import React,{useState,useEffect} from 'react'
import './app.css'

import {BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom";
  
import Navbar from './components/Navbar'
import Home from './components/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Pagination from './components/Pagination/Pagination';
import axios from 'axios';
import ProtectedRoute from './ProtectedRoute';


function App() {

    const [products,setProducts] = useState([])
    const[currentPage,setCurrentPage]=useState(1);
    const[postsPerPage,setPostsPerPage]=useState(5);

    useEffect(() => {
             const getProducts = async () =>{
                 try {
                     const res = await axios.get('http://localhost:5000/api/products')
                     console.log(res)
                     setProducts(res.data.products)
                 } catch (error) {
                     console.log(error)
                 }
             }
             getProducts()
    }, [])


    const indexofLastPost=currentPage * postsPerPage;
    const indexofFirstPost=indexofLastPost - postsPerPage;
    const currentPost= products.slice(indexofFirstPost, indexofLastPost);
    
    const paginate=(pageNo)=>{
      setCurrentPage(pageNo);
    }

    return ( 
        <div>
        <Router>
        <div className="App">
            
            <Navbar/>
             <Routes>
               {/* <Route exact path="/" element={<Home products={currentPost} />} /> */}
               
                {/* <ProtectedRoute path="/" element={<Home products={currentPost} />} /> */}
                
               <Route path="/" element={<Home products={currentPost}/>}/>
                 
              
               <Route path="/signup" element={<Signup />} />
               <Route path="/login" element={<Login />} />
               
            </Routes>
            </div>
            
        </Router>
        <Pagination 
                postsPerPage={postsPerPage} 
                totalEpisode={products.length} 
                paginate={paginate}
            />
        </div>
    )

}

export default  App