import React from "react";
const renderGroup = props=>{
    const{group}=props;
    const leader=Math.floor(
        Math.random()*group.length
    );

    return group.map((student, index)=>{
        const isLeader=leader===index?"leader":"";

        return(
            <div className={`student ${isLeader}`}>
        {" "}
        {/* Here we add the class or remove the leader class */}
        <div className="image">
          <img src={student.image} className="card-img" alt={student.name} />
        </div>
        <div className="name">{student.name}</div>
      </div>
        )
    })
}

const Group =props=>{
    return <div className="group">{renderGroup(props)}</div>;
}
export default Group;