import React from 'react';

class Sizing extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width: this.props.currentWidth,
            height: this.props.currentHeight
        }

    }

    updateWidth = (width) => {
        const numberRegex = new RegExp(/^\d+$/);
        const isNumber = numberRegex.test(width);
        if(isNumber){
            console.info('');
            this.props.updateWidth({width: Number(width)});
            return;
        }
        console.warn(`The input "${width}" is not a number`);
    }

    updateHeight = (height) => {
        const numberRegex = new RegExp(/^\d+$/);
        const isNumber = numberRegex.test(height);
        if(isNumber){
            console.info('');
            this.props.updateHeight({height: Number(height)});
            return;
        }
        console.warn(`The input "${height}" is not a number`);
    }

    render(){
        return(<>
            <h3>Sizing</h3>
            <div className="flex control-row">
                <div className="control-prop">
                    <label htmlFor="width">width:</label>
                    <input id="width" type="text" 
                    onKeyUp={(e)=>{this.updateWidth(e.target.value)}} 
                    defaultValue={this.state.width}/>
                </div>

                <div className="control-prop">
                    <label htmlFor="height">height:</label>
                    <input id="height" type="text" 
                    onKeyUp={(e)=>{this.updateHeight(e.target.value)}} 
                    defaultValue={this.state.height}/>
                </div>
            </div>
        </>)    
    }
    
}

export default Sizing;