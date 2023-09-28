import React, {useState} from 'react';
import Goods from "./components/goods/goods";
import Header from "./components/header/header";
import Quiz from "./components/quiz/quiz";

function App() {
    const [question, setQuestion] = useState(1);
    return (<>
            <Header question={question}/>
            {question < 4 ? <Quiz question={question} setQuestion={setQuestion}/>: <Goods/>}
        </>
    );
}

export default App;
