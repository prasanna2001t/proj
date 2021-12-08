import {useState} from 'react';
import storage from './firebase';
import './index.css'

import React,{Component} from 'react';
function Dashboard() {
const [image , setImage] = useState('');
const upload = () => {
  console.log(image.name);
  if(image == null){
    return;
  }
    const ref = storage.ref(`/images/${image.name}`);
    const uploadTask = ref.put(image);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref
        .getDownloadURL()
        .then((url) => {
          console.log(url);
        });
    });
}
  return (
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta
        http-equiv="X-UA-Compatible"
        content="ie=edge"
      />
      <link
        rel="stylesheet"
        href="style.css"
      />
      <title>
        Getform HTML Example
      </title>
    </head>
    <body>
      <div class="form">
        <form
          
          enctype="multipart/form-data"
        
          
        >
          <div
            class="form-group">
            <div class="segment">
            <h1>Company info</h1>
          </div>
            <input
              type="text"
              name="name"
              placeholder="Company Name"
            />
          </div>
          <div
            class="form-group">
            <input
              type="email"
              name="email"
              placeholder="Company Location"
            />
          </div>
          <div
            class="form-group">
            <input
              type="latitude"
              name="latitude"
              placeholder="Latitude"
            />
          </div>
          <div
            class="form-group">
            <input
              type="longitude"
              name="longitude"
              placeholder="Longitude"
            />
          </div>
          <div className="App">
            <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
            <button onClick={upload}>Upload</button>
          </div>
        </form>
      </div>
    </body>
  </html>
  );
}
export default Dashboard











