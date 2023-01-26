const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and github if provided valid arguments", () => {
      const engineer = new Engineer("John", 1, "john@gmail.com", "johnGithub");

        expect(engineer.name).toEqual("John");
        expect(engineer.id).toEqual(1);
        expect(engineer.email).toEqual("john@gmail.com");
        expect(engineer.getGithub()).toEqual("johnGithub");
        expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});
