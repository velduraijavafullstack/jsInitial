const obj = {
  name:'PSA',
  sarength:100,
  course: {
    name:'FullStack',
    HtmlCss: 'front End',
    java: 'Backend',
    sql: 'DataBase'
  },
  action: function(){
    return "Hellow World";
  },
  fun: function(){
    return `Earn by learning ${this.course.name}`
  },
  goal: ['study','interview',"Got job"] 
};
console.log(obj.fun(obj.action()));