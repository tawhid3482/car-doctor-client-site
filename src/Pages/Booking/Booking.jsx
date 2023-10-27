import { useEffect, useState } from "react";
import UseHook from "../../ProviderHook/UseHook";
import BookingRow from "./BookingRow";
import axios from "axios";

const Booking = () => {
  const { user } = UseHook();
  const [booking, setBooking] = useState([]);
  const url = `http://localhost:5000/checkouts?email=${user.email}`;
  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBooking(data);
    //   });
    axios.get(url, {withCredentials:true})
    .then(res =>{
      setBooking(res.data)
    })
  }, [url]);

  const handleDelete = id =>{
    const proceed = confirm('are you sure?')
    if(proceed){
        fetch(`http://localhost:5000/checkouts/${id}`,{
            method:'DELETE',
        
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert('item deleted')
            }
            const remaining = booking.filter((book)=> book._id !== id)
            setBooking(remaining)
        })
    }
}

const handleConfirm = (id) =>{
    fetch(`http://localhost:5000/checkouts/${id}`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.modifiedCount> 0){
            const remaining = booking.filter((book)=>book._id !== id)
            const updated = booking.find((book)=>book._id === id)
            updated.status = 'confirm'
            const newBooking = [updated, ...remaining]
            setBooking(newBooking)
        }
    })
}



  return (
    <div>
      <h2 className="text-5xl">Your bookings: {booking.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
            booking.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></BookingRow>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
