import React from 'react';
import Main from "./components/Main";
import "./App.css";


function App(){
  

  return(
    <div className="App">
      <Main />
     </div>
  );
}

/*class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
         members:[
          {id:1,
           name:"Bettina"
          },
          {id:2,
           name:"Ruba"
          },
          {id:3,
          name:"Sony"}
          ],
          activate:true,
    };
   
    
  };
    this.componentDidMount(){
      this.setState({
        members:member
      })
      };
  
    
     
    

   render(){
     return(
       <div>
        <h1>Member:</h1>
        <ListContainer activate={this.state.activate} members={this.state.members} handleDeactivate={this.handleDeactivate} />
       </div>
     )

   }
 }


const Lists=props=>{
  const members=props.members;
  const activate=props.activate;
  const listItems=members.map(member=>(
    <ListItem 
    key={member.id} 
    id={member.id}
    name={member.name} 
    activate={activate}
     />
     ))
   return <div>{listItems}</div>
}

 const ListItem=props=>{
  const {name}=props;
  const activate=props.activate;
   console.log(activate)

  const handleDeactivate=(activate)=>{
    console.log("hi")
    activate?active=false:active=true
    console.log(activate)

    }
  return( <button type="button" className="deactivate" onClick={handleDeactivate} >{name}</button> 
   
  );
};

const ListContainer=props=>{
  const activate=props.activate;
   console.log(activate)
  return<Lists members={props.members} activate={props.activate}/>;
};*/
export default App;
