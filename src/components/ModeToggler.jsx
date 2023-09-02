function ModeToggler() {
    function handleClick() {
        darkModeOn = !darkModeOn;

        if (darkModeOn === true) {
        console.log("Dark Mode is ON");
        } else {
        console.log("Light Mode is ON");
        }
    }

    let darkModeOn = true;
    const darkMode = <h1>Dark Mode On</h1>;
    const lightMode = <h1>Light Mode On</h1>;
    return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>Mode</button>
    </div>
  );
}
export default ModeToggler;
