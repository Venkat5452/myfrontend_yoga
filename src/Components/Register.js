import React, { useEffect, useState } from "react";
import { Form} from "react-bootstrap";
import { Button ,Image} from "react-bootstrap";
import axios from "axios";
import Success from "./Success";
import './Register.css';
import { BASE_URL } from "./Helper";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import "animate.css";
import img from './Images/img.jpg'
// import { Chart } from "react-google-charts";
function Register() {
    const [slott,setslott]=useState("");
    const [flag1,setflag1]=useState(false);
    const [flag2,setflag2]=useState(false);
    const [flag3,setflag3]=useState(false);
    const [flagd,setflagd]=useState(false);
    const [data,sdata]=useState(0);
    const [err,seterr]=useState("");
    const [flagl,setflagl]=useState(false);
    const [user,SetUser]=useState({
        name:"",
        email:"",
        slottime:"",
        Age:"",
        Phone:"",
        day:"",
        paymentstatus:""
    });
    // const data1 = [
    //     ["Task", "Hours per Day"],
    //     ["6:00--7:00 AM", 1],
    //     ["7:00--8:00 AM", 3],
    //     ["8:00--9:00 AM", 2],
    //     ["5:00--6:00 PM", 5]
    //   ];
    // const options = {
    //     title: "This Month Slot Bookings",
    //   };
    const [availableTimeSlots,setavailableTimeSlots]=useState([
        "6:00--7:00 AM",
        "7:00--8:00 AM",
        "8:00--9:00 AM",
        "5:00--6:00 PM"
      ])
      const { width, height } = useWindowSize();
    const handleSubmit = async (e) => {
        e.preventDefault()
          const {name,value}=e.target
          SetUser ({
              ...user,
              [name]:value
          })
          user.slottime=slott;
        };
        const pattern = new RegExp(/^\d{1,10}$/);
    const verifyemail=(e)=>{
        e.preventDefault();
        setflag3(false);
        let currentDate = new Date().toJSON().slice(0, 7);
        user.day=currentDate;
        if(user.day) {
            setflagl(true);
            axios.post( BASE_URL + "/verify",user)
             .then(res => {
              if(res.data.message==="Verified") {
                seterr("");
                setflag1(true);
              }
              else if(res.data.message==="Payment"){
                setflag3(true);
                seterr("Payment Pending")
              }
              else {
                seterr("Email Already Registered in this month at " + res.data.slot + " Slot ");
              }
              setflagl(false);
            })
        }
    }
    const makepayment=(e)=>{
        e.preventDefault();
        user.paymentstatus="Yes";
        if(pattern.test(user.Phone) && (user.Age >=18 && user.Age <=65)&& slott!=="Select") {
            user.slottime=slott;
            setflagl(true);
            axios.post(BASE_URL + "/register" , user).then((res)=>{
                console.log(user);
                setflag2(true);
                seterr("");
                setflagl(false);
            })
        }
        else {
            seterr("Invalid Data");
        }
    }
    const makepayment2=(e)=>{
        e.preventDefault();
        user.paymentstatus="No";
        if(pattern.test(user.Phone) && (user.Age >=18 && user.Age <=65) && slott!=="Select") {
            setflagl(true);
            user.slottime=slott;
            axios.post(BASE_URL + "/register" , user).then((res)=>{
                console.log(user);
                setflag2(true);
                seterr("");
                setflagl(false);
            })
        }
        else {
            seterr("Invalid Data");
        }
    }
    const makepayment1=(e)=>{
        e.preventDefault();
        console.log(user);
        setflagl(true);
        axios.post(BASE_URL + "/payment" , user).then((res)=>{
            if(res.data.message==="Done") {
                setflag2(true);
                setflag3(false);
                seterr("");
            }
            else {
                seterr("Error in payment");
            }
            setflagl(false);
        })
    }
    useEffect(()=>{
        if(flagd===false) {
            setflagd(true);
            let currentDate = new Date().toJSON().slice(0, 7);
            user.day=currentDate;
            axios.post(BASE_URL+"/details",user).then((res)=>{
            sdata(res.data.message);
        })
        }
    },[flagd,data,user])
  return (
    <div className='container d-flex align-items-center justify-content-center w-50 rounded-4 backss'>
        <div className="p-2 w-75 mx-auto">
            <h3 className="w-30"><h3 className="text-success">🧘‍♂️ YOGA 🧘‍♀️</h3>Registration Form</h3>
            <Image src={img} alt="im" className="w-75 h-50 p-1 rounded-4"></Image>
            {err!=="" && <h5 className="text-danger">{err}</h5>}
            {flagl && <h5 className="text-success">Loading..</h5>}
            <div> 
            {!flag1 && !flag2 && (<div>
                <h6 className="text-primary">Number of Registrations in this month : {data}</h6>
                <Form onSubmit={verifyemail}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={user.name}
                    onChange={handleSubmit}
                    required
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleSubmit}
                    placeholder="Email*"
                    required
                />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="Submit" onSubmit={verifyemail}>Confirm</Button>
                </div>
                </Form>
                {/* <div className="d-flex align-items-center justify-content-center mt-1">
                <Chart
                chartType="PieChart"
                data={data1}
                width={"100%"}
                height={"15vh"}
                options={options}/>
                </div> */}
                </div>)}
                {flag1 && !flag2 && (<div>
                    <Confetti width={width} height={height} numberOfPieces={30}/>
                <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    type="number"
                    name="Age"
                    placeholder="Age*(18 - 65 eligible)"
                    required
                    value={user.Age}
                    min={18}
                    max={65}
                    onChange={handleSubmit}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    type="text"
                    name="Phone"
                    placeholder="Phone Number*"
                    required
                    value={user.Phone}
                    maxLength={10}
                    minLength={10}
                    onChange={handleSubmit}
                />
                </Form.Group>
                <Form.Group className="">
                    <label className="myDropDown" ><h5>Select Slot</h5></label>
                    <select className="w-100 p-1 rounded" onChange={(e) => (setslott(e.target.value))}>
                        <option defaultValue={""}>Select</option>
                        {availableTimeSlots.map(fbb =><option className="bg-success" key={fbb.key} value={fbb}>{fbb}</option>)};
                        </select>
                </Form.Group>
                <div className="d-grid gap-2 p-2">
                    <Button variant="success" type="Submit" onClick={makepayment}>Make Payment of 500</Button>
                </div>
                <div className="d-grid gap-2 p-2">
                    <Button variant="primary" type="Submit" onClick={makepayment2}>Pay Later</Button>
                </div>
                </Form>
                </div> )}
                {flag2 && (<div>
                    <Success/>
                </div>)}
                {flag3 && (<div>
                    <div className="d-grid gap-2 p-2">
                    <Button variant="success" type="Submit" onClick={makepayment1}>Make Payment of 500</Button>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Register;