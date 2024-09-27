import React, { useEffect } from 'react'

const ItemField = ({itemname, setItemName, itemquantity, setItemQuantity, itemprice, setItemPrice, itemdate, setItemDate}) => {

    useEffect(()=>{
        console.log(itemname, itemquantity, itemprice,itemdate)
    },[itemname, itemquantity, itemprice,itemdate])
    
    return (
        <div className='item-comp-container'>
            <h2>Item Details</h2>
            <div className='input-sub-container'>
                <div className='input-wrap'>
                    <div className='input-label-wrap'>
                        <label for="itemName">Item Name</label>
                        <input type="text" placeholder='Enter item name' value={itemname} maxlength="225" onChange={(e) => setItemName(e.target.value)}/>
                    </div>
                    <div className='input-label-wrap'>
                        <label for="quantity">Quantity</label>
                        <input type="number" placeholder='Enter quantity' value={itemquantity} maxlength="10" onChange={(e) => setItemQuantity(e.target.value)}/>
                    </div>
                </div>
                <div className='input-wrap'>
                    <div className='input-label-wrap'>
                        <label for="unitPrice">Unit Price</label>
                        <input type="number" placeholder='Enter unit price' value={itemprice} onChange={(e) => setItemPrice(e.target.value)}/>
                    </div>
                    <div className='input-label-wrap'>
                        <label for="dateOfSubmission">Date of Submission </label>
                        <input type="date" placeholder='Select date' value={itemdate} onChange={(e) => setItemDate(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemField