import React, { useState } from "react";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
    const [alertWarning, setAlertWarning] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);

    const inputTextHandler = (e) => {
        setInputText(e.target.value)   //inputtaki değişikliği consola yazdırdı
    }


    const submitTodoHandler = (e) => {   //yenilenmeyi önlemek için
        e.preventDefault();
        const isEmpty = str => !str.trim().length;
        if (isEmpty(inputText)) {
            setAlertWarning(true);
            setTimeout(() => {
                setAlertWarning(false);
            }, 1000);
        } else {
            setAlertSuccess(true);
            setTimeout(() => {
                setAlertSuccess(false);
            }, 1000);
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random() }
            ]);
        }

        setInputText("")
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form>
            <div className="search">
                <input value={inputText} type="text" className="todo-input" placeholder="Ekle..." onChange={inputTextHandler} />
                <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                    <i className="fas fa-plus-circle"></i>
                </button>
            </div>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">Tümü</option>
                    <option value="completed">Tamamlanmış</option>
                    <option value="uncompleted">Tamamlanmamış</option>
                </select>
            </div>
            <div className="alert-wrapper">
                {alertWarning ? <div className="alert-warning">
                    <div>Giriş alanı boş geçilemez!</div>
                </div> : ""}
                {alertSuccess ? <div className="alert-success">
                    <div>Ekleme Başarılı.</div>
                </div> : ""}
            </div>
        </form>
    )
}

export default Form;