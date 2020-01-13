import React from "react";
import Input from "./Input"
import MemberCard from"./MemberCards"
import MemberData from "./MemberData";
import { STUDENTS } from "../configs/data";


class Main extends React.Component{
        state = {
           activeStudents:false,
           separateTeam:[]
        };
   

    componentDidMount(){
        const activeStudents=new Map(STUDENTS.map(i=>[
            i.id,{id: i.id, name:i.name, active:i.active}
        ]));

        this.setState({
            activeStudents
        });
    }

    handleActive = (id) => {

        const { activeStudents } = this.state;
        
        const student = activeStudents.get(id);

        // ! => NOT IN operator
        student.active = !student.active;

        this.setState({
            activeStudents
        });
    }

  

    renderCards = () => {
        // auxiliary array
       const displayStudents=[]
        const { activeStudents } = this.state;

        activeStudents && activeStudents.forEach(i => {
            displayStudents.push(
                <MemberCard key={i.id} handleActive={this.handleActive} id={i.id} active={i.active}>
                    <MemberData name={i.name} />
                </MemberCard>
            );
        });
           console.log(displayStudents);
        // return the auxiliary array to render
        return displayStudents;
    };

    handleGenerate=(searchInput)=> {
        const {activeStudents}=this.state
        const array1= Array.from(activeStudents.entries())
        console.log(searchInput)
        console.log(array1[0][1].active)
        const generateTeam=[];
         
        for(let i=0; i<array1.length; i++){

             if(array1[i][1].active){
                generateTeam.push(array1[i][1].name)
             }
         }
         
       
        const numberOfTeam=Math.round(generateTeam.length/searchInput)
        console.log(numberOfTeam)
         
          for(let i=generateTeam.length-1; i>0; i--){
                   let j =Math.ceil(Math.random()*i);
                   let temp=generateTeam[i];
                   generateTeam[i]=generateTeam[j];
                   generateTeam[j]=temp;
          }

          console.log("generateTeam"+generateTeam)
         
          let separateTeam =[];
         for(let i=1; i<=numberOfTeam; i++){
            separateTeam.push("Team "+i+":"+generateTeam.slice(searchInput*i-searchInput,i*searchInput));
         }
         console.log(separateTeam)
        const listItems=separateTeam.map((team)=><li>{team}</li>);
         
        
      /*  return (<ul>{listItems}</ul>);*/
      this.setState({
        separateTeam:listItems
      })
    }


render() {
    
    const { renderCards } = this;
    const { activeStudents,separateTeam } = this.state;
   
    
    return(
    <>
        <Input displayStudents={this.displayStudents} handleGenerate={this.handleGenerate}/>
        <div className="wrapper">
            <div className="students">
              <h3>Students</h3>
              { renderCards() }
            </div>
            {activeStudents && 
            <div className="groups">
                    <p>Active Students obj:</p>
                    <ul>{separateTeam}</ul>
                    {/*JSON.stringify(Array.from(activeStudents.entries()))*/}
                   
            </div>}
            
        </div>
        </>
        );
}
}

export default Main;