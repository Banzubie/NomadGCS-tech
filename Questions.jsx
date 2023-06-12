/*
a)  Create a component in React with an input value of 10 (default), then keep this value in a state. Next apply the useRef function so a user can change the input value to 20. Consider using the Material UI Library, but not required.
*/

const tenToTwenty = () => {
  const inputRef = useRef(10);

  const changeRefToTwenty = () => {
    inputRef.current = 20;
  };

  return (
    <div>
      <input type='button' onClick={changeRefToTwenty}>Click to change to 20</input>
    </div>
  )
}

/*
b)  Make a slider bar using Material UI library and enable it so that a user can change the state. For example, when you move to the slider, the state value will changed. Make the range between 0 to 100.
*/

const sliderBar0To100 = () => {
  const [slideVal, setSlideVal] = useState(0);

  const sliderChange = (e) => {
    setSlideVal(e.target.value);
  };

  return (
    <div>
      <Slider defaultValue={0} aria-label="SliderBar0to100" valueLabelDisplay="auto" min={0} max={100} onChange={sliderChange}/>
    </div>
  )
}

/*
c)  Convert the following into a functional component tsx file in React:

document.querySelector(".input").addEventListener("input", event => {
              keyboard.setInput(event.target.value);
});
*/



/*
d)  Create a data class in Kotlin that is serializable with Kotlinx serialization and has an enum parameter.
*/

