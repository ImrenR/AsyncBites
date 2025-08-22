const getirCountry = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");

  const veri = await res.json(); // dont forget to change to json and add await
  bastirCountry(veri); // veri gonderildi asagida tanimla
};
getirCountry();

//! to print on the screen

const bastirCountry = (veri) => {
  //* veri gonderildi sende karsila (veri) ama bu illa veri olmak zorunda degil
  veri.forEach((a) => {
    document.querySelector("article").innerHTML = `

  <div class="card text-start w-50 shadow-lg bg-light my-4" style="width: 18rem;">
  <img src="${a.flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${a.name.common}</h5>
    
<ul class="list-group list-group-flush">
  <li class="list-group-item">
 ${a.capital}
   </li>
  <li class="list-group-item">
${Object.values(a.languages)}
  </li>
  <li class="list-group-item">
  ${Object.values(a.currencies)[0].name}  </li>
  
</ul>
 </div>
</div> 
  `;
  });
};
//! Ekrana bastirilacak dizi elemanlarinin key ler farkli farkliysa ===>>
//!!! Object.value() ogeleri, nesnede bulunan numaralandirilabilir bir dizi dondurur.
//! istenen nesnenin icindeki objectin value larini yaz, bu valuelar, object.value
//! sayesinde dizi icinde toplanir.

//? Object.value(country.currencies)= currencies in valuelarini bir dizide toplar

//* TRY : nin value sini dizi yapar 0 indexli : [{name: 'Turkish lira', symbol:'t'}]
//* TRY key silinir.

//* Object.values(country.languages)=languages in valuelarini bir dizide toplat [eng,spanish] Eng key i silinir.
 