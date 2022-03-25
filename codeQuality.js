// level 1

const GET_DATA = async() => {
    try {
        const result =  await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await result.json();
        return data;
    } catch (error) {
        throw error
    }
}

