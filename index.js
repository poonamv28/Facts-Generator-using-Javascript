const btn1 = document.getElementById("btn");
const factsele = document.getElementById("factid");
const apikey = "XnnKgycmyE86B4Q6x/2rJQ==bLQtOO11kHOGxRDQ";
const options = {
    method: "GET",
    headers: { 'X-Api-Key': apikey },
};

const apiurl = "https://api.api-ninjas.com/v1/facts?limit=1";

async function factfunc() {
    try {
        factsele.innerText = "Updating..."
        btn1.disable = true;
        btn1.innerText = "Loading.."
        const response = await fetch(apiurl, options);
        const data = await response.json();
        console.log(data[0].fact);
        factsele.innerText=data[0].fact
        btn1.disable = false;
        btn1.innerText = "Next fact Please!"
    } catch (error) {
        factsele.innerText = "An Error Happens,Try Again Later Or check Your Network";
        console.log("Error");
    }
}

btn1.addEventListener("click", factfunc)