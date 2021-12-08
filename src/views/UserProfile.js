import React from "react";
import Tiff from 'tiff.js';
import tiffFile from './cea.tif';
import './maps.css'
import Gmaps from './gmaps'
function Visualize() {
    var xhr = new XMLHttpRequest();
    xhr.responseType='arraybuffer';
    xhr.open('GET', tiffFile);
    xhr.onload=function(e){
        var arrayBuffer =this.response;
        Tiff.initialize({
            TOTAL_MEMORY:16777216 *10
        });
        var tiff = new Tiff({
            buffer:arrayBuffer
        });

        var dataUrI =tiff.toDataURL();
        document.getElementById("img/").src=dataUrI;
  
    };
    xhr.send();
    const Maps=()=>{
      return <div>
          <Gmaps/>
      </div>}
    return(
        <div>
        
            <center>
            <h1>Visualization of Tiff file</h1>
            <img id ="img/"></img>
            </center>
            <Maps/>    
        </div>
        
    );
  }
  export default Visualize;










