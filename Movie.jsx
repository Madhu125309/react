import Course from "./Course"
let Movie =()=>{
    let movieName="Baby"
    let moviePrice=150

    return<div>
        <h1>Movie Component</h1>
        <hr/>
        <h2>Movie Name:{movieName}</h2>
        <h3>Movie Price:{moviePrice}</h3>
        <Course/>
    </div>
}
export default Movie