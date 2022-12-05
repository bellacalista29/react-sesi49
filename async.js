import axios from "axios";

const getData = async() => {
    const response = await axios("https://jsonplaceholder.typicode.com/comments")
    
    const dataFilter = await response.data.filter(data => data.postId == 20)

    console.log(dataFilter)

}

getData()