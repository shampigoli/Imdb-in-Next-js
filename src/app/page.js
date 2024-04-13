import Results from "@/components/Results"

const ApiKey = process.env.API_KEY

export default async function Home({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(
    `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${ApiKey}&language=en-US&page=1`, 
    {next:{revalidate:10000}}
  )
  const data = await res.json()
  if(!res.ok){
    throw new Error('something went wrong')
  }
  const results = data.results
  // console.log(data)
  return (
    <div>
      <Results results={results}/>
    </div>
  );
}