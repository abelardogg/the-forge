import React from 'react';

class Borders extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            borderWidth: this.props.borderWidth,
            // borderStyle: this.props.css.borderStyle,
            // borderColor: this.props.css.borderColor
        }
    }
    
    updateBorderWidth = (width) => {
        const numberRegex = new RegExp(/^\d+$/);
        const isNumber = numberRegex.test(width);
        if(isNumber){
            console.info('');
            this.props.updateBorderWidth({borderWidth: Number(width)});
            return;
        }
        console.warn(`The input "${width}" is not a number`);
    }

    updateBorderStyle = (style) => {
            console.info('');
            this.props.updateBorderStyle({borderStyle: style});
            return;
    }

    updateBorderColor = (color) => {
        const hexNumberRegex = new RegExp(/([0-9a-fA-F]){6}/);
        const isHexNumber = hexNumberRegex.test(color);
        if(isHexNumber){
            this.props.updateBorderColor({borderColor: `#${color}`});
            return;
        }
        console.warn(`The input "${color}" is not a number`);
    }
    
    render(){
        return(<>
            <h3>Borders</h3>
            <p className="disclaimer">
                This section applies for all the borders, configuration for individual border will be applied in future release.
            <br/>
                You can learn more about borders <a href="https://developer.mozilla.org/es/docs/Web/CSS/border-style#values">here</a>.
            </p>
            <div className="flex control-row">
                <div className="control-prop">
                    <label htmlFor="border-width">border-width:</label>
                    <input id="border-width" type="text" 
                    onKeyUp={(e)=>{this.updateBorderWidth(e.target.value)}} 
                    defaultValue={this.state.borderWidth}/>
                </div>

                <div className="control-prop">
                    <label htmlFor="border-style">border-style:</label>
                    <select name="" id="border-style"
                    onChange={(e)=>{this.updateBorderStyle(e.target.value)}}>
                        <BorderStylesList/>
                    </select>

                </div>

                <div className="control-prop">
                    <label htmlFor="border-color">border-color:</label>
                    <input id="border-color" type="text" 
                    onKeyUp={(e)=>{this.updateBorderColor(e.target.value)}} 
                    defaultValue={'000'}/>
                </div>

            </div>
        
        </>)
    }
}

function BorderStylesList(){
    const values = [
        'solid',
        'none',
        'dotted',
        'dashed',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
        'hidden'
    ]

    const el = values.map(value=>{
        return <option value={value}>{value}</option>;
    });

    return el;
}


export default Borders;