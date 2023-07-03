import React, {useState, useEffect} from "react";
import './App.css';
import Moment from "moment"


function App() {

         const addItem = () => {
                const Items={
                        week: day,
                        id: state.length + 1,
                        itemname: itemnames,
                        price: parseInt(prices),
                        description: descriptions,
                        time: Date.now()
                }
                setState([...state, Items])
        
                setItemNames("")
                setPrices("")
                setDescriptions("")
         }

         const [state, setState] = useState([])
         const [itemnames, setItemNames] = useState("")
         const [prices, setPrices] = useState("")
         const [descriptions, setDescriptions] = useState("")

         const [totalPrice, setTotalPrice] = useState(0)
         

         useEffect (() => {
               const calculateTotalPrice = () => {
                       const newTotalPrice = state.reduce((acc, props) => acc + props.price, 0);
                       setTotalPrice(newTotalPrice);
               }
               calculateTotalPrice();
         }, [state])


         const Time= Date.now()
         console.log (Time)


         const weekday= ["Sunday",  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
         const d = new Date();
         let day = weekday[d.getDay()];


  return (
        <div className="App">
                <div className='Wrap'>
                        <div className='Details'>
                                <div className='Cop-name'><h2>R E D.S O L U T I O N S. L I M I T E D</h2></div>
                                <div className='Info'>
                                        <div className='Cop-details'>
                                                <div><input placeholder="Reporting Personnel"/></div>
                                                <div><input placeholder="Department"/></div>
                                                <div><input  type="date" placeholder="Report Date"/></div>
                                                <div><input placeholder="Total Sales"/>$</div>
                                        </div>
                                        <div className='Shopping-cart'>
                                                <div><input placeholder="Item name"  value={itemnames} onChange={(e) => {
                                                        setItemNames(e.target.value)
                                                }}/></div>
                                                <div><input placeholder="price"  type="number" value={prices} onChange={(e) => {
                                                        setPrices(e.target.value)
                                                }}/></div>
                                                <div><input placeholder="description"  value={descriptions} onChange={(e) => {
                                                        setDescriptions(e.target.value)
                                                }}/></div>   
                                                <div className="Additems"><button onClick={addItem}>+ Add Item</button></div>
                                        </div>
                                </div>
                                <div><h3>Product Sales Inventory</h3></div>
                        </div>

                        <div className='Hero'>
                                <table>
                                        <thead>
                                                <tr width= "30px">
                                                        <td className='Week'>Weekday</td>
                                                        <td className='Id'>Customer Id</td> 
                                                        <td  className='Name'>Item Name</td>  
                                                        <td className='Price'> Price $</td>
                                                        <td className='Description'>Description</td>
                                                        <td className='Time'>Time</td>
                                                </tr>
                                        </thead>
                                        {state && state.map((props) => {
                                        return(
                                                <tbody key={props.id}>
                                                        <tr>
                                                                <td>{day}</td>
                                                                <td>{props.id}</td>
                                                                <td>{props.itemname}</td>
                                                                <td>{props.price}</td>
                                                                <td>{props.description}</td>
                                                                <td><p>posted {Moment(props.time).fromNow()}</p></td>                             
                                                        </tr>    
                                                </tbody>   
                                        )
                                })}
                                </table>
                        </div>

                        <div className="Summary">
                                <div className='Total-amount'>
                                        <div className='Total'> Total Price:
                                                <p>{totalPrice}</p>
                                        </div>
                                        <div className='Btn-primary'><button className="Btn-primary-checkout">= CheckOut</button></div>
                                </div>
                        </div>
                </div>
        </div>
    );
}

export default App;
