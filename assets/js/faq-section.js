function togglePricingTable() {
    const switcher1 = document.querySelector(".price__switcher-1");
    const switcher2 = document.querySelector(".price__switcher-2");
    const table1 = document.querySelector("#table__pricing-1");
    const table2 = document.querySelector("#table__pricing-2");
  
    if (switcher1 && switcher2 && table1 && table2) {
        
      switcher1.addEventListener("click", () => {
        table2.style.display = "none";
        switcher2.classList.remove("active__switcher");
  
        table1.style.display = "flex";
        switcher1.classList.add("active__switcher");
      });
  
      switcher2.addEventListener("click", () => {
        table1.style.display = "none";
        switcher1.classList.remove("active__switcher");
  
        table2.style.display = "flex";
        switcher2.classList.add("active__switcher");
      });
    }
  }
  
  togglePricingTable();