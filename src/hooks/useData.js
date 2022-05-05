import { useEffect, useState } from "react";

const useData = ({ needsData }) => {
    const [results, setResults] = useState(null);
    const [todoId, setTodoId] = useState(1);
    const colors = ["blue", "green", "red"];
    const [counter, setCounter] = useState(0);
    const [buttonColor, setButtonColor] = useState("blue");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/todos/${todoId}`
                );
                const data = await response.json();
                setResults(data);
            } catch (error) {
                console.log("Error is: ", error);
            }
        };

        if (needsData) {
            fetchData();
        }
    }, [needsData, todoId]);

    const increaseCount = () => {
        setTodoId(todoId + 1);
    };

    const clickedButton = () => {
        console.log("I clicked the button");
        let buttonColor = colors[counter];
        if (counter === 2) {
            setCounter(0);
        } else {
            setCounter(counter + 1);
        }
        setButtonColor(buttonColor);
        increaseCount();
    };

    return { results, clickedButton, buttonColor };
};

export default useData;
