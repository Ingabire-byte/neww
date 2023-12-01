
const {students}=require('../db/students');
const add = (newStudent) =>{
  newStudent.id = students.length + 1;
  students.push(newStudent);
  console.log('\nNew student added \n');
  console.log('\nStudent in the system after adding');
  console.log(students);
}

  const displayAll =() =>{
    console.log('\nAll students added');
    console.log(students);
  }
 const update = (id,key,value)=>{
      var exists = students.find(element=> element.id===id);
      if (!exists){
          console.log("student not found\n");
      }else{
          exists[key]=value;
          console.log("student info found\n");
          console.log(exists);
      }
    }
   const remove=(id)=>{
      var exists = students.find(element=>element.id===id);
      if (!exists){
        console.log("student not\n");
      }else{
        var remaining =[];
        remaining = students.filter(element=>element.id!==id);
        console.log(remaining);
      }
        
   }


module.exports = {
  add,
  displayAll,
  update,
  remove,
}
