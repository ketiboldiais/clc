import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TeX from "@matejmazur/react-katex"
import 'katex/dist/katex.min.css'
import { useState } from 'react'
import { Csm } from '../components/src'

export default function Home() {
  const [calc,setCalc] = useState("");
  const [result,setResult] = useState("");
  const updateCalc = (value:any):any => {
    setCalc(calc + value);
    setResult(calc + value);
  }
  const evalExpression = (value:any):any => {
    setResult(`${Csm.eval(value)}`);
  }
  const reset = ():any => {
    if (calc == '') {
      return;
    }
    setCalc("");
    setResult("");
  }
  const deleteLast = () => {
    if (calc == '') {
      return;
    }
    const value = calc.slice(0,-1);
    setCalc(value);
    setResult(value);
  }
  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="display">
          <div className="output"><TeX math={result ? Csm.latexify(result) : "0"}/></div>
          <div className="input"><TeX math={calc || "\\varnothing"}/></div>
        </div>
        <div className='evalButton'>
          <button onClick={()=>evalExpression(result)}>EVAL</button>
        </div>
        <div className='digits'>
          <button onClick={()=>updateCalc('.')}>.</button>
          <button onClick={()=>updateCalc('0')}>0</button>
          <button onClick={()=>updateCalc('1')}>1</button>
          <button onClick={()=>updateCalc('2')}>2</button>
          <button onClick={()=>updateCalc('3')}>3</button>
          <button onClick={()=>updateCalc('4')}>4</button>
          <button onClick={()=>updateCalc('5')}>5</button>
          <button onClick={()=>updateCalc('6')}>6</button>
          <button onClick={()=>updateCalc('7')}>7</button>
          <button onClick={()=>updateCalc('8')}>8</button>
          <button onClick={()=>updateCalc('9')}>9</button>
        </div>
        <div className='operators'>
          <button onClick={deleteLast}>DEL</button>
          <button onClick={reset}>CLEAR</button>
          <button onClick={() => updateCalc('/')}><TeX math="/"/></button>
          <button onClick={() => updateCalc('*')}><TeX math="\times"/></button>
          <button onClick={() => updateCalc('+')}><TeX math="+"/></button>
          <button onClick={() => updateCalc('-')}><TeX math="-"/></button>
          <button onClick={() => updateCalc('%')}><TeX math="a \space\text{mod}\space b"/></button>
          <button onClick={() => updateCalc('^2')}><TeX math="x^2"/></button>
          <button onClick={() => updateCalc('^')}><TeX math="x^n"/></button>
          <button onClick={() => updateCalc('sqrt(')}><TeX math="\sqrt{x}"/></button>
          <button onClick={() => updateCalc('cos(')}><TeX math="\cos{x}"/></button>
          <button onClick={() => updateCalc('tan(')}><TeX math="\tan{x}"/></button>
          <button onClick={() => updateCalc('sin(')}><TeX math="\sin{x}"/></button>
          <button onClick={() => updateCalc('acos(')}><TeX math="\text{acos}~{x}"/></button>
          <button onClick={() => updateCalc('acosh(')}><TeX math="\text{acosh}~{x}"/></button>
          <button onClick={() => updateCalc('floor(')}><TeX math="\lfloor{x}\rfloor"/></button>
          <button onClick={() => updateCalc('ceil(')}><TeX math="\lceil{x}\rceil"/></button>
          <button onClick={() => updateCalc('ln(')}><TeX math="\ln x"/></button>
          <button onClick={() => updateCalc(',')}><TeX math=","/></button>
          <button onClick={() => updateCalc('(')}><TeX math="\texttt{(}"/></button>
          <button onClick={() => updateCalc(')')}><TeX math="\texttt{)}"/></button>
          <button onClick={() => updateCalc('[')}><TeX math="\texttt{[}"/></button>
          <button onClick={() => updateCalc(']')}><TeX math="\texttt{]}"/></button>
        </div>
        
      </div>
    </div>
  )
}
