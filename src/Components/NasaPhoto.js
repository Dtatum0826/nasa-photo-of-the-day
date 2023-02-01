import React from "react";

const NasaPhoto = (props) => {
    return (
<div className="nasa-photo-container">
<h2>{props.photo.title}</h2>
<p>{props.photo.date}</p>
<img src = {props.photo.hdurl}/>
<p>Explanation: {props.photo.explanation}</p>
</div>
    )
}

export default NasaPhoto