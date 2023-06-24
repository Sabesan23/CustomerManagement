import { Link } from 'react-router-dom';
import { DataContext } from '../constant/MyContext';
import { useContext, useEffect, useState } from 'react';

const table_header = [
    { id: 1, keyName: 'FirstName', heading: 'First Name' },
    { id: 2, keyName: 'LastName', heading: 'Last Name' },
    { id: 3, keyName: 'Email', heading: 'Email Address' },
    { id: 4, keyName: 'PhoneNumber', heading: 'Phone Number' },
    { id: 5, keyName: 'Address', heading: 'Address' },
    { id: 6, keyName: 'City', heading: 'City' },
    { id: 7, keyName: 'State', heading: 'State' },
    { id: 8, keyName: 'Country', heading: 'Country' },
    { id: 9, keyName: 'PostalCode', heading: 'Postal Code' },
    { id: 10, heading: 'Action' },
]

const TableData = ({ userdetails }) => {
    const {
        id,
        FirstName,
        LastName,
        Email,
        PhoneNumber,
        Address,
        City,
        State,
        Country,
        PostalCode
    } = userdetails

    const getAddress = (address) => {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        window.open(mapsUrl, '_blank');
    };

    return (
        <tr >
            <td >{FirstName}</td>
            <td>{LastName}</td>
            <td>{Email}</td>
            <td>{PhoneNumber}</td>
            <td className='pointer' onClick={() => getAddress(Address)}>{Address} <i className="fas fa-external-link-alt"></i></td>
            <td>{City}</td>
            <td>{State}</td>
            <td>{Country}</td>
            <td>{PostalCode}</td>
            <td>{id && <Link to={`/edit/${id}`}><i className="fas fa-edit pointer"></i></Link>}</td>
        </tr>
    )
}


const TableContainer = () => {
    const { data } = useContext(DataContext);
    const [response, setResponse] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [key, setKey] = useState('')
    useEffect(() => {
        setResponse(data);
    }, [data]);

    const Order = (key) => {
        const sortedData = [...response].sort((a, b) => {
            return sortOrder === 'asc' ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
        });

        setResponse(sortedData);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        setKey(key)
    };

    return (
        <div className="container mt-4 text-center table-responsive ">
            <table className='table table-striped table-bordered ' >
                <thead className=' bg-dark'>
                    <tr >
                        {
                            table_header.map((item, index) => (
                                <th key={item.id} onClick={() => { table_header.length - 1 !== index && Order(item.keyName) }} className='pointer'>{item.heading} {table_header.length - 1 !== index && <> {key === item.keyName && <i className={sortOrder === 'asc' ? 'fas fa-sort-alpha-down-alt ' : 'fas fa-sort-alpha-down'}></i>}</>}</th>
                            ))
                        }   
                    </tr>
                </thead>
                <tbody>
                    {
                        response?.length ? response?.map((details, index) => (
                            <TableData key={index} userdetails={details} />
                        ))
                            :
                            <tr ><td colSpan={10} className='text-danger'>{'No user data found!'}</td></tr>
                    }

                </tbody>
            </table>
        </div>
    );
}

export default TableContainer;