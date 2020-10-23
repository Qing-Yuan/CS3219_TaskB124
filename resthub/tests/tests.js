// Import the dependencies for testing
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { restart } from 'nodemon';
import app from '../index.js';

var Contact = require('./../contactModel')

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("General", () => {
    describe("GET /", () => {
        it("should get Express welcome page", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.text.should.equal("Hello World with Express and Nodemon");
                    done();
                });
        });
        it("should get API welcome page", (done) => {
            chai.request(app)
                .get('/api')
                .end((err, res) => {
                    res.text.should.equal("{\"status\":\"API Its Working\",\"message\":\"Welcome to RESTHub crafted with love!\"}");
                    done();
                });
        });
    });
})

describe("CRUD operations", () => {
    beforeEach((done) => { //Before each test we empty the database
        Contact.deleteMany({}, (err) => {
           done();
        });
    });

    describe("GET /", () => {
        it("should retrieve all contacts", (done) => {
            var contact = new Contact();
            contact.name = 'test';
            contact.gender = 'Male';
            contact.email = 'test@test.com';
            contact.phone = '98765432';
            contact.save();
            var contact1 = new Contact();
            contact1.name = 'test1';
            contact1.gender = 'Female';
            contact1.email = 'test1@test.com';
            contact1.phone = '98765431';
            contact1.save();
            chai.request(app)
                .get('/api/contacts')
                .end((err, res) => {
                    res.body.should.have.property('status').equals('success');
                    res.body.should.have.property('message').equals('Contacts retrieved successfully');
                    res.body.data[0].should.have.property('name').equals('test');
                    res.body.data[0].should.have.property('gender').equals('Male');
                    res.body.data[0].should.have.property('email').equals('test@test.com');
                    res.body.data[0].should.have.property('phone').equals('98765432');
                    res.body.data[1].should.have.property('name').equals('test1');
                    res.body.data[1].should.have.property('gender').equals('Female');
                    res.body.data[1].should.have.property('email').equals('test1@test.com');
                    res.body.data[1].should.have.property('phone').equals('98765431');
                    done();
                });
        });
    });

    describe("POST /", () => {
        it("should create a new contact", (done) => {
            chai.request(app)
                .post('/api/contacts')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({ name: 'test', email: 'test@test.com', phone: '98765432', gender: 'Male'})
                .end((err, res) => {
                    res.body.should.have.property('message').equals('New contact created!');
                    res.body.should.have.property('data');
                    res.body.data.should.have.property('name').equals('test');
                    res.body.data.should.have.property('email').equals('test@test.com');
                    res.body.data.should.have.property('phone').equals('98765432');
                    res.body.data.should.have.property('gender').equals('Male');
                    done();
                });
        });
    });

    describe("PUT /", () => {
        it("should create a new contact", (done) => {
            var contact = new Contact();
            contact.name = 'test';
            contact.gender = 'Male';
            contact.email = 'test@test.com';
            contact.phone = '98765432';
            contact.save((err, contact) => {
                chai.request(app)
                .put('/api/contacts/' + contact._id)
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({ name: 'testing', email: 'test@test.com', phone: '98765431', gender: 'Female'})
                .end((err, res) => {
                    res.body.should.have.property('message').equals('Contact Info updated');
                    res.body.should.have.property('data');
                    res.body.data.should.have.property('name').equals('testing');
                    res.body.data.should.have.property('email').equals('test@test.com');
                    res.body.data.should.have.property('phone').equals('98765431');
                    res.body.data.should.have.property('gender').equals('Female');
                    done();
                });
            });
        });
    });
    
    describe("DELETE /", () => {
        it("should create a new contact", (done) => {
            var contact = new Contact();
            contact.name = 'test';
            contact.gender = 'Male';
            contact.email = 'test@test.com';
            contact.phone = '98765432';
            contact.save((err, contact) => {
                chai.request(app)
                .delete('/api/contacts/' + contact._id)
                .end((err, res) => {
                    res.body.should.have.property('message').equals('Contact deleted');
                    done();
                });
            });
        });
    });
})

// describe("CRUD operations", () => {
//     describe("GET /", () => {
//         it("should retrieve all contacts", (done) => {
//             chai.request(app)
//                 .get('/api/contacts')
//                 .end((err, res) => {
//                     res.body.should.have.property('status').equals('success');
//                     done();
//                 });
//         });
//     });
//     describe("POST /", () => {
//         it("should create a new contact", (done) => {
//             chai.request(app)
//                 .post('/api/contacts/?name=testperson&email=testing@test.com&phone=98765435&gender=Female')
//                 .end((err, res) => {
                    
//                     done();
//                 });
//         });
//     });
//     describe("PUT /", () => {
//         it("should update one contact corresponding to contact name", (done) => {
//             chai.request(app)
//                 .put('/api/contacts/testperson/Male/testing@test.com/98765434')
//                 .end((err, res) => {
                    
//                     done();
//                 });
//         });
//     });
//     describe("DELETE /", () => {
//         it("should delete one contact corresponding to contact id", (done) => {
//             chai.request(app)
//                 .del('/api/contacts/${id}')
//                 .end((err, res) => {
//                     res.body.should.have.property('status').equals('success');
//                     res.body.should.have.property('message').equals('Contact deleted');
//                     done();
//                 });
//         });
//     });
// })

// describe("CRUD operations", () => {
//     describe("GET /", () => {
//         it("should retrieve all contacts", (done) => {
//             Contact.remove({});
//             var contact = new Contact({ 'name': 'testing', 'email': 'test@test.com', 'phone': '98765432', 'gender': 'Male'})
//             chai.request(app)
//                 .get('/api/contacts')
//                 .end((err, res) => {
//                     // res.text.should.equal("{\"status\":\"success\",\"message\":\"Contacts retrieved successfully\",\"data\":[{\"_id\":\"5f78632b224865001748db3b\",\"create_date\":\"2020-10-03T11:40:27.479Z\",\"name\":\"Johnny Doe\",\"gender\":\"Male\",\"email\":\"john@gmail.com\",\"phone\":\"98765432\",\"__v\":0},{\"_id\":\"5f786364224865001748db3c\",\"create_date\":\"2020-10-03T11:41:24.840Z\",\"name\":\"Johnny Doey\",\"gender\":\"Male\",\"email\":\"john@gmail.com\",\"phone\":\"98765432\",\"__v\":0},{\"_id\":\"5f78c7f4fb7f3a00175816a4\",\"create_date\":\"2020-10-03T18:50:28.209Z\",\"name\":\"Johnny Doey\",\"gender\":\"Male\",\"email\":\"john@gmail.com\",\"phone\":\"98765432\",\"__v\":0}]}");
//                     res.body.should.have.property('status').equals('success');
//                     res.body.should.have.property('message').equals('Contacts retrieved successfully');
//                     res.body.should.have.property('data').is.a('array').to.have.length(1);
//                     res.body.data.should.have.property('name').equals('Johnny Doe');
//                     // res.body.should.have.property('data').should.contain.a.thing.with.property('name', 'Johnny Doe');
//                     // res.body.should.have.property('data').property('name').equals('Johnny Doe');
//                     // res.body.should.have.property('data').to.include.members([{"_id":"5f78632b224865001748db3b","create_date":"2020-10-03T11:40:27.479Z","name":"Johnny Doe","gender":"Male","email":"john@gmail.com","phone":"98765432","__v":0}]);
//                     // res.body.should.have.property('data').map(e => ({name: e.name})).to.include({name:"Johnny Doe"})
//                     done();
//                 });
//         });
//     });
//     describe("POST /", () => {
//         it("should create a new contact", (done) => {
//             chai.request(app)
//                 .post('/api/contacts/?name=testperson&email=testing@test.com&phone=98765435&gender=Female')
//                 .end((err, res) => {
//                     res.body.should.have.property('message').equals('New contact created!');
//                     res.body.data.should.have.property('name').equals('testperson');
//                     res.body.data.should.have.property('email').equals('testing@test.com');
//                     res.body.data.should.have.property('phone').equals('98765435');
//                     res.body.data.should.have.property('gender').equals('Female');
//                     done();
//                 });
//         });
//     });
//     describe("PUT /", () => {
//         it("should update one contact corresponding to contact name", (done) => {
//             chai.request(app)
//                 .put('/api/contacts/testperson/Male/testing@test.com/98765434')
//                 .end((err, res) => {
//                     res.body.should.have.property('message').equals('Contact Info updated');
//                     res.body.should.have.property('data').property('name').equals('testperson');
//                     res.body.should.have.property('data').property('gender').equals('Male');
//                     res.body.should.have.property('data').property('email').equals('testing@test.com');
//                     res.body.should.have.property('data').property('phone').equals('98765434');
//                     done();
//                 });
//         });
//     });
//     describe("DELETE /", () => {
//         it("should delete one contact corresponding to contact id", (done) => {
//             var name = "testperson";
//             chai.request(app)
//                 .del('/api/contacts/${name}')
//                 .end((err, res) => {
//                     res.body.should.have.property('status').equals('success');
//                     res.body.should.have.property('message').equals('Contact deleted');
//                     done();
//                 });
//         });
//     });
// })

// describe("Students", () => {
//     describe("GET /", () => {
//         // Test to get all students record
//         it("should get all students record", (done) => {
//              chai.request(app)
//                  .get('/')
//                  .end((err, res) => {
//                      res.should.have.status(200);
//                      res.body.should.be.a('object');
//                      done();
//                   });
//          });
//         // Test to get single student record
//         it("should get a single student record", (done) => {
//              const id = 1;
//              chai.request(app)
//                  .get(`/${id}`)
//                  .end((err, res) => {
//                      res.should.have.status(200);
//                      res.body.should.be.a('object');
//                      done();
//                   });
//          });
         
//         // Test to get single student record
//         it("should not get a single student record", (done) => {
//              const id = 5;
//              chai.request(app)
//                  .get(`/${id}`)
//                  .end((err, res) => {
//                      res.should.have.status(404);
//                      done();
//                   });
//          });
//     });
// });