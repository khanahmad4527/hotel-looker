import React from 'react'
import { useParams } from 'react-router-dom/dist'
import { UserAuth } from '../../hoc/AuthContext';

const HotelDetail = () => {
    const {id} = useParams();
    console.log(id)
    const { dummyHotelData } = UserAuth();
  return (
    <div>HotelDetail</div>
  )
}

export default HotelDetail