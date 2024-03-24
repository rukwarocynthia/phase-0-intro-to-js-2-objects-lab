// Write your solution in this file!
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  console.log("Original employee:", employee);
  
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
  console.log("Updated employee (non-destructive):", updatedEmployee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log("Updated employee (destructive):", employee);
  
  let deletedEmployee = deleteFromEmployeeByKey(employee, "name");
  console.log("Employee after deletion (non-destructive):", deletedEmployee);
  
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee after deletion (destructive):", employee);
  