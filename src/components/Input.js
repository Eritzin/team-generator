import React from "react";


class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ""
        };
    }
    handleSearch = (e) => {
        this.setState({
          searchInput: e.target.value
        });
    }

    handleClick=()=>{
        const searchInput = this.state.searchInput;
        console.log(searchInput+"yoo")
        //const {handleGenerate}=this.props;
        this.props.handleGenerate(searchInput);
    };

    render() {
        return (
            <form className="form-inline">
                <input  
                    type="text" 
                    className="form-control mb-2 mr-sm-2" 
                    id="groupsize" 
                    placeholder="How many members minimum?" 
                    onChange={this.handleSearch} 
                    value={this.state.searchInput}
                    required
                />
                {console.log("input: ", this.state.searchInput)}
                <button type="button" className="btn btn-primary mb-2" onClick={()=>this.handleClick()} >Generate</button>
            </form>
        );
    }
}
export default Input;