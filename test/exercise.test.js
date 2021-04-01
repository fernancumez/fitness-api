import request from "supertest";
import app from "../src/index";
import faker from "faker";

/**
 * Testing get all exercises endpoint
 */

describe("GET /api/exercises", () => {
  it("should GET all exercisess", (done) => {
    request(app)
      .get("/api/exercises")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

/**
 * Testing exercises endpoint by giving an existing exercise
 */

describe("GET /api/exercises/:id", () => {
  it("shouldn't GET a exercise, exercise doesn´t exist", (done) => {
    request(app)
      .get("/api/exercises/5f7b5625e02e78380c91406e")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it("shoudln´t GET a exercise, bad parameters", (done) => {
    request(app)
      .get("/api/exercises/5f7")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

/**
 * Testing POST exercises endpoint
 */

describe("POST /api/exercises", () => {
  it("should POST a new exercise", (done) => {
    const exercise = {
      title: faker.lorem.word(),
      description: faker.lorem.text(),
      img: faker.image.sports(),
      leftColor: faker.internet.color(),
      rightColor: faker.internet.color(),
    };

    request(app)
      .post("/api/exercises")
      .send(exercise)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it("shouldn´t POST a new exercise, no parameters", (done) => {
    const exercise = {
      // no data
    };

    request(app)
      .post("/api/exercises")
      .send(exercise)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

/**
 * Testing PUT exercises endpoint
 */

describe("PUT /api/exercises/:id", () => {
  it("shouldn´t PUT an exercise, exercise doesn´t exist", (done) => {
    const exercise = {
      title: faker.lorem.word(),
      description: faker.lorem.text(),
      img: faker.image.sports(),
      leftColor: faker.internet.color(),
      rightColor: faker.internet.color(),
    };

    request(app)
      .put("/api/exercises/5f7b5625e02e78380c91406e")
      .send(exercise)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it("shouldn´t PUT an exercise, exercise bad id", (done) => {
    const exercise = {
      title: faker.lorem.word(),
      description: faker.lorem.text(),
      img: faker.image.sports(),
      leftColor: faker.internet.color(),
      rightColor: faker.internet.color(),
    };

    request(app)
      .put("/api/exercises/5f7")
      .send(exercise)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

/**
 * Testing DELETE exercises endpoint
 */

describe("DELECTE /api/exercises/:id", () => {
  it("shouldn´t DELETE an exercise, exercise doesn´t exist", (done) => {
    request(app)
      .delete("/api/exercises/5fe3cd7d94e54720f4d58915")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it("shouldn´t DELETE an exercise, exercise bad id", (done) => {
    request(app)
      .delete("/api/exercises/5fe")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
