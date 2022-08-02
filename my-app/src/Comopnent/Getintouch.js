import React,{useState} from 'react'
import { FileUploader } from "react-drag-drop-files";

// const fileTypes = ["JPG", "PNG", "GIF"];

const Getintouch = () => {
  const [file, setFile] = useState(null);
   const[data,setdata] = useState([])
  const handleChange = (e) => {
     e.preventDefault();
    setFile(file);
     console.log('111',file)
     let object = file
     console.log('object',object)
     let pp = object.push(data)
    console.log('pp',pp)
  };
  return (
    <div>
          {/* <FileUploader onchange={handleChange} name="file"  />
          <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p> */}
          <FileUploader onChange={(e)=>handleChange(e)} name="file"  />
          <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>


      
    </div>
  )
}

export default Getintouch
