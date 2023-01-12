const request = require("supertest"),
  app = require("./index");

afterAll((done) => {
  done();
});

describe("Get User BasedInfo", () => {
  it("should be returned hello world", async () => {
    const res = await request(app).get("/").send();
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Hello World");
  });

  it("should be returned with 404", async () => {
    const res = await request(app).get("/users/1").send();
    expect(res.statusCode).toEqual(404);
  });

  it("should be returned users specific data", async () => {
    const res = await request(app).get("/user/1").send();
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Received UserId as : 1 queryParams : {}");
  });

  it("should be returned users information", async () => {
    const res = await request(app).get("/user/1").send();
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Received UserId as : 1 queryParams : {}");
  });

  it("should be returned users information 2", async () => {
    const res = await request(app).get("/user/1").send();
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Received UserId as : 1 queryParams : {}");
  });

  it("should be returned users information 3", async () => {
    const res = await request(app).get("/user/1").send();
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Received UserId as : 1 queryParams : {}");
  });
});
