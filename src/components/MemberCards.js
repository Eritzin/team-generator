import React from "react";
//import MemberData from "./MemberData";


class MemberCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active:true
        };
    }
    componentDidMount() {
        const { active } = this.props;

        this.setState({
            active
        });
    }
    
    handleClick=active=>{
        const{handleActive,id}=this.props;
        this.setState({
            active:!active
        });
        handleActive(id);
    };

    render() {
       
         const{active}=this.state;
         const statusClass=active?"active":"inactive";

        return (
            <div className={`card mb-3 ${statusClass}`} onClick={() => this.handleClick(active)}>
                <div className="row no-gutters">
                    { /* HERE START */}
                    {this.props.children} 
                    { /* HERE END */}
                </div>
            </div>
        );
    }
}
export default MemberCard;