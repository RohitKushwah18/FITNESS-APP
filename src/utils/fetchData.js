export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "0e37772081mshf3af86e3d9504ffp1b4835jsne2697cc3e179",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "0e37772081mshf3af86e3d9504ffp1b4835jsne2697cc3e179",
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

