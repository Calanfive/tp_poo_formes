import { Iforme } from "./Iforme";

export class Carre implements Iforme {
    private _longueurCote: number;
    
    private static cpt = 0

    public static nbrNomClasse(): number{
      return Carre.cpt ++}

    public aire() : number{
       return this._longueurCote*this._longueurCote
    }
    public perimetre(): number {
    return 4*this._longueurCote
    }

    constructor (longueurC : number){
        this._longueurCote = longueurC
        Carre.cpt++
    }


    public get longueurCote(): number {
       return this._longueurCote;
    }
    public set longueurCote(value: number) {
       this._longueurCote = value;
    }
}