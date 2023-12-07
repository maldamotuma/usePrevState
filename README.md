
## Introduction
`usePrevState` is a React utility package designed to simplify state management in functional components. This package provides a custom hook, `usePrevState`, which allows developers to effortlessly track and store the previous state values of their components. By seamlessly integrating into both hook-based and traditional components, `usePrevState` enhances the predictability and efficiency of state changes, offering a straightforward solution for developers seeking more robust state management in their React applications.

## A Guide on Implementing usePrevState in React Applications

    import { usePrevState } from  "@malda/usePrevState";
    import {useState} from  "react";
    
      
    
    const  MyComponent = () => {
    const [state, setState] = useState<number>(0);
    const  prevState = usePrevState<number>(state);
    return (
	    <div>
		    <p>Previous Value : <strong>{prevState}</strong></p>
		    <p>Current Value : <strong>{state}</strong></p>
		    <button  onClick={() =>  setState(state + 1)}>plus</button>
		    <button  onClick={() =>  setState(state - 1)}>minus</button>
	    </div>
    )
    
    }

