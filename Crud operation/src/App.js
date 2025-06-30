import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
export default function App() {
 
    // store all data
    const [api, setapi] = useState([]);
 
    const [id, setid] = useState(null);
    const [title1, settitle] = useState('');
    const [price1, setprice] = useState('');
    const [description1, setdescription] = useState('');
    const [category1, setcategory] = useState('');
    const [image1, setimage] = useState('');
   
 
    // const [rating, setrating] = useState([]);
 
      //edit true false
        const [editmode, seteditmode] = useState(false);
 
      // data delete  
   
         const [datadelete, setdatadelete] = useState(null);
 
    // editmode on
   
           const editmodeon= ()=>{
 
              seteditmode(true)
 
            }
         
            // datafetch
 
               const datafetch= async ()=>{
 
                    try {
                 const response = await axios.get('https://68230c9bb342dce8005070e5.mockapi.io/crudoperations1')
 
                      setapi(response.data)
                 
                    } catch (error) {
                     console.log("error is " + " "+ error)
                    }finally{
                       console.log("datafetch function call")
                    }
 
                 }
 
                    const deletedata= async (id)=>{
 
                    try {
                    await axios.delete(`https://68230c9bb342dce8005070e5.mockapi.io/crudoperations1/${id}`)
                          datafetch();
                    } catch (error) {
                     console.log("error is " + " "+ error)
                    }finally{
                       console.log("datafetch function call")
                    }
 
                 }
 
                 // datainsert
                          const insertdata= async (e)=>{
                            e.preventDefault()
 
                            const mydata={
 
                                   title1:title1,
                                   price1:price1,
                                   description1:description1,
                                   category1:category1,
                                   image1:image1,
                                 
                            }// key nd value api obec
 
                    try {
                    await axios.post(`https://68230c9bb342dce8005070e5.mockapi.io/crudoperations1`,mydata)
                              formreset();
                             datafetch();
                    } catch (error) {
                     console.log("error is " + " "+ error)
                    }finally{
                       console.log("datafetch function call")
                    }
 
                 }  
                     
                     const editdata= async (e)=>{
                            e.preventDefault()
                            const mydata={
                                   title1:title1,
                                   price1:price1,
                                   description1:description1,
                                   category1:category1,
                                   image1:image1,
                                 
                            }// key nd value
 
                    try {
                    await axios.put(`https://68230c9bb342dce8005070e5.mockapi.io/crudoperations1/${id}`,mydata)
                         seteditmode(false)
                         formreset();
                         datafetch();
 
 
                    } catch (error) {
                     console.log("error is " + " "+ error)
                    }finally{
                       console.log("datafetch function call")
                    }
 
                 }  
 
                    // formreset
 
                      const formreset = ()=>{
 
                             setid('');
                             settitle('');
                             setprice('');
                             setdescription('');
                             setcategory('');
                             setimage('');
                      }

                      
                     
            // use effect
         useEffect(() => {
          datafetch()
         }, []);  
  return (
    <div className='conatainer'>
           <form>
            <label>Enter title</label><br></br>
            <input type='text' value={title1} onChange={(e)=>settitle(e.target.value)}></input><br></br>
 
 
             <label>Enter price</label><br></br>
            <input type='text' value={price1} onChange={(e)=>setprice(e.target.value)}></input><br></br>
 
 
            <label>Enter description</label><br></br>
            <input type='text' value={description1} onChange={(e)=>setdescription(e.target.value)}></input><br></br>
 
 
             <label>Enter category</label><br></br>
            <input type='text' value={category1} onChange={(e)=>setcategory(e.target.value)}></input><br></br>
 
             <label>Enter image</label><br></br>
            <input type='text' value={image1} onChange={(e)=>setimage(e.target.value)}></input><br></br>
 
 
            <button onClick={(e)=>{
                     if(editmode){
                       editdata(e)
                     }else{
                        insertdata(e)
                     }
              }}>{editmode ? "editdata": "Adddata"}
              </button>
 
           </form>
 
           <table cellSpacing={20}>
             
              <tr>
               <th>id</th>
              <th>title</th>
              <th>price</th>
              <th>description</th>
              <th>category</th>
              <th>image</th>
              <th>Action</th>
              </tr>
              <tbody>
              {
  api.map((v) => (
    <tr key={v.id}>
      <td>{v.id}</td>
      <td>{v.title1}</td>
      <td>{v.price1}</td>
      <td>{v.description1}</td>
      <td>{v.category1}</td>
     <td> <img src={v.image} width={80} height={80} /></td>
     <td><button onClick={()=>{
                           seteditmode(true)
                             setid(v.id);
                             settitle(v.title1);
                             setprice(v.price1);
                             setdescription(v.description1);
                             setcategory(v.category1);
                             setimage(v.image1);
              }}>Edit</button></td>
     <td><button onClick={() => deletedata(v.id)} style={{ marginLeft: '10px' }}>Delete</button></td>
    </tr>
  ))
}               
              </tbody>
           </table>
    </div>
  )
}