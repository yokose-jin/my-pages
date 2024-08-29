import FavoriteHeart from "@/app/_components/elements/favoriteHeart/FavoriteHeart";
import { Suspense } from 'react';

async function getFavoCount () {
    try {
        const res = await fetch("http://localhost:3000/api/favorite");
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        const posts = await res.json();
        return posts
        } catch (error) {
        console.error("Fetch error:", error);
        return (
            error
        );
    }

}

export default async function FavoCount () {
    const favoCount = await getFavoCount();
    console.log(favoCount)
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FavoriteHeart data={favoCount.map((obj:any)=>{
                return obj.favoCount
            })} />
        </Suspense>
    );
}