import { useReducer } from "react"


// create a reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 }

    case "decrement":
      return { ...state, count: state.count - 1 }

    case "userinput":
      return { ...state, userinput: action.payload }

    case "tgcolor":
      return { ...state, color: !state.color }

    default:
      throw new Error()
  }
}

// create an ACTION holder
const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  USERINPUT: "userinput",
  TGCOLOR: "tgcolor"
}

function App() {

  const [state, dispatch] = useReducer(reducer, { userinput: "", count: 0, color: false })

  return (
    <div className="min-h-[100vh] flex flex-col gap-y-4 items-center justify-center bg-gray-800">
      <div className="flex flex-col items-center gap-y-3">
          <input value={state.userinput} onChange={(e) => dispatch({ type: ACTION.USERINPUT, payload: e.target.value })} type="text" className="block h-8 outline-none px-3 rounded-md"/>
          <p className={`${state.color ? "text-red-500" : "text-white"} font-medium`}>{state.count}</p>
          <div className="flex justify-center gap-2">
            <button onClick={() => dispatch({type: ACTION.DECREMENT})} className="bg-gray-300 py-2 px-4 rounded-md cursor-pointer font-medium">-</button>
            <button onClick={() => dispatch({ type: ACTION.INCREMENT })} className="bg-gray-300 py-2 px-4 rounded-md cursor-pointer font-medium">+</button>
            <button onClick={() => dispatch({ type: ACTION.TGCOLOR })} className="bg-gray-300 py-2 px-4 rounded-md cursor-pointer font-medium">Color</button>
          </div>
      </div>
        <p className={`text-white text-xl w-[15rem] break-words text-center`}>{state.userinput}</p>
    </div>
  )
}

export default App
