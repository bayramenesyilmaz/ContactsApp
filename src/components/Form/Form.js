import {useState} from 'react'

function Form({addContact,contact}) {
    const [form , setForm] = useState({fullName : "" , phone_number : ""})

    function inputValue(event){

        setForm({...form , [event.target.name]: event.target.value});

    }

    function btnSubmit(e){
      e.preventDefault();

      if(form.fullName === "" || form.phone_number === ""){
        return false
      }

      addContact([...contact,form])

      setForm({fullName : "" , phone_number : ""})
      
    }
    

  return (
    <form className='form' onSubmit={btnSubmit}> 
        <div>
        <input  name='fullName' placeholder='Full Name' onChange={inputValue} value={form.fullName} ></input>
        </div>
        
        <div>
        <input  name='phone_number' placeholder='Phone Number' onChange={inputValue} value={form.phone_number} ></input>
        </div>
        
        <div>
        <button type='submit'>Add</button>
        </div>
        
    </form>
  )
}

export default Form