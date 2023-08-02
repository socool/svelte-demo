import { text } from "@sveltejs/kit";
import {randomInt} from "d3-random";

export async function getRandomNumber(){
    // Fetch a random number between 0 and 100
    // (with a delay, so that we can see)
    const res =  await fetch('/tutorial/random-number')
    var random;

    if (res.ok){
        return await res.text();
    }else{
        // Sometimes the API will fail!
        throw new Error('Request failed');
    }
}