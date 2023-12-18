import React from 'react'
import Confetti from 'react-confetti'
import { Button } from "react-bootstrap";
function Success() {
    const handle=(e)=>{
        e.preventDefault();
        window.location.reload(false);
    }
    
  return (
    <div className='mx-auto'>
    <h4 className='text-success'>🥳 Congratulations 🥳</h4>
    <h5 className='text-success'>You made it 🥳</h5>
    <Button onClick={handle}>Close</Button>
    <Confetti numberOfPieces={100}
    drawShape={ctx => {
        ctx.beginPath()
        for(let i = 0; i < 22; i++) {
          const angle = 0.35 * i
          const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
          const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
          ctx.lineTo(x, y)
        }
        ctx.stroke()
        ctx.closePath()
      }}
  />
  </div>
  )
}

export default Success