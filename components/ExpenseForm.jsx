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
    
}







export default ExpenseForm;