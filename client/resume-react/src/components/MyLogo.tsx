import React from 'react'

function MyLogo(){
  
    var leaves = 6;
    var nodes = [];
    var width = 50;
    var radius = 12.5;
  
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
        <circle id={String(dot.id)} stroke="#000000" opacity=".25" r={dot.radius} cy={dot.y} cx={dot.x}  strokeWidth="5" fill="#0c4e6d"/>
        <circle id={String(dot.id)} stroke="#000000" opacity=".25" r={dot.radius/dot.radius} cy={dot.y} cx={dot.x}  strokeWidth="5" fill="#0c4e6d"/>
      </React.Fragment>
    )
  
    return(
      <svg className="mylogo rounded-circle" width={width} height={width} xmlns="http://www.w3.org/2000/svg" >
        <g>
          <circle id="base_circle" stroke="#000000" opacity="0.25" r="50"  cy={width/2} cx={width/2}  strokeWidth="5" fill="#19a01b"/>
          {dots}
          <circle id="top_circle" stroke="#000000" opacity="0.1" r="100"  cy={width/2} cx={width/2}  strokeWidth="5" fill="#19a01b"/>
        </g>
      </svg>
    )
  
  }

export default MyLogo;