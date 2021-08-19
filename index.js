
const getAllProducts = async () => {
    const url = "https://striveschool-api.herokuapp.com/api/product/"
    try {
        const response = await fetch (url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMGNkODJkNTI2MjAwMTViNmRkMTEiLCJpYXQiOjE2MjkzNzY4MTQsImV4cCI6MTYzMDU4NjQxNH0.p_v_v7utMuljc6yzUrCSDzJcKRZo0AJojKtFAuA9528",
            }
        })

        const allProducts = await response.json()
        console.log(allProducts)

        return allProducts
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Products uploaded successfully")
    }
}

window.onload = async () => {
    const allProducts = await getAllProducts()

    displayProduct(allProducts)
}

const displayProduct = (products) => {
    let displayProducts = document.querySelector(".row #allProducts")
    
    products.forEach(product => {
     
        displayProducts.innerHTML += 
        `<div class="card col-sm-4 col-lg-2">
        <img class="card-img-top" src="${product.imageUrl}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <h6 class="card-text">Brand: ${product.brand}</h6>
            <p class="card-text">Description: ${product.description}</p>
            <p class="card-text">Price: ${product.price}</p>
          </div>
    </div>`
        
})
}


let results = []

const getProduct = async (url) => {
    try {
        const response = await fetch(url, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMGNkODJkNTI2MjAwMTViNmRkMTEiLCJpYXQiOjE2MjkzNzY4MTQsImV4cCI6MTYzMDU4NjQxNH0.p_v_v7utMuljc6yzUrCSDzJcKRZo0AJojKtFAuA9528",
            }
        })

        const allProducts = await response.json()
        return allProducts

    } catch(error){
        console.log(error)
    }
}

window.onload = () => {
    const url = "https://striveschool-api.herokuapp.com/api/product/"
    getProduct (url)  
}

    const handleSubmit = async function(event) {

        const url = "https://striveschool-api.herokuapp.com/api/product/"

          const newProduct = {
          name: document.getElementById("name").value,
          description: document.getElementById("description").value,
          brand: document.getElementById("brand").value,
          price: document.getElementById("price").value,
          imageUrl: document.getElementById("image").value,
        }
        try {
          const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/product/",
            {
              method: "POST",
              body: JSON.stringify(newProduct),
              headers: { 
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMGNkODJkNTI2MjAwMTViNmRkMTEiLCJpYXQiOjE2MjkzNzY4MTQsImV4cCI6MTYzMDU4NjQxNH0.p_v_v7utMuljc6yzUrCSDzJcKRZo0AJojKtFAuA9528",
                "Content-Type": "application/json",
              }
            })
            if(response.ok) {
            const addedProduct = await response.json()
            alert("Product (ID: " + addedProduct._id + ") is now in your shopping cart.")
            return addedProduct
        }

        } catch (error) {
        console.log(error)
        }finally{
        console.log(newProduct)
        }
    }
