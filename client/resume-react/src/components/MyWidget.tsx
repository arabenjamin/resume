import React from 'react';





function Widget(props){
   
    //const { width = 300, radius = 50, ...restProps } = props;

    //var blinks = props.blinks.length;
    //console.log("blinks: ", blinks);
    var leaves = props.leaves;
    var width = props.width;
    var radius = props.radius;
    var nodes = [];

    //Calculates the center position of the node circle being drawn
    // on the circumference of the inner circle
    for (let i=0; i<leaves; i++){
  
      let angle = (i /(leaves/2)) * Math.PI;
      let x = (radius * Math.cos(angle)) + (width/2);
      let y = (radius * Math.sin(angle)) + (width/2);
      let node = {
        'id':i,
        'x':x, 
        'y':y,
        'radius': radius
        
      };
      nodes.push(node);

    }
  
    const dots = nodes.map( (dot) =>  
      <React.Fragment key={dot.id}>
        {/* Circle */}
        <circle id={"NodeCircle:"+String(dot.id)} className="leaf" r={dot.radius} cy={dot.y} cx={dot.x} />
        {/* Center Point of Circle */}
        <circle id={"NodeDot:"+String(dot.id)} className="leaf" r={dot.radius/dot.radius} cy={dot.y} cx={dot.x} />
      </React.Fragment>
    )
  
    return(
      <svg className="icon2" width={width} height={width} xmlns="http://www.w3.org/2000/svg" >
        <g>
          <circle id="outer_circle" className="outer_circle"  r={width/3}  cy={width/2} cx={width/2}  />
          
          <circle id="inner_circle" className="inner_circle"  r={width/6}  cy={width/2} cx={width/2} />
          {dots}
       
        </g>
      </svg>
    )
  }

  export default Widget;