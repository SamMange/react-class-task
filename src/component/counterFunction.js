import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

const CounterFunction = ({ props }) => {
    const [status, setStatus] = useState('')

    const handleClick = () => {
        if (status) {
            setStatus(false)
        } else { setStatus(true) }

    }

    useEffect(() => {
        if(status){
            Swal.fire({  
                title: 'Good job!',  
                text: 'SuccessFully your Logged In.',
                icon: 'success'
              });
        }else {
            Swal.fire({  
                title: 'Good job!',  
                text: 'SuccessFully your Logged Out.',
                icon: 'warning'
              });
        }
    }, [status])
    return (
        <>
            <div style={{color: status ? "blue" : "red"}}>
                <h2>{`Your login status is ${status ? "Logged In" : "Logged Out"}`}</h2>
            </div>
            <button onClick={handleClick}>{`${status ? "Click to Logged Out" : "Click to Logged In"}`}</button>
        </>
    )
}

export default CounterFunction;