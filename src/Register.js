import React, {useState} from "react";


const Register=()=>{
    const [name,setName]=useState("");
    const [gender,setGender]=useState("");
    const [address,setAddress]=useState("");
    const [location,setLoc]=useState("");
    const [info,setInfo]=useState("");

    const AddName=(e)=>{
        setName(e.target.value);
    }
    const AddGender=(e)=>{
        setGender(e.target.value);
    }
    const AddAddress=(e)=>{
        setAddress(e.target.value);
    }
    const AddLoc=(e)=>{
        setLoc(e.target.value);
    }
    const Display=()=>{
        if(name!=""&& address!="" )
        {
            setInfo("Registered");
        }
        else
        {
            setInfo("Fill all Field");
        }
    }

    return(
        <div className="div2">
            <table className="tab1">
            <br />
                <tr>
                    <td style={{fontSize:"25px"}}>
                        Name:
                    </td>
                    <td>
                        <input type="text" name="txtName" value={name} onChange={AddName} class="form-label" size="25" style={{fontSize:"20px"}}/>
                    </td>
                </tr>
                <tr>
                    <td style={{fontSize:"25px"}}>
                        Gender:
                    </td>
                    <td style={{fontSize:"15px"}} >
                        <input type="radio" value={gender} name="txtGender" onChange={AddGender} class="form-check-input"/> Male
                        <br />
                        <input type="radio" value={gender} name="txtGender" onChange={AddGender} class="form-check-input"/> Female
                        <br />
                        <input type="radio" value={gender} name="txtGender" onChange={AddGender} class="form-check-input"/> Other
                    </td>
                </tr>
                <tr>
                    <td style={{fontSize:"25px"}}>
                        Address:
                    </td>
                    <td>
                        <input type="textarea" name="txtAddress" value={address} onChange={AddAddress} class="form-label" size="25" style={{fontSize:"20px"}}/>
                    </td>
                </tr>
                <tr>
                    <td style={{fontSize:"25px"}}>
                        Location:
                    </td>
                    <td>
                        <select value={location} onChange={AddLoc}  style={{fontSize:"20px"}}>
                        <option value="-1">Select Location</option>
                            <option value="0">Trivandrum</option>
                            <option value="1">Ernakulam</option>
                            <option value="2">Kottayam</option>
                            <option value="3">Kollam</option>
                            <option value="4">Patanamtitta</option>
                        </select>
                    </td>
                </tr>
                <tr >
                <br />
            <input type="button"  value="Register" onClick={Display} style={{fontSize:"20px"}} class="btn btn-primary"/>
                </tr>
                <br />
            </table>
            <h2 style={{backgroundColor:"tomato"}}>{info}</h2>

        </div>
    );
}

export default Register;