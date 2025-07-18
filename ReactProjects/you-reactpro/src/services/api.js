const API_KEY="e60e5ad782611de65333b4657c6b2be7";
const BASE_URL = "https://api.themoviedb.org/3"


export const getPopularMovies = async()=>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

    const data = await response.json()
    return data.results
};



export const  searchMovies= async(query)=>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent}`);

    const data = await response.json()
    return data.results
};