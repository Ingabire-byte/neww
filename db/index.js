const  student  = require('../controller/StudentManagement');

const {add,displayAll,update,remove} = student;


const newStudent = {
    name :'Mado',
    age : 12,
    location: "ruhango"
 
};

add (newStudent);
displayAll();
update (1,'age',30);
remove(2);


