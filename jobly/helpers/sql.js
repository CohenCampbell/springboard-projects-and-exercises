const { BadRequestError } = require("../expressError");

/* 
   dataToUpdate => {firstname: "exampleName1", lastName: "exampleName2"}
   jsToSql => {firstName: "first_name", lastName: "last_name"}

   if no data is passed in, throw BadRequestError

   cols => organizes the info to be turned into parameterized queries.
   Is set to ['"first_name"=$1', '"last_name"=$2'] for string literal for sql.

   (Basically matches the indexes and table names to the data)


   returns an obj with the data, and a string joined by commas
   in the correct order from a randomized obj, so it can be
   used in a string template literal for pg. 
*/

function sqlForPartialUpdate(dataToUpdate, jsToSql) {
  const keys = Object.keys(dataToUpdate);
  if (keys.length === 0) throw new BadRequestError("No data");

  // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  const cols = keys.map((colName, idx) =>
      `"${jsToSql[colName] || colName}"=$${idx + 1}`,
  );

  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}

module.exports = { sqlForPartialUpdate };
