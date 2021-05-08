const key = 'cvm4Z0nGGcyVvZvosLuPhS9r30jeOlU3';

const havaDurumuGetir = async(id) => {
    const temelUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const sorgu = `${id}?apikey=${key}`;

    const response = await fetch(temelUrl + sorgu);
    const veri = await response.json();

    return veri[0];
}

const sehirGetir = async(konum) => {
    const temelUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const sorgu = `?apikey=${key}&q=${konum}`;
    
    const response = await fetch(temelUrl + sorgu);
    const veri = await response.json();
    
    return veri[0];
}

// sehirGetir('tokat')
// .then(veri => {
//     return havaDurumuGetir(veri.Key);
// })
// .then(veri => {
//     console.log(veri);
// })
// .catch(error => {
//     console.log(error);
// });