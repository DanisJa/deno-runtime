type Planet = {
	name: string;
	rotation_period: string;
	orbital_period: string;
	diameter: string;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: string;
	population: string;
	residents: string[];
	films: string[];
	created: string;
	edited: string;
	url: string;
};

type Person = {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: string[];
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
};

const textDecoder = new TextDecoder();

const { body } = await fetch('https://swapi.dev/api/planets/10');

const content = await body?.getReader().read();

const planet: Planet = JSON.parse(textDecoder.decode(content?.value));

console.log(`THE PEOPLE OF ${planet.name.toUpperCase()}`);

planet.residents.forEach(async (residentUrl) => {
	const { body } = await fetch(residentUrl);
	const content = await body?.getReader().read();
	const resident: Person = JSON.parse(textDecoder.decode(content?.value));

	console.log(resident.name);
});
