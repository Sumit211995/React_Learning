import React from "react";
import ReactDOM from "react-dom";

function Card(props){
  return <div>
      <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card 
    name="Beyonce" 
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    tel="+123 456 789" 
    email="b@beyonce.com"
    />
   <Card 
    name="Jack Bauer"
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AxcnPOA_V1qQJ-Dw6mjNbriZIyeY2S2BNQ&usqp=CAU"
    tel="+2433456"
    email="sdfasdfsfa@GMAIL.COM"
   />
     </div>,
  document.getElementById("root")
);
