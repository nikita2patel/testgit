import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Add } from "../Redux/Reducer/Form";

const Contact = () => {
  const [obj, setobj] = useState({
    name: "",
    last: "",
});
const [nnn,setnnn] = useState([])

  const output = useSelector((state) => state.counter.User)
  console.log('output',output)
  const dispatch = useDispatch();
  const handeldata = (event) => {
    event.preventDefault()
    let ppp = obj
  let ccc=  nnn.push(ppp)
  console.log('ccc',ccc)

    dispatch(Add(obj));
   
  }; 
  return (
    <div>
      <form onClick={handeldata}>
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => setobj({ ...obj, name: e.target.value })}
        />
        <br></br>
        <input
          type="text"
          placeholder="enter your Last name"
          onChange={(e) => setobj({ ...obj, last: e.target.value })}
        />
        <br></br>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Contact;


git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/nikita2patel/testgit.git
git push -u origin main