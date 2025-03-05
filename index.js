// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  

  const employee = { name: "John", role: "Engineer" };
  
  console.log(updateEmployeeWithKeyAndValue(employee, "location", "NY")); 
  console.log(employee); 
  
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "role", "Manager")); 
  
  console.log(deleteFromEmployeeByKey(employee, "role")); 
  console.log(employee); 
  
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "name")); 