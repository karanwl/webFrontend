export class Surveys {
    constructor(
        public _id?: string,
        public Title?: string,
        public User?: string,
        public Date?: string,
        public Description?: string,
        public Question_1?: string,
        public Question_2?: string,
        public Question_3?: string
    ){}

    public toString(): string
    {
        return `Survey
        -----------------------
        Title       : ${this.Title}
        User        : ${this.User}
        Date        : ${this.Date}
        Description : ${this.Description}
        Question_1  : ${this.Question_1}
        Question_2  : ${this.Question_2}
        Question_3  : ${this.Question_3}
        ------------------------
        `;
    }
}