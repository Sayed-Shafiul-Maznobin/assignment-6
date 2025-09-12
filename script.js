const loadCategories = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayCategories(json.categories));
};

const loadCards = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      const clickBtn = document.getElementById(`   `);
      displayCards(json.plants);
    });
};

const loadAll = () => {
  const url = `https://openapi.programming-hero.com/api/plants`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayAll(json.plants));
};

//////////////////////////////////////////////////////////////////////
const displayCategories = (lessons) => {
  const parent = document.getElementById("categoriesParent");
  parent.innerHTML = "";
  parent.innerHTML = `   
  <h3 class="pl-4 font-bold">Catagories</h3>
  
   
        <button  onclick="loadAll()"
          class="btn btn-wide hover:text-white hover:bg-[#15803d] bg-transparent border-none flex justify-start"
        >
             All Trees
        </button>

        
        
        
        `;

  for (let lesson of lessons) {
    const child = document.createElement("div");
    child.innerHTML = `
    
    

        <button  onclick="loadCards(${lesson.id}) "
          class="btn btn-wide hover:text-white hover:bg-[#15803d] bg-transparent border-none flex justify-start"
        >
          ${lesson.category_name}
        </button>
    
    `;
    parent.appendChild(child);
  }
};
const displayCards = (cards) => {
  const parent = document.getElementById("card-container");
  parent.innerHTML = "";
  cards.forEach((card) => {
    const child = document.createElement("div");
    child.classList.add = "card     bg-white p-2 m-3";

    child.innerHTML = `     
          
          <img
            class="w-57 h-36 py-2   my-3 mx-auto rounded-2xl"
            src="${card.image}"
            alt=""
          />        
          <h3    onclick="my_modal_1.showModal()"  class="py-1">${card.name}</h3>
          <p class="text-gray-600   h-[158px] py-1">${card.description}
          </p>
          <div class="flex justify-between py-1">
            <div>
              <button   
                class="btn btn-accent shadow-none         bg-[#dcfce7] border-none rounded-3xl"
              >
                 ${card.category}  
              </button>
            </div>
            <div class="flex items-center">   ${card.price}     </div>
          </div>
          <button
            class="my-2 btn btn-block text-white bg-[#15803d] rounded-3xl  "
          >
            Add to Cart
          </button>
         `;
    parent.append(child);
  });
};
const displayAll = (cards) => {
  const parent = document.getElementById("card-container");
  parent.innerHTML = "";
  cards.forEach((card) => {
    const child = document.createElement("div");
    child.classList.add = "card     bg-white p-2 m-3";

    child.innerHTML = `     
          
          <img
            class="w-57 h-36 py-2   my-3 mx-auto rounded-2xl"
            src="${card.image}"
            alt=""
          />        
          <h3    onclick="my_modal_1.showModal()"    class="py-1">${card.name}</h3>
          <p class="text-gray-600   h-[158px] py-1">${card.description}
          </p>
          <div class="flex justify-between py-1">
            <div>
              <button
                class="btn btn-accent shadow-none bg-[#dcfce7] border-none rounded-3xl"
              >
                 ${card.category}  
              </button>
            </div>
            <div class="flex items-center">   ${card.price}     </div>
          </div>
          <button
            class="my-2 btn btn-block text-white bg-[#15803d] rounded-3xl"
          >
            Add to Cart
          </button>
         `;
    parent.append(child);
  });
};
////////////////////////////////////////////////////////////////////////
loadCategories();
loadAll();
