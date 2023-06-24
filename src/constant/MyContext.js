import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const updateData = (newData) => {
        setData(existing => [...newData, ...existing]);
    };

    const contextValue = {
        data,
        updateData,
    };

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};
