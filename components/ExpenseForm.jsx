import React, {useState} from "react";
const ExpenseForm= ({ onAddExpense}) => {
    const [form,setForm]=useState({
        name: '',
        Description: '',
        Category: '',
        Amount: '',
        Date: ''
    });
    const hanleChange = (e) => {
        setForm ({...form, [e.target.name]: e.target.value});
    };
}






export default ExpenseForm;