class Triangle implements Iforme {
    private _longueurCote: number;
    private _hauteur: number;
    constructor(longueurCote: number, hauteur: number) {
        this._longueurCote = longueurCote,
        this._hauteur = hauteur
    }
    public aire() : number{
        return (this._hauteur*this._longueurCote)/2
    }
    public perimetre() : number{
        return this._longueurCote*3
    }
    
    public get longeurCote(): number {
        return this._longueurCote;
    }
    public set longeurCote(value: number) {
        this._longueurCote = value;
    }
    public get base(): number {
        return this._hauteur;
    }
    public set base(value: number) {
        this._hauteur = value;
    }
}
