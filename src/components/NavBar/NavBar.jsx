import React, { useState } from 'react'
import ItemField from '../ItemField/ItemField'
import SupplierField from '../SupplierField/SupplierField'

const NavBar = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [isSupChecked, setIsSupChecked] = useState(false)
    const [itemname,setItemName] = useState("");
    const [itemquantity,setItemQuantity] = useState("");
    const [itemprice,setItemPrice] = useState("");
    const [itemdate,setItemDate] = useState("");

    const [supname,setSupName] = useState("");
    const [supcompany,setSupCompany] = useState("");
    const [supcountry,setSupCountry] = useState("");
    const [supstate,setSupState] = useState("");
    const [supcity,setSupCity] = useState("");
    const [supemail,setSupEmail] = useState("");

    const checkItemHandler = () => {
        setIsChecked(!isChecked)
        setIsSupChecked(false)
        
    }

    const checkSupHandler = () => {
        setIsSupChecked(!isSupChecked)
        setIsChecked(false)
    }

    const handleSaveBtn = () =>{
        const data = { itemname: itemname, itemquantity: itemquantity, itemprice:itemprice, itemdate:itemdate, 
            supname:supname, supcompany:supcompany , supcountry:supcountry, supstate:supstate, supcity:supcity, supemail:supemail};

            fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(response => console.log(response))
            
            .then(data => console.log(data))
            .catch(error => console.error(error));
            // alert("handleSaveBtn function called!")
                }

    return (
        <div className='container'>
            <div className='sub-container'>
                <h3>Inventory Management System</h3>
                <h3>Home</h3>
            </div>
            <div className='input-field-container'>
                <input type="checkbox" id="item" name="item"  checked={isChecked} onChange={checkItemHandler} />
                <label for="item">Item</label>
                <input type="checkbox" id="supplier" name="supplier" value="supplier" checked={isSupChecked} onChange={checkSupHandler} />
                <label for="supplier"> Suplier</label>
            </div>
            <div>
                {isChecked ? <ItemField itemname={itemname} setItemName={setItemName} itemquantity={itemquantity} setItemQuantity={setItemQuantity} itemprice={itemprice} setItemPrice={setItemPrice} itemdate={itemdate} setItemDate={setItemDate}/> : null}
                {isSupChecked ? <SupplierField supname={supname} setSupName={setSupName} supcompany={supcompany} setSupCompany={setSupCompany} supcountry={supcountry} setSupCountry={setSupCountry} supstate={supstate} setSupState={setSupState} supcity={supcity} setSupCity={setSupCity} supemail={supemail} setSupEmail={setSupEmail}/> : null}
            </div>
            {isChecked || isSupChecked ? <div>
                <div><h2>Submit Data</h2></div>
                <p>The data submitted by the user will be displayed below</p>
                <button type='button' className='btn-save' onClick={handleSaveBtn}> Save Changes</button>
            </div> : null}
        </div>
    )
}

export default NavBar