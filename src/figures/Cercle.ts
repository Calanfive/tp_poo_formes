class Cercle implements Iforme {
   private _rayon: number;
   
   public aire() : number{
        return Math.PI*this._rayon    
   }
   public perimetre(): number {
      return 2*Math.PI*this._rayon
   }
   
   constructor (rayon : number) {
      this._rayon = rayon
   }

   
   public get rayon(): number {
      return this._rayon;
   }
   public set rayon(value: number) {
      this._rayon = value;
   }
}