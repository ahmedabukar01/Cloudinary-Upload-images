import {useState} from 'react'
import './App.css';
import UploadedImages from './UploadedImages';

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

  const uploadImage = async (img) =>{
    console.log(img);

    try {
      await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: JSON.stringify({img}),
        headers: {'Content-type': 'application/json'},
      });
    } catch (error) {
      console.log(error)
    }
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

      <h2>uploaded images</h2>
      <UploadedImages />
    </div>
  );
}

export default App;
