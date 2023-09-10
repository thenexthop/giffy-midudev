import {
  API_KEY,
  API_URL
} from './apiConfig';

export default async function getTrendingTerms() {
  const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}&lang=en`;
   
  const response = await fetch(`${ apiUrl }`);
  
  const json = await response.json();
  
  if(response.ok) {
    const { data = [] } = json;
    
    console.log(data);
    
    return data;
  }

}