export class Ingredient {

    constructor(public name: string, public amount: number){ 
    }
    //Skraćeni način je često korišćen kada želim da navedem samo podatke koji se koriste za inicijalizaciju objekta, 
    //a vidljivost svojstava ostavljam kao podrazumevanu (public).
}

//Tradicionalni način se koristi kada želim veću kontrolu nad vidljivošću svojstava ili dodatnu logiku u konstruktoru.
/*export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number){
        this.name= name;
        this.amount=amount;
    }
}
*/
