import React, { useEffect } from 'react'

const SupplierField = ({supname, setSupName, supcompany, setSupCompany, supcountry, setSupCountry, supstate, setSupState, supcity, setSupCity, supemail, setSupEmail}) => {
    
    useEffect(()=>{
        console.log(supname, supcompany, supcountry, supstate,supcity, supemail)
    },[supname, supcompany, supcountry, supstate,supcity, supemail])

    return (
        <div className='item-comp-container'>
            <h2>Item Details</h2>
            <div className='input-sub-container'>
                <div className='input-wrap'>
                    <div className='input-label-wrap'>
                        <label for="supplierName">Supplier Name</label>
                        <input type="text" placeholder='Enter supplier name' maxlength="225" value={supname} onChange={(e) => setSupName(e.target.value)}/>
                    </div>
                    <div className='input-label-wrap'>
                        <label for="companyName">Company Name</label>
                        <input type="text" placeholder='Enter company name' maxlength="225" value={supcompany} onChange={(e) => setSupCompany(e.target.value)}/>
                    </div>
                </div>
                <div className='input-wrap'>
                    <div className='input-label-wrap'>
                        <label for="country">Country</label>
                        <input type="text" placeholder='Enter country name' value={supcountry} onChange={(e) => setSupCountry(e.target.value)}/>
                    </div>
                    <div className='input-label-wrap'>
                        <label for="state">State</label>
                        <input type="text" placeholder='Enter state name' value={supstate} onChange={(e) => setSupState(e.target.value)}/>
                    </div>
                </div>
                <div className='input-wrap'>
                    <div className='input-label-wrap'>
                        <label for="city">City</label>
                        <input type="text" placeholder='Enter city name' value={supcity} onChange={(e) => setSupCity(e.target.value)}/>
                    </div>
                    <div className='input-label-wrap'>
                        <label for="dateOfSubmission">Email Address </label>
                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder='Enter email address' value={supemail} onChange={(e) => setSupEmail(e.target.value)}/>
                    </div>
                </div>
                <div className='input-wrap'>
                    <div className='input-label-wrap'>
                        <label for="dateOfSubmission">Email Address </label>
                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder='Enter email address' value={supemail} onChange={(e) => setSupEmail(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupplierField