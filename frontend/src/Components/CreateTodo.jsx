import React, { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const inputStyle = {
        width: "300px",
        padding: "10px",
        margin: "10px 0",
        border: "2px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px",
        outline: "none",
        transition: "border-color 0.3s, box-shadow 0.3s"
    };

    const buttonStyle = {
        padding: "10px 20px",
        margin: "20px 0",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "4px",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-color 0.3s, box-shadow 0.3s"
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px"
    };

    return (
        <div style={containerStyle}>
            <input
                type="text"
                placeholder="Title"
                style={inputStyle}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                style={inputStyle}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button
                style={buttonStyle}
                onClick={() => {
                    if((title.trim() ==="") || description.trim() === "")   {
                        alert("Please fill in the fields");
                        return;
                    }

                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            title,
                            description,
                            // completed: true,
                        })
                    })
                    .then(async (res) => {
                        const data = await res.json();
                        alert("Todo added");
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert("Failed to add todo");
                    });
                }}
            >
                Add a todo
            </button>
        </div>
    );
}
