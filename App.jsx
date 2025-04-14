import React, {useState} from 'react';
import ExpenseForm from './components/ExpenseForm';

function App  (){
    const [expense, setExpenses] = useState([]);
    const [searchTerm, setSearchTerm] =useState('');
     const addExpense =(expenses) => {
        setExpenses([expense, ...expenses]);
     };
}




export default App;