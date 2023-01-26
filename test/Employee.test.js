const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const employee = new Employee("John", 1, "john@gmail.com");

        expect(employee.getName()).toEqual("John");
        expect(employee.getId()).toEqual(1);
        expect(employee.getEmail()).toEqual("john@gmail.com");
        expect(employee.getRole()).toEqual("Employee");
        });
    });
});

