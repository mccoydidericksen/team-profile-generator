const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and office number if provided valid arguments", () => {
        const manager = new Manager("John", 1, "john@gmail.com", "123456");

        expect(manager.name).toEqual("John");
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual("john@gmail.com");
        expect(manager.getRole()).toEqual("Manager");
        expect(manager.getOfficeNumber()).toEqual("123456");
        });
    });
});
