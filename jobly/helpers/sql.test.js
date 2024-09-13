const { sqlForPartialUpdate } = require("./sql");

describe("Test for sqlForPartialUpdate", function(){
    test("Returns correct value", function(){
        let data = {firstName: "testFirst", lastName: "testLast"};
        const { setCols, values } = sqlForPartialUpdate(
            data,
            {
              firstName: "first_name",
              lastName: "last_name",
              isAdmin: "is_admin",
            });
        expect(setCols).toEqual("\"first_name\"=$1, \"last_name\"=$2");
        expect(values).toEqual(["testFirst", "testLast"]);
    })
})