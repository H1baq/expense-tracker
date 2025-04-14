import React, {useState} from "react";
const ExpenseForm= ({ onAddExpense}) => {
    const [form,setForm]=useState({
        name: '',
        Description: '',
        Category: '',
        Amount: '',
        Date: ''
    });
    const handleChange = (e) => {
        setForm ({...form, [e.target.name]: e.target.value});
    };
    const  handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
            ...form,
            id: Date.now()
        };
        onAddExpense(newExpense);
        setForm({ name:'', Description:'', Category: '', Date:''});
    };
    return (
        <form onSubmit={handleSubmit}>
            <input name= "name" value={form.name} onChange={handleChange} placeholder="Expense Name" required/>
            <input name= "description" value={form.Description} onChange={handleChange} placeholder="Description" required/>
            <input name= "category" value={form.Category} onChange={handleChange} placeholder="Category" required/>
            <input name= "amount" value={form.Amount} onChange={handleChange} type= "number" placeholder="Amount"/>
            <input name= "date" value={form.Date} onChange={handleChange} type="date" placeholder="Date" />
            <button type="submit">Submit</button>
        </form>
    );
    
};
export default ExpenseForm;