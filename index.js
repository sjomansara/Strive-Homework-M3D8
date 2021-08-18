

/* const getData = async () => {

    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMGNkODJkNTI2MjAwMTViNmRkMTEiLCJpYXQiOjE2MjkyOTM3ODUsImV4cCI6MTYzMDUwMzM4NX0.LgVvAVyb8dGeuQmvuw1iDWwn2izs8VX2V5JT7ajkWxc"
        }
        })
    const products = await response.json()
    return products

}

const displayProducts = (products) => {
    const row = document.querySelector(".row")
    console.log("products is: ", products)

    for (let i = 0; i < products.length; i++) {
      row.innerHTML += `
        <div class="col-12 col-sm-6 col-md-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"><a href="/userpage1.html">${products[i].name}</a></h5>
                </div>
            </div>
        </div>
             `
    }
}

window.onload = async () => {
    const url = "https://striveschool-api.herokuapp.com/api/product/"
    try {
        const products = await getData()
        displayProducts(products)
    } catch (err) {
        console.error(err.message)
    }
} */

const getData = async (url) => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMGNkODJkNTI2MjAwMTViNmRkMTEiLCJpYXQiOjE2MjkyOTM3ODUsImV4cCI6MTYzMDUwMzM4NX0.LgVvAVyb8dGeuQmvuw1iDWwn2izs8VX2V5JT7ajkWxc"
            }
            })

        const products = await response.json()

        return products

    } catch (err) {
        console.log("error", err)
    } finally {
        console.log("finally")
    }
}

function displayProducts(products) {
    const row = document.querySelector(".row")

    console.log("products is: ", products)

    for (let i = 0; i < products.length; i++) {
      row.innerHTML += `
        <div class="col-12 col-sm-6 col-md-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${products[i].name}</h5>
                    <p class="card-text">${products[i].description}</p>
                    <p class="card-text">${products[i].brand}</p>
                    <p class="card-text">${products[i].price}</p>
                </div>
            </div>
        </div>
             `
    }
}

window.onload = async () => {

    const url = "https://striveschool-api.herokuapp.com/api/product/"

    const products = await getData(url)

    displayProducts(products)

    console.log(products)

    let form = document.getElementById("myForm");
    function handleForm(event) { 
        console.log("prevented")
        event.preventDefault(); 
    } 
    form.addEventListener('submit', handleForm);

}



const handleSubmit = async (event) => {
    console.log(event)

    const url = "https://striveschool-api.herokuapp.com/api/product/"
    
    let name = document.getElementById("name").value
    let description = document.getElementById("description").value
    let brand = document.getElementById("brand")
    let price = document.getElementById("price").value

    const myProduct = {
        name: name,
        description: description,
        brand: brand,
        price: price
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(myProduct),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMGNkODJkNTI2MjAwMTViNmRkMTEiLCJpYXQiOjE2MjkyOTM3ODUsImV4cCI6MTYzMDUwMzM4NX0.LgVvAVyb8dGeuQmvuw1iDWwn2izs8VX2V5JT7ajkWxc"
            }
        })

        if (response.ok) {
            const respProduct = await response.json()
            alert("Appointment created successfully with an id of " + respProduct._id)
        } else {
            if (response.status >= 400 && response.status < 500) {
                throw new Error("User generated error, verify the data that you are sending!")
            } else if (response.status >= 500 && response.status < 600) {
                throw new Error("Server generated error, contact the admin to fix this problem.")
            }
        }

        console.log("no exception was thrown")

    } catch (err) {
        alert(err.message)
    } finally {
        console.log("You are going to see me every time regardless.")
    }

    console.log("last thing")

}