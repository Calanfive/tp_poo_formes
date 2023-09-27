import { Iforme } from "./Iforme";

export class Carre implements Iforme {
    private _longueurCote: number;
    public aire() : number{
       return this._longueurCote*this._longueurCote
    }
    public perimetre(): number {
    return 4*this._longueurCote
    }

    constructor (longueurC : number){
        this._longueurCote = longueurC
    }


    public get longueurCote(): number {
       return this._longueurCote;
    }
    public set longueurCote(value: number) {
       this._longueurCote = value;
    }
}