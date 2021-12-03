import React from 'react'

function Input({inputText,setInputText,todos,setTodos}) {

    const handleChange = (e)=>{
        setInputText(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputText===''){
            alert('please add a task')
            return
        }

        const exist = todos.some(el=>el.toLowerCase()===inputText.toLowerCase())

        if(exist){
            alert('The task you are trying to add already exists');
            setInputText('');
            return
        }
        

        setTodos([
            ...todos,inputText
        ])


        setInputText('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <input value={inputText} onChange={handleChange} type="text" name="todo" placeholder="Plans..."/>
            <button type="submit">
                Add
            </button>
        </form>
    )
}

export default Input
