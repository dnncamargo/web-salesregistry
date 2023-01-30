class Client {

    /** 
     * Classe Client contém atributos obrigatórios 
     * @param name, cpfid, cepcode 
     * 
    */

    constructor(fullname, cpfid, cepcode) {
        this.id = undefined;
        this.fullname = fullname;
        this.cpfid = cpfid;
        this.cepcode = cepcode;
        this.housenumber = undefined;
        this.address = undefined
        this.complement = undefined;
        this.district = undefined;
        this.state = undefined;
        //this.phone = undefined;
        //this.email = undefined;
        //this.birthdate = undefined;
        //this.active = undefined;
        
    }
    print() {
        console.log(this)
    }
}