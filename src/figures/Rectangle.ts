import { Iforme } from "./Iforme";

class Rectangle implements Iforme {
    private _longueurCote: number;
    private _largeurCote: number;
    
    constructor(longueurCote: number, largeurCote: number) {
        this._longueurCote = longueurCote,
        this._largeurCote = largeurCote
    }

    public aire() : number{
       return (this._longueurCote*this._largeurCote)
    }
    public perimetre() : number{
        return (this._longueurCote*this._largeurCote)*2
    }
    
    
    public get longueurCote(): number {
        return this._longueurCote;
    }
    public set longueurCote(value: number) {
        this._longueurCote = value;
    }

    public get largeurCote(): number {
        return this._largeurCote;
    }
    public set largeurCote(value: number) {
        this._largeurCote = value;
    }
}