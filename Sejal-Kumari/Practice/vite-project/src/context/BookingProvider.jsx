import React from 'react'
import { createContext,useContext,useState } from 'react'

//create useContext
const BookingContext=createContext();
const BookingProvider = () => {
    const [paymentMethid,setPaymentMethod]=useState("");
  return (
    <BookingContext.Provider
        value={(
            paymentMethod, 
            setPaymentMethod 
        )}
    >
    </BookingContext.Provider>
  )
}

export default BookingProvider
