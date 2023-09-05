const API_KEY = 'wmCUD19DK2j5cdxT0JfYmef5v6sMIVgl';

export async function getGifs({ keyword = "rick" } = {}) {
   //const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=morty&limit=15&offset=0&rating=r&lang=en`
   const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=20&offset=0&rating=r&lang=en`;
   
   const response = await fetch(`${API_URL}`);
   
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
