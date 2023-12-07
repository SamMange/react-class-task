import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

const CounterFunction = () => {
    const [status, setStatus] = useState(null)
    const [name, setName] = useState({ objss: { la: { na: "sdfbjb" } } });

    // const handleClicked = () => {
    //     setName((prevState) => {
    //         const updatedName = { ...prevState };
    //         updatedName.objss.la.na = "new value";
    //         return updatedName;
    //     });
    // }
    const handleClick = () => {
        console.log(name.objss.la.na)
        if (status) {
            setStatus(false)
        } else { setStatus(true) }

    }

    useEffect(() => {
        setName((vv) => {
            const updatedName = { ...vv };
            updatedName.objss.la.na = "new value";
            return updatedName;
        })
        if (status) {
            Swal.fire({
                title: 'Good job!',
                text: 'SuccessFully your Logged In.',
                icon: 'success'
            });
        } else {
            Swal.fire({
                title: 'Good job!',
                text: 'SuccessFully your Logged Out.',
                icon: 'warning'
            });
        }
    }, [status])
    return (
        <>
            <h1></h1>
            <div style={{ color: status ? "blue" : "red" }}>
                <h2>{`Your login status is ${status ? "Logged In" : "Logged Out"}`}</h2>
            </div>
            <button onClick={handleClick}>{`${status ? "Click to Logged Out" : "Click to Logged In"}`}</button>
        </>
    )
}

export default CounterFunction;