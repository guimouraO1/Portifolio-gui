// function Btn() {
// const clickHandler = () => console.log('Clicked!')
//   return (
//     <button onClick={clickHandler}>Click me</button>
//   );
// }
// export default Btn;

function Btn() {
    const styles = {
        width: '300px',
        height: '400px'
    
    }
    
    const clickHandler = () => console.log('Clicked!')
      return (
        <button style={styles} onMouseOver={clickHandler}>Click me</button>
      );
    }
    export default Btn;