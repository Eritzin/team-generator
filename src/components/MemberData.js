import React from "react";


const MemberData = (props) => {

    const {image, name}=props.obj;
  
    

    return (
       
        <>
           <div className="member-data">
                <div className="image">
                    <img src={image} className="card-img" alt={name} />
                </div>
                <div className="title">
                    <span className="card-title">{name}</span>
                </div>
            </div>
        </>
    );
}
export default MemberData;