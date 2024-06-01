export class Lists{

}


export default class Todo{
    constructor(title,desc,date,priority){
        this.title=title
        this.desc=desc
        this.date=date

    }
}
export class Project{
    constructor(name,id){
        this.name=name
        this.id=id
        this.toDos=[]
    }
}