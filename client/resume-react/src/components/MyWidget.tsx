import React from 'react';





function Widget(props){


    //var blinks = props.blinks.length;
    //console.log("blinks: ", blinks);
    var blinks = props.blinks;
    var width = 300;

    //Calculates the center position of the node circle being drawn
    // on the circumference of the inner circle
    for (let i=0; i<blinks.length; i++){
  
      let angle = (i /(blinks.length/2)) * Math.PI;
      let x = (blinks[i].radius * Math.cos(angle)) + (width/2);
      let y = (blinks[i].radius * Math.sin(angle)) + (width/2);

      blinks[i].id = i;
      blinks[i].x = x;
      blinks[i].y = y;
    }
  
    const dots = blinks.map( (dot) =>
      <React.Fragment key={dot.id}>
        {/* Circle */}
        <circle id={"NodeCircle:"+String(dot.id)} stroke="#000000" opacity=".25" r={dot.radius} cy={dot.y} cx={dot.x} strokeLinecap="null" strokeLinejoin="null" strokDasharray="null" strokeWidth="5" fill="#0c4e6d"/>
        {/* Center Point of Circle */}
        <circle id={"NodeDot:"+String(dot.id)} stroke="#000000" opacity=".25" r={dot.radius/dot.radius} cy={dot.y} cx={dot.x} strokeLinecap="null" strokeLinejoin="null" strokDasharray="null" strokeWidth="5" fill="#0c4e6d"/>
      </React.Fragment>
    )
  
    return(
      <svg className="icon2" width={width} height={width} xmlns="http://www.w3.org/2000/svg" >
        <g>
          <circle id="inner_circle" stroke="#000000" opacity="0.25" r="50"  cy={width/2} cx={width/2} strokeLinecap="null" strokeLinejoin="null" strokDasharray="null" strokeWidth="5" fill="#19a01b"/>
          {dots}
          <circle id="outer_circle" stroke="#000000" opacity="0.1" r="100"  cy={width/2} cx={width/2} strokeLinecap="null" strokeLinejoin="null" strokDasharray="null" strokeWidth="5" fill="#19a01b"/>
        </g>
      </svg>
    )
  }

  export default Widget;