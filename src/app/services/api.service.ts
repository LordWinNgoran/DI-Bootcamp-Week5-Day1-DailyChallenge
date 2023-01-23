import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { rejects } from "assert";
import { resolve } from "dns";
import { films } from "../models/films.models";


@Injectable()

export class ApiService {
    constructor(private client: HttpClient) { }

    endpoind = 'https://swapi.dev/api/films'
    async callApi(): Promise<films[]>{

        return new Promise((resolve , reject)=>{
            
            this.client.get(this.endpoind).subscribe((data: any)=> {

                let  allFilms = [];
                let responses = data['results'];
                console.log(data['results']);

                for(let item in responses) {
                    let response:films = {
                        title: responses[item].title, 
                        opening_crawl: responses[item].opening_crawl, 
                        episode_id: responses[item].episode_id, 
                        director: responses[item].director,
                        producer: responses[item].producer,
                        release_date: responses[item].release_date
                    }
                     allFilms.push(response);
                }
                resolve(allFilms)
            })
        })
    }
}
