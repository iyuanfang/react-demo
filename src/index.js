import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));

//创建一个组件
var Hello=React.createClass({   
    getInitialState:function(){
        return {symble:'!'}
    },
    handleChange:function(event){
        this.setState({symble:event.target.value});
    },
    componentWillMount:function(){
        alert("will mount");
    },
    componentDidMount:function(){
        alert("did mount");
    },
    render:function(){
        var styleObj={color:'red',fontSize:'50px',paddingLeft:'100px'};
        return <div>
            <h1 style={styleObj}>Hello,{this.props.name}{this.state.symble}</h1>
            <input type='text' value={this.state.symble} onChange={this.handleChange}/>
            </div>;
    }
})

ReactDOM.render(<Hello name="World"/>,document.getElementById('test'));
// registerServiceWorker();
