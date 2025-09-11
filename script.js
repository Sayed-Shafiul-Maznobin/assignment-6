const loadCategories = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayCategories(json.categories));
};
const loadCards = (id = {
    
});
const displayCategories = (lessons) => {
  const parent = document.getElementById("categoriesParent");
  parent.innerHTML = "";
  parent.innerHTML = `  <h3 class="pl-4 font-bold">Catagories</h3>   `;

  for (let lesson of lessons) {
    const child = document.createElement("div");
    child.innerHTML = `
    
    

        <button  onclick="loadCards(${lesson.id})"
          class="btn btn-wide hover:text-white hover:bg-[#15803d] bg-transparent border-none flex justify-start"
        >
          ${lesson.category_name}
        </button>
    
    `;
    parent.appendChild(child);
  }
};

////////////////////////////////////////////////////
loadCategories();
