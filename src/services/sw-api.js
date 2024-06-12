export function getAllStarships() {
    return [
        'Starship01',
        'Starship02',
        'Starship03',
        'Starship04',
        'Starship05',
        'Starship06',
        'Starship07',
        'Starship08',
        'Starship09',
        'Starship10'
    ]
}
export async function REALgetAllStarships(){
    const response = await fetch(
      `https://swapi.dev/api/starships/`
    );
    const data = await response.json();
    return data.results;
}
