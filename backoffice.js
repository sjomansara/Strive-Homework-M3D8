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

// window.onload = () => {
//     const url = "https://striveschool-api.herokuapp.com/api/product/"
//     console.log(getProduct(url))  
// }

const handleSubmit = async function(event) {
    event.preventDefault()

    const url = "https://striveschool-api.herokuapp.com/api/product/"

    const newProduct = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        brand: document.getElementById("brand").value,
        price: document.getElementById("price").value,
        imageUrl: document.getElementById("image").value,
    }

    console.log(newProduct)

    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers:{
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjE4YzJkNTI2MjAwMTViNmRjOTIiLCJpYXQiOjE2MjkyODY3OTYsImV4cCI6MTYzMDQ5NjM5Nn0.yAhu_c4q0lOI03taC9l2-tRr-g2fSMHLx3aDjJPmgoA",
                "Content-Type": "application/json",
            }
        })

        if(response.ok){
            const productResponse = await response.json()
            return productResponse
        }

    } catch (error){
        console.log(error)
    }finally{
        console.log("Product submitted")
    }
}
