export class Film{
    constructor(
        public id?: string,
        public title?: string,
        public description?: string,
        public director?: string,
        public producer?: string,
        public release_date?: string,
        public rt_score?: string
    ){}
}