import { API_URL } from "../../../(home)/page";

async function getMovie(id:string){
    console.log(`Fetching movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getVideos(id: string){
    console.log(`Fetching videos: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieDetail({
    params: {id},
}: {
    params: {id: string}
}){
    // 하나씩 get하게 되면 앞 작업이 오래 걸릴 시 뒷 작업이 이루어지지 않음
    // Promise.all로 병렬적 처리할 수 있음
    console.log(`===================`);
    console.log(`start fetching`);
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    console.log(`end fetching`);
    return <h1>{movie.title}</h1>;
}