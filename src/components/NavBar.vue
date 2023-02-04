<template>
    <nav class="navbar">
        <div class="container">
            <div class="nav-section">
                <p>En</p>
                <div class="search-bar">
                    <input type="text" placeholder="Search">
                </div>
            </div>
            <div class="nav-section">
                <h2>HARRY STYLES</h2>
                <div class="nav-links">
                    <a href="">New Arrivals</a>
                    <a href="">Jewelry</a>
                    <a href="">Clothes</a>
                    <a href="">Shoes</a>
                    <a href="">Accessories</a>
                </div>
            </div>
            <div class="nav-section">
                <p>Sign in</p>
                <span></span>
            </div>
        </div>
        
    </nav>
</template>

<style scoped>
/* nav{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
} */
nav .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
}

.nav-section:nth-child(1){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.nav-section:nth-child(2){
    flex-basis: 60%;
}

.nav-section:nth-child(2) > h2{
    text-align: center;
}

.nav-links{
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
}

.nav-links a{
    text-decoration: none;
    color: black;
}

.search-bar{
    width: fit-content;
    height: 20px;
    background: gray;
    padding: 5px;
    border-radius: 12px;
}

.search-bar input{
    border: none;
    background: inherit;
}
</style>