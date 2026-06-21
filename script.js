body {
    font-family: Arial;
    text-align: center;
    background: #f5f5f5;
    margin: 0;
}

h1 {
    background: #333;
    color: white;
    padding: 15px;
    margin: 0;
}

#searchBox {
    width: 60%;
    padding: 10px;
    margin: 15px;
    font-size: 16px;
}

.buttons {
    margin: 10px;
}

.buttons button {
    padding: 10px;
    margin: 5px;
    border: none;
    background: #333;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

.buttons button:hover {
    background: #555;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    padding: 20px;
}

.gallery img {
    width: 100%;
    border-radius: 10px;
    transition: 0.3s;
}

.gallery img:hover {
    transform: scale(1.05);
}