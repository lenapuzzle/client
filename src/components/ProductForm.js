import React, {useState} from "react";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description});
    //     axios.post('http://localhost:8000/api/products', {
    //         title,
    //         price,
    //         description
    //     })
    //         .then(res => console.log("Response: ", res))
    //         .catch(err => console.log("Error: ", err))
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <h2>Product Manager</h2>
            <p>
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label>
                <input type="number" name="price" value={price} onChange={e => setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label>
                <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)}/>
            </p>
            <input type="submit" value="Create"/>
        </form>
    )
}