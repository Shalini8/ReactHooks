import logo from './logo.svg';
import './App.css';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import Counter from './Components/Counter';
import ParentComponent from './Components/UseCallback/ParentComponent';
import CounterMemo from './Components/UseMemo/CounterMemo';
import HookCounterTwo from './Components/UseState/HookCounterTwo';
import HookCounterThree from './Components/UseState/HookCounterThree';
import HookCounterFour from './Components/UseState/HookCounterFour';
function App() {
  return (
    <div className="App">
       <Counter
					render={(count, incrementCount) =>
					<ClickCounter
						count={count}
						incrementCount={incrementCount}>
					</ClickCounter>}>
				</Counter>
				<Counter
					render={(count, incrementCount) =>
					<HoverCounter
						count={count}
						incrementCount={incrementCount}>
					</HoverCounter>}>
				</Counter> 
         {/* useCallback */}
        <ParentComponent/> 
       {/* useMemo */}
       <CounterMemo/>
       <HookCounterTwo/>
       <HookCounterThree/>
       <HookCounterFour/>
     </div>
  );
}

export default App;
