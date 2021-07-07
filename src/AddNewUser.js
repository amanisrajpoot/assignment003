import React, {useState} from 'react'

const AddNewUser = (props) => {
    const [title, setTitle] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [cell, setCell] = useState('')
    const [city, setCity] = useState('')

    const onSubmit= (e) =>{
        e.preventDefault()

        if(!first){
            alert("Please complete information")
            return
        }
        
        props.onAddUser({title, first, last, age, gender, email, cell, city})

        setTitle('')
        setFirst('')
        setLast('')
        setAge('')
        setGender('')
        setEmail('')
        setCell('')
        setCity('')

    }

    return (
        <>
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Title</label>
                <input type='text'placeholder='Title' 
                value={title} 
                onChange={(e)=> setTitle(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>First Name</label>
                <input type='text'placeholder='First Name' 
                value={first} 
                onChange={(e)=> setFirst(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Last Name</label>
                <input type='text'placeholder='Last Name' 
                value={last} 
                onChange={(e)=> setLast(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Age</label>
                <input type='text'placeholder='Age' 
                value={age} 
                onChange={(e)=> setAge(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Gender</label>
                <input type='text'placeholder='Gender' 
                value={gender} 
                onChange={(e)=> setGender(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Email</label>
                <input type='text'placeholder='Email' 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Cell Number</label>
                <input type='text'placeholder='Cell Number' 
                value={cell} 
                onChange={(e)=> setCell(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>City</label>
                <input type='text'placeholder='City' 
                value={city} 
                onChange={(e)=> setCity(e.target.value)}></input>
            </div>

            <input type="submit" value="Save User" 
                style={{fontSize: 20}} className="btn btn-block"></input>
            
        </form>
        <button onClick={props.karlo} style={{fontSize: 20}}>Close Form</button>
        </>
    )
}

export default AddNewUser