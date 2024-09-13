process.env.NODE_ENV = "test";
const request = require("supertest");
const app = require("./app");
const shoppingList = require("./fakeDb.js");

beforeEach(() => {
    shoppingList.push({name: "popsicle", price: 1.45});
});

afterEach(()=>{
    for(let i = 0; Object.keys(shoppingList).length > i; i++){
        shoppingList.pop()
    }
})
describe("GET /items", ()=>{
    test("Get all items", async ()=>{
        const res = await request(app).get("/items");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(shoppingList)
    })
});

describe("Get /item/name", ()=>{
    test("Get one item by name", async ()=>{
        const res = await request(app).get("/items/popsicle");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(shoppingList[0]);
    })
});

describe("POST /items", ()=>{
    test("Add an item to shoppingList", async()=>{
        const res = await request(app).post("/items").send({name: "candy", price: 0.98});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ added: { newItem: { name: 'candy', price: 0.98 } } });
    })
})

describe("PATCH /items/name", ()=>{
    test("Update an item from shoppingList", async()=>{
        const res = await request(app).patch("/items/popsicle").send({price: 1.50});
        expect(res.statusCode).toBe(200);
        expect(res.body.updated.price).toEqual(1.50);
    })
})

describe("DELETE /items/name", ()=>{
    test("Delete an item from shoppingList", async()=>{
        const res = await request(app).delete("/items/popsicle");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'Deleted' });
    })
})