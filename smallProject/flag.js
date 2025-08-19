const getirCountry = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");

  const veri = await res.json();
  bastirCountry(veri);
};

getirCountry();

//!print them

const bastirCountry = (veri) => {
  veri.forEach((a) => {
    // console.log(Object.values(a.languages));

    // console.log(Object.values(a.currencies)[0].name);

    document.querySelector("article").innerHTML += `
    
    
    <div class="card text-start w-50 shadow-lg bg-light my-4" style="width: 18rem;">
  <img src="${a.flags.svg} " class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${a.name.common} </h5>
    
<ul class="list-group list-group-flush">
  <li class="list-group-item">
  ${a.capital}
   </li>
  <li class="list-group-item">
 ${Object.values(a.languages)}
  </li>
  <li class="list-group-item"> ${Object.values(a.currencies)[0].name}  </li>
  
</ul>
 </div>
</div> 
    
    
    
    
    
    `;
  });
};
//!if the datas are different than each other to print===>>
//!!!! Object.values() returns an array of the enumerable properties of an object.
//! It collects the values of the specified object, and these values are gathered into an array using Object.values.

//? Object.values(country.currencies)=currencies in value collects in array

//* TRY: makes an array with 0 index: [{name: 'Turkish lira', symbol: '₺'}]. TRY key i silinir
//* Object.values(country.languages)=languages in value collects in array [eng,span..] Eng key is deleted