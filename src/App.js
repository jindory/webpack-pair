import React, { useState } from 'react';
import styled from 'styled-components';
import './style.css';

function App() {
    const [count, setCount] = useState(0);
	return (
		<>
			<Container>
				<h1>^ㅅ^</h1>
				<h2>App + Webpack + Babel✨</h2>
                <div>{count}</div>
                <button onClick={()=>setCount((pre) => pre+1 )}>Click</button>
			</Container>
		</>
	)
};
export default App;

const Container = styled.div`
    width:100%;
    height:100vh;
    background:#000;
    text-align: center;
    color:#fff;
`