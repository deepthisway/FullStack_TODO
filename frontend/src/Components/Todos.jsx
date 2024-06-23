import React from 'react';

export function Todos({ todos }) {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        marginTop: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        width: "80%",
        maxWidth: "600px",
        margin: "20px auto"
    };

    const todoStyle = {
        backgroundColor: "#f9f9f9",
        padding: "15px",
        margin: "10px 0",
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "100%",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    };

    const titleStyle = {
        fontSize: "1.5em",
        margin: "0 0 10px 0",
        color: "#333"
    };

    const descriptionStyle = {
        fontSize: "1.2em",
        margin: "0 0 10px 0",
        color: "#666"
    };

    const buttonStyle = {
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "4px",
        fontSize: "1em",
        cursor: "pointer",
        transition: "background-color 0.3s"
    };

    return (
        <div style={containerStyle}>
            {todos.map((todo) => (
                <div key={todo.id} style={todoStyle}>
                    <h1 style={titleStyle}>{todo.title}</h1>
                    <h2 style={descriptionStyle}>{todo.description}</h2>
                    <button 
                        style={buttonStyle}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#007BFF"}
                    >
                        {todo.completed ? "Completed" : "Mark as complete"}
                    </button>
                </div>
            ))}
        </div>
    );
}
