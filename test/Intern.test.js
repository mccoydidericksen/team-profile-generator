const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and school if provided valid arguments", () => {
        const intern = new Intern("John", 1, "john@gmail.com", "UCLA");

        expect(intern.name).toEqual("John");
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual("john@gmail.com");
        expect(intern.getSchool()).toEqual("UCLA");
        expect(intern.getRole()).toEqual("Intern");
        });
    });
});
