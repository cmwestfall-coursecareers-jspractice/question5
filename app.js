function managerFinder(hierarchy) {
  let empHierarchy = {};

  hierarchy.forEach((employee) => {
    if (employee.manager) {
      if (!empHierarchy[employee.manager]) {
        empHierarchy[employee.manager] = [employee.id];
      } else {
        empHierarchy[employee.manager].push(employee.id);
      }
    }
  });

  // this is some kind of recursive function I know it
  function getReports(manager) {
    let totalReports = [];

    if (empHierarchy[manager]) {
      for (const id of empHierarchy[manager]) {
        totalReports.push(id);
        totalReports = totalReports.concat(getReports(id));
      }
    }
    return totalReports;
  }

  let output = {};
  for (let manager in empHierarchy) {
    output[manager] = getReports(manager);
  }

  console.log(output);
}

managerFinder([
  { id: "1", manager: "2" },
  { id: "2", manager: "3" },
  { id: "3" },
  { id: "4", manager: "2" },
  { id: "5", manager: "4" },
]);
