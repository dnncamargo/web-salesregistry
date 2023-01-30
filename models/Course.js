class Course {

    /**
     * Classe Course contém atributos obrigatórios
     * @param name, monthlyfee, enrolmentfee, degree
     */

    constructor(name, monthlyfee, enrolmentfee, degree) {
        this.id = undefined;
        this.name = name;
        this.monthlyfee = monthlyfee;
        this.enrolmentfee = enrolmentfee;
        this.degree = degree;
    }
}