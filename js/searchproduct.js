const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-listss");
    const prod = document.querySelectorAll(".prod");
    const pname = document.getElementsByTagName("h2");

    for(var i = 0 ; i < pname.length; i++){
        let match = prod[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML;
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                prod[i].style.display="";

            }
            else{
                prod[i].style.display="none";
            }
        }
    }

}

const searchItem = document.getElementById("search-item");
const productList = document.getElementById("product-listss");

productList.style.display = "none";

searchItem.addEventListener("keyup", function() {
  if (searchItem.value) {
    productList.style.display = "block";
  } else {
    productList.style.display = "none";
  }
});
