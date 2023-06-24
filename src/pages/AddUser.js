import React, { useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { DataContext } from '../constant/MyContext';
import { useNavigate, useParams } from 'react-router-dom';
import statelist from '../constant/userdetails.json'

export const AddUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, updateData } = useContext(DataContext);
    const [isClick, setIsClick] = useState();

    const [details, setDetails] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        Address: '',
        City: '',
        State: 'Tamil Nadu',
        Country: 'India',
        PostalCode: ''
    });


    const handleChangeInputValues = (key, value) => {

        setDetails((prevDetails) => ({
            ...prevDetails,
            [key]: value
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newUser = [{ ...details, id: uuidv4() }];
        updateData(newUser);
        navigate('/');

    };

    const handleUpdate = (event) => {
        event.preventDefault();
        if (id) {
            const findIndex = data.findIndex(item => item.id === id);
            if (findIndex !== -1) {
                data[findIndex] = { ...details };
            }
            navigate('/');
        }
    }

    const ErrorMessage = (field) => {
        return (
            <div className="invalid-feedback">{`Please enter the ${field}.`}</div>
        )
    }

    useEffect(() => {
        if (id) setDetails(data.filter((e) => e.id === id)[0])
    }, [id])

    return (
        <div style={{ width: '80%', margin: 'auto' }} className='card my-2 shadow-sm  bg-white rounded'>
            <div className="container p-4">
                <h3 className='font-weight-bold'>{id ? "Update User" : 'Add New User'}</h3>
                <br />
                <form className={isClick ? 'was-validated' : ''} onSubmit={id ? handleUpdate : handleFormSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label >First Name*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={details.FirstName}
                                    id="firstName"
                                    required
                                    onChange={(e) => handleChangeInputValues('FirstName', e.target.value)} />
                                {ErrorMessage('first name')}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label >Last Name*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={details.LastName}
                                    id="lastName"
                                    required
                                    onChange={(e) => handleChangeInputValues('LastName', e.target.value)} />
                                {ErrorMessage('last name')}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label >Email Address*</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={details.Email}
                                    id="email"
                                    required
                                    onChange={(e) => handleChangeInputValues('Email', e.target.value)} />
                                {ErrorMessage(details.Email ? 'valid email address' : 'email address')}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label >Phone Number*</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    value={details.PhoneNumber}
                                    id="phone"
                                    maxLength={10}
                                    minLength={10}
                                    required
                                    onChange={(e) => handleChangeInputValues('PhoneNumber', e.target.value.replace(/[^0-9]/g, ''))} />
                                {ErrorMessage(details.PhoneNumber ? 'valid phone number' : 'phone number')}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label >Address*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={details.Address}
                                    id="address"
                                    required
                                    onChange={(e) => handleChangeInputValues('Address', e.target.value)} />
                                {ErrorMessage('address')}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label >City*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={details.City}
                                    id="city"
                                    required
                                    onChange={(e) => handleChangeInputValues('City', e.target.value)} />
                                {ErrorMessage('city')}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label >State*</label>
                                <select className="form-select" name="state" id="state"
                                    value={details.State} onChange={(e) => handleChangeInputValues('State', e.target.value)}>

                                    {
                                        statelist.state.map((list, index) => <option key={index} value={list}>{list}</option>
                                        )
                                    }

                                </select>
                                {/* <input
                                    type="text"
                                    className="form-control"
                                    value={details.State}
                                    id="state"
                                    required
                                    onChange={(e) => handleChangeInputValues('State', e.target.value)} /> */}
                                {ErrorMessage('state')}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label >Country</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={details.Country}
                                    id="country"
                                    readOnly
                                    required
                                    onChange={(e) => handleChangeInputValues('Country', e.target.value)} />
                                {ErrorMessage('country')}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label >Postal Code*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={details.PostalCode}
                                    id="postalcode"
                                    maxLength={6}
                                    minLength={6}
                                    required
                                    onChange={(e) => handleChangeInputValues('PostalCode', e.target.value.replace(/[^0-9]/g, ''))} />
                                {ErrorMessage(details.PostalCode ? 'valid postal code' : 'postal code')}
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end">
                            <button className='btn btn-primary py-1 my-4 ' onClick={setIsClick}>{id ? 'Update' : 'Add User'}</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

