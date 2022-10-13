const adminSignUp = () => {
    if (localStorage.adminDetails) {
        let found = []
        let adminDets = localStorage.getItem("adminDetails")
        let signUpDetails = JSON.parse(adminDets)
        let signUpnewDetails = { firstName: fName.value, lastName: lName.value, email: email.value, password: psw.value }
        for (let i = 0; i < signUpDetails.length; i++) {
            if (signUpnewDetails.email == signUpDetails[i].email) {
                found.push(signUpnewDetails)
            }

        }
        if (found.length != 0) {
            alert("Email exists");
        } else {

            console.log(signUpDetails)
            signUpDetails.push(signUpnewDetails)
            let stringDetails = JSON.stringify(signUpDetails)
            localStorage.setItem("adminDetails", stringDetails)
            window.location.href = "login.html"
        }

    }
    else {
        signUpDetails = []
        let signUpnewDetails = { firstName: fName.value, lastName: lName.value, email: email.value, password: psw.value }
        signUpDetails.push(signUpnewDetails)
        let stringDetails = JSON.stringify(signUpDetails)
        localStorage.setItem("adminDetails", stringDetails)
        window.location.href = "login.html"
    }
}

const adminSignIn = () => {
    let signIn = { email: email2.value, password: psw2.value }
    console.log(signIn);
    let adminDetails = localStorage.getItem("adminDetails")
    let parsedDetails = JSON.parse(adminDetails)
    console.log(parsedDetails);
    for (let i = 0; i < parsedDetails.length; i++) {
        if (signIn.email == parsedDetails[i].email && signIn.password == parsedDetails[i].password) {
            let a = JSON.stringify(parsedDetails[i])
            localStorage.setItem("currentUser", a)
            if (localStorage.productDetails) {
                window.location.href = "adminDashboard.html"
            } else {
                localStorage.setItem("productDetails", [])
                window.location.href = "adminDashboard.html"
            }
            // console.log(parsedDetails);
        } else {
            alert("Invalid LogIn details")
        }

    }
}

const saveItem = () => {
    let itemArr = []
    let details = {
        name: input1.value,
        desc: input2.value,
        category: input3.value,
        price: input4.value,
        file: input5.files[0].name
    }
    itemArr.push(details)
    if (localStorage.productDetails.length < 1) {
        console.log(localStorage.productDetails.length)
        console.log("Ëmpty")
        let ife = []
        ife.push(details)
        let pelumi = JSON.stringify(ife)
        localStorage.setItem("productDetails", pelumi)
    }
    else {
        let wole = JSON.stringify(itemArr)
        let ore = localStorage.getItem("productDetails")
        let ope = JSON.parse(ore)
        if (ope.length != 0) {
            let ife = []
            ife.push(...ope, details)
            let pelumi = JSON.stringify(ife)
            localStorage.setItem("productDetails", pelumi)

        } else {
            localStorage.setItem("productDetails", wole)
        }
        window.location.reload()

    }
}



const displayDetails = () => {
    if (localStorage.productDetails) {
        let products = localStorage.getItem("productDetails")
        let parsedProducts = JSON.parse(products)
        // console.log(parsedProducts);
        for (let i = 0; i < parsedProducts.length; i++) {
            // console.log(parsedProducts[i])
            section2.innerHTML += `
            <div class="card w-25 mx-2">
                <img src='./images/${parsedProducts[i].file}' style='height:200px;'/>
                <p class='mx-2'>Product Name: ${parsedProducts[i].name}</p>       
                <p class='mx-2'>Product Description: ${parsedProducts[i].desc}</p>
                <p class='mx-2'>Product Category: ${parsedProducts[i].category}</p>
                <p class='mx-2'>Product Price: ${parsedProducts[i].price}</p>
                <button class='btn btn-danger' onClick='deleteProduct
                (${i})'>Delete</button>
            </div>
            `

        }

    } else {
        localStorage.productDetails = []
    }
}


const deleteProduct = (i) => {
    let products = localStorage.getItem("productDetails")
    let parsedProducts = JSON.parse(products)
    for (let j = 0; j < parsedProducts.length; j++) {
        if (j == i) {
            parsedProducts.splice(i, 1)
            localStorage.setItem("productDetails", JSON.stringify(parsedProducts))
        }

    }
    window.location.reload()
}



const loadAdmin = () => {
    let adminDetails = localStorage.getItem("currentUser")
    let parsedDetails = JSON.parse(adminDetails)
    console.log(parsedDetails);
    welcome1.innerHTML += `Welcome ${parsedDetails.firstName} ${parsedDetails.lastName}`
    displayDetails()
}

const loadUser = () => {
    let userDetails = localStorage.getItem("currentUser")
    let parsedDetails = JSON.parse(userDetails)
    // console.log(parsedDetails);
    welcome2.innerHTML += `Welcome ${parsedDetails.firstName} ${parsedDetails.lastName}`
    let products = localStorage.getItem("productDetails")
    let parsedProducts = JSON.parse(products)
    // console.log(parsedProducts);
    for (let i = 0; i < parsedProducts.length; i++) {
        // console.log(parsedProducts[i])
        userSection1.innerHTML += `
        <div class="card w-25 mx-2">
            <img src='./images/${parsedProducts[i].file}' style='height:200px;'/>
            <p class='mx-2'>Product Name: ${parsedProducts[i].name}</p>       
            <p class='mx-2'>Product Description: ${parsedProducts[i].desc}</p>
            <p class='mx-2'>Product Category: ${parsedProducts[i].category}</p>
            <p class='mx-2'>Product Price: ${parsedProducts[i].price}</p>
            <button class='btn btn-success' onClick='toCart
            (${i})'>Add to cart</button>
        </div>
        `

    }
}


const userSignUp = () => {
    if (localStorage.userDetails) {
        let found = []
        let adminDets = localStorage.getItem("userDetails")
        let signUpDetails = JSON.parse(adminDets)
        let signUpnewDetails = { firstName: fName3.value, lastName: lName3.value, email: email3.value, password: psw3.value }
        for (let i = 0; i < signUpDetails.length; i++) {
            if (signUpnewDetails.email == signUpDetails[i].email) {
                found.push(signUpnewDetails)
            }

        }
        if (found.length != 0) {
            alert("Email exists");
        } else {

            console.log(signUpDetails)
            signUpDetails.push(signUpnewDetails)
            let stringDetails = JSON.stringify(signUpDetails)
            localStorage.setItem("userDetails", stringDetails)
            window.location.href = "adminLogin.html"
        }

    }
    else {
        userDetails = []
        let userNewDetails = { firstName: fName3.value, lastName: lName3.value, email: email3.value, password: psw3.value }
        userDetails.push(userNewDetails)
        let stringDetails = JSON.stringify(userDetails)
        localStorage.setItem("userDetails", stringDetails)
        window.location.href = "userLogin.html"
    }
}

const userSignIn = () => {
    let signIn = { email: email4.value, password: psw4.value }
    // console.log(signIn);
    let userDetails = localStorage.getItem("userDetails")
    let parsedDetails = JSON.parse(userDetails)
    console.log(parsedDetails);
    for (let i = 0; i < parsedDetails.length; i++) {
        if (signIn.email == parsedDetails[i].email && signIn.password == parsedDetails[i].password) {
            window.location.href = "userDashboard.html"
            let a = JSON.stringify(parsedDetails[i])
            localStorage.setItem("currentCustomer", a)
        } else {
            alert("Invalid LogIn details")
        }
        
    }
}

const toCart = (i) => {
    cartDetail=[]
    let userDetails = JSON.parse(localStorage.getItem("currentUser"))
    let products = localStorage.getItem("productDetails")
    let parsedProducts = JSON.parse(products)
    newC=[parsedProducts[i],userDetails.email]
    if (localStorage.Carts) {
        let carts=JSON.parse(localStorage.getItem("Carts"))
        carts.push(newC)
        console.log(carts)
        localStorage.setItem("Carts",JSON.stringify(carts))   
    } else {
        cartDetail.push(newC)
        localStorage.setItem("Carts",JSON.stringify(cartDetail))
    }
}

const viewCart = () =>{
    let view = JSON.parse(localStorage.getItem("Carts"));
    let userDetails = JSON.parse(localStorage.getItem("currentUser"))
  
    const see = (ope) => {
        if(ope[1] == userDetails.email){
            return ope
        }
     }
     let wole = view.map(see)
    //  console.log(wole);
     for (let i = 0; i < wole.length; i++) {
        const element = wole[i];
        // console.log(element);
        cartSection1.innerHTML += `
        <div class="card w-25 mx-2 shadow-lg">
            <img src='./images/${element[0].file}' style='height:200px;'/>
            <p class='mx-2'>Product Name: ${element[0].name}</p>       
            <p class='mx-2'>Product Description: ${element[0].desc}</p>
            <p class='mx-2'>Product Category: ${element[0].category}</p>
            <p class='mx-2'>Product Price: ${element[0].price}</p>
            <button class="btn btn-danger" onClick="delCart(${i})">Delete</button>
        </div>
        `
        
     }
    
}

const delCart = (i) => {
   console.log(i);
   let card = localStorage.getItem("Carts")
   let parsedcart = JSON.parse(card)
   for (let j = 0; j < parsedcart.length; j++) {
       if (j == i) {
           parsedcart.splice(i, 1)
           localStorage.setItem("Carts", JSON.stringify(parsedcart))
       }

   }
   window.location.reload()
}


