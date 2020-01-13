import React from "react";
import { image } from 'faker';

const MemberData = (props) => {

    const imageURL = image.avatar();
  
    

    return (
        <>
           <div className="member-data">
                <div className="image">
                    <img src={imageURL} className="card-img" alt="..." />
                </div>
                <div className="title">
                    <span className="card-title">{props.name}</span>
                </div>
            </div>
        </>
    );
}
export default MemberData;