let box = document.querySelector(".box")

let caunt =0

box.onclick = () => {
            let rnd = Math.floor(Math.random () * 10)
            if (rnd == "1" ) {
                box.style.backgroundColor = "red"
                box.style.borderRadius = "47% 53% 58% 42% / 0% 100% 0% 100% "
            }else if (rnd == "2") {
                box.style.backgroundColor = "green"
                box.style.borderRadius = "1% 99% 0% 100% / 0% 100% 0% 100% "
            }else  if(rnd == "3") {
                box.style.borderRadius = "100% 0% 63% 37% / 66% 0% 100% 34% "
                box.style.backgroundColor = "yellow"
            }else if (rnd == "4") {
                box.style.borderRadius = "50% 50% 0% 100% / 100% 100% 0% 0% "
                box.style.backgroundColor = "black"
            }else if (rnd == "5") {     
                box.style.borderRadius = "45% 55% 46% 54% / 0% 0% 100% 100% "          
                box.style.backgroundColor = "grey"
            }else if (rnd == "6") {
                box.style.borderRadius = "50%"
                box.style.backgroundColor = "orange"
            }else if (rnd == "7"){
                box.style.borderRadius = " 50% 0 50% 0"
                box.style.backgroundColor = "cyan"                
            }else if (rnd == "8") {
                box.style.borderRadius = "0 50% 0 50%"
                box.style.backgroundColor = "hotpink"    
            }else if (rnd == "9") {
                box.style.borderRadius =" 0 0 50% 50%"
                box.style.backgroundColor = "indigo"    
            }else if (rnd == "10") {
                box.style.borderRadius = " 50% 50% 0 0"
                box.style.backgroundColor = "salmon"    
            }else if (rnd == "0") {
                box.style.borderRadius = "50% 0 0 50%"
                box.style.backgroundColor = "saddlebrown"    
                
            }
            // }else {
            //     box.style.backgroundColor = "white"

            // }
            console.log(rnd);
}
