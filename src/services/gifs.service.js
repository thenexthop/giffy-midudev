import {
   API_KEY,
   API_URL
} from './apiConfig';

export async function getGifs({ keyword = "rick" } = {}) {
   const endpoint = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=21&offset=0&rating=r&lang=en`;
   
   const response = await fetch(`${endpoint}`);
   
   const json = await response.json();

   if(response.ok) {
      const { data } = json;
      const gifs = data.map(item => {
         const {id, title, images } = item;
         const { url } = images.downsized_medium;
         return {id, title, url};  
      } ); 
      return gifs;
   }

   return [];
}
