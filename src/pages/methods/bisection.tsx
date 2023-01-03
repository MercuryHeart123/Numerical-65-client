import React from 'react'
import { MathJax, MathJaxContext } from "better-react-mathjax";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const Bisection = () => {
    let [latex, setLatex] = React.useState<string>('')
    return (
        <div>
            <input type="text" onChange={(e) => setLatex(e.target.value)} />

            <InlineMath math="\int_0^\infty x^2 dx" />
            <BlockMath errorColor={'#cc0000'}>{`${latex}`}</BlockMath>
            {/* <MathJaxContext>
                <input type="text" onChange={(e) => setLatex(e.target.value)} />
                <MathJax>{`\\(${latex}\\)`}</MathJax>
            </MathJaxContext> */}
        </div>
    )
}

export default Bisection