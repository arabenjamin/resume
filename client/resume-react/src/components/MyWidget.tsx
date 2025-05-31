import React from 'react';


interface WidgetProps {
  width: number;
  leaves: number;
}

interface Node {
  id: number;
  x: number;
  y: number;
  radius: number;
}
  


function Widget(props: WidgetProps): React.JSX.Element {
  var leaves: number = props.leaves;
  var width: number = props.width;
  var radius: number = width / 6;
  var nodes: Node[] = [];

  if (nodes.length > 6 || leaves > 6) {
    nodes = [];
    leaves = 0;
  }

  // Calculates the center position of the node circle being drawn
  // on the circumference of the inner circle
  for (let i = 0; i < leaves; i++) {
    let angle: number = (i / (leaves / 2)) * Math.PI;
    let x: number = radius * Math.cos(angle) + width / 2;
    let y: number = radius * Math.sin(angle) + width / 2;
    let node: Node = {
      id: i,
      x: x,
      y: y,
      radius: radius,
    };
    nodes.push(node);
  }

  const dots: React.JSX.Element[] = nodes.map((dot) => (
    <React.Fragment key={dot.id}>
      {/* Circle */}
      <circle
        id={"NodeCircle:" + String(dot.id)}
        className="leaf"
        r={dot.radius}
        cy={dot.y}
        cx={dot.x}
      />
      {/* Center Point of Circle */}
      <circle
        id={"NodeDot:" + String(dot.id)}
        className="leafdot"
        r={dot.radius / dot.radius}
        cy={dot.y}
        cx={dot.x}
      />
    </React.Fragment>
  ));

  return (
    <svg
      className="icon2 "
      width={width}
      height={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle
          id="outer_circle"
          className="outer_circle"
          r={width / 3}
          cy={width / 2}
          cx={width / 2}
        />

        <circle
          id="inner_circle"
          className="inner_circle"
          r={width / 6}
          cy={width / 2}
          cx={width / 2}
        />
        {dots}
      </g>
    </svg>
  );
}

  export default Widget;