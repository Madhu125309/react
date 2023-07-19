import Movie from './Movie'
function Employee(){
    let eName="madhu"
    let esal=45000
    return<div>
        <h1>Employee component</h1>
        <h2>Employee Name: {eName}</h2>
        <h3>Employee Salary: {esal}</h3>
        <Movie/>
    </div>
}
export default Employee