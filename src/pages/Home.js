import React from 'react'
import TableContainer from '../component/TableContainer'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <>
            <div className='d-flex justify-content-end m-3'>
                <Link to="/adduser" className="btn btn-success"><i className="fas fa-plus" /> Create New Contact</Link>
            </div>
            <div className='container container-center'>
                <TableContainer />
                <p className='text-success'>{'Suggestion * : Please enter the proper address. Eg: Etc Tower, ETL Infrastructure Services Limited IT Sez, 200 Feet Radial Rd, MCN Nagar Extension.'}</p>
            </div>

        </>
    )
}
