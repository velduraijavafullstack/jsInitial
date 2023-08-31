const obj = {
  name:'PSA',
  sarength:100,
  course: {
    name:'FullStack',
    HtmlCss: 'front End',
    java: 'Backend',
    sql: 'DataBase'
  },
  goal: ['study','interview',"Got job"] 
}
console.log(obj.goal[1]); //interview
console.log(obj.course.java);
console.log(obj.course);