function managerChecker(employees) {
  let hierarchy = {};

  for (let employee of employees) {
    if (employee.manager) {
      if (!hierarchy[employee.manager]) {
        hierarchy[employee.manager] = []; // Initialize an empty array for the manager
      }
      hierarchy[employee.manager].push(employee.id); // Add employee to the manager's list
    }
  }

  function getReports(manager) {
    let totalReports = [];

    if (hierarchy[manager]) {
      for (let id of hierarchy[manager]) {
        totalReports.push(id);
        totalReports = totalReports.concat(getReports(id));
      }
    }
    return totalReports;
  }
  let output = {};
  for (let manager in hierarchy) {
    output[manager] = getReports(manager);
  }
  console.log(output);
}

managerChecker([
  { id: "1", manager: "2" },
  { id: "2", manager: "3" },
  { id: "3" },
  { id: "4", manager: "3" },
]);
