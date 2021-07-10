import './App.css';
import React from 'react';
import axios from 'axios';
class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {data:[]};
    }
    getCity(){
        axios.get('http://localhost:3001/city').then((res)=>{this.setState({data:res.data})});
    }
    render() {
        return (
        <div>
            <button onClick={()=>this.getCity()} className="btn-showdata">Show Data!</button>
            
            {
                
                this.state.data.map((val,key)=> 
                        <div>
                            <p>Item : {val.Name}</p>
                            <p>Key :{key}</p>
                        </div>)
            }
        </div>
        );

    }
}
export default App;