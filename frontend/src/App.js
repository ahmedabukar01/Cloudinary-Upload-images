import {useState} from 'react'
import './App.css';

function App() {
  const [file,setFile] = useState('')
  const [image, setImage] = useState('')

  const onFileChange = (e)=>{
    const f = e.target.files[0];
    preveiwImage(f);
  }
  const preveiwImage = (f)=>{
    const reader = new FileReader();
    reader.readAsDataURL(f);
    reader.onloadend = () =>{
      setImage(reader.result)
    }
  }

  // submit
  const onSubmitFile = (e) =>{
    e.preventDefault();
    if(!image) return
    uploadImage(image)

  }

  const uploadImage = (base) =>{
    console.log(base);
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <form onSubmit={onSubmitFile}>
        <input type='file' name="image" value={file} onChange={onFileChange}/>
        <button type='submit'>Submit </button>
      </form>

      <h2>Image</h2>
      {image && (
        <img src={image} alt="myimage" style={{width: '300px'}}/>
      )}
    </div>
  );
}

export default App;
