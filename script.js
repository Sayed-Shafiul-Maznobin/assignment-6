const loadCategories = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayCategories(json.categories));
};

const loadCards = (id) => {
  manageSpinner(true);
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      const clickBtn = document.getElementById(`   `);
      displayCards(json.plants);
    });
};

const loadAll = () => {

      manageSpinner(true);

  const url = `https://openapi.programming-hero.com/api/plants`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayAll(json.plants));
};
const loadDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log(json.plants.name);
      displayWordDetails(json.plants);
    });

  // const res = await fetch(url);
  //   const details = await res.json();
  //   displayWordDetails(details.data);
};

const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("card-container").classList.add("hidden");
  } else {
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("card-container").classList.remove("hidden");
  }
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
          <h3    onclick="loadDetails(${card.id})"  class="py-1">${card.name}</h3>
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
    manageSpinner(false);
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
          <h3    onclick="loadDetails(${card.id})"  class="py-1">${card.name}</h3>
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
      manageSpinner(false);

  });
};
const displayWordDetails = (plant) => {
  console.log(plant.description);
  //   console.log(plant.name);
  //   const name = document.getElementById("heading1");
  //   name.innerHTML = plant.name;

  const parent = document.getElementById("modal111");
  parent.innerHTML = "";

  const child = `
  <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <h3 id="heading1" class="text-lg font-bold">${plant.name}   </h3>
        <img class="h-60 w-[450px]"
          id="image1"
          src="${plant.image}"
          alt=""
        />

        
         
        <p class="py-4"><strong> Category: </strong> ${plant.category}    </p>
        <p class="py-4"><strong> price: </strong> ${plant.price}           </p>
        <p class="py-4"><strong> Description: </strong>   ${plant.description}       </p>

        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>

  
  `;
  parent.innerHTML = child;
  const modal = document.getElementById("my_modal_1");
  modal.showModal();
};

////////////////////////////////////////////////////////////////////////
loadCategories();
loadAll();
