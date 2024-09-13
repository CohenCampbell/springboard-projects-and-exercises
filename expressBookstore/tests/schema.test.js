process.env.NODE_ENV = "test";
const request = require("supertest");
const app = require("../app");
const db = require("../db");


afterEach( async function(){
    await db.query(`DELETE FROM books WHERE isbn='0691161518'`);
});

describe("POST /books", ()=>{
    test("Create a new book", async ()=>{
        const res = await request(app).post("/books").send(
            {
                "book": {
                    "isbn": "0691161518",
                    "amazon_url": "http://a.co/eobPtX2",
                    "author": "Matthew Lane",
                    "language": "english",
                    "pages": 264,
                    "publisher": "Princeton University Press",
                    "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
                    "year": 2017
                }
            }
        );
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({"book": {"amazon_url": "http://a.co/eobPtX2", 
                                              "author": "Matthew Lane", 
                                              "isbn": "0691161518", 
                                              "language": "english", 
                                              "pages": 264, 
                                              "publisher": "Princeton University Press", 
                                              "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games", 
                                              "year": 2017}})
                                          });

        test("Fail to create a new book", async ()=>{
            const res = await request(app).post("/books").send(
                {
                    "book": {
                        "isbn": "ABC",
                        "amazon_url": 1,
                        "author": 2,
                        "language": 3,
                        "pages": "String1",
                        "publisher": 4,
                        "title": 5,
                        "year": "String2"
                    }
                });
            expect(res.statusCode).toBe(400);
            expect(res.body.error).toEqual({message: ["instance.book.amazon_url is not of a type(s) string", "instance.book.author is not of a type(s) string", "instance.book.language is not of a type(s) string", "instance.book.pages is not of a type(s) integer", "instance.book.publisher is not of a type(s) string", "instance.book.title is not of a type(s) string", "instance.book.year is not of a type(s) integer"], "status": 400})
        });


});

describe("PUT /books/:isbn", ()=>{
    test("Update a book", async ()=>{
        //create test book
        await request(app).post("/books").send( {
            "book": {
                "isbn": "0691161518",
                "amazon_url": "http://a.co/eobPtX2",
                "author": "Matthew Lane",
                "language": "english",
                "pages": 264,
                "publisher": "Princeton University Press",
                "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
                "year": 2017
            }
        });

        const res = await request(app).put("/books/0691161518").send({
            
                "isbn": "0691161518",
                "amazon_url": "http://a.co/eobPtX2",
                "author": "Matthew Lane",
                "language": "english",
                "pages": 264,
                "publisher": "Princeton University Press",
                "title": "New Title",
                "year": 2017
            
        });

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({"book": {"amazon_url": "http://a.co/eobPtX2", "author": "Matthew Lane", "isbn": "0691161518", "language": "english", "pages": 264, "publisher": "Princeton University Press", "title": "New Title", "year": 2017}})
    })
});