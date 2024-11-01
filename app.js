function managerFinder(hierarchy) {
  let output = {};

  hierarchy.forEach((employee) => {
    if (employee.manager) {
      if (!output[employee.manager]) {
        output[employee.manager] = [employee.id];
      } else {
        output[employee.manager].push(employee.id);
      }
    }
  });

  // this is some kind of recursive function I know it

  console.log(output);
}

managerFinder([
  { id: "1", manager: "2" },
  { id: "2", manager: "3" },
  { id: "3" },
  { id: "4", manager: "2" },
  { id: "5", manager: "4" },
]);
