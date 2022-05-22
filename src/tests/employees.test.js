import request from 'supertest';
import app from '../app';
import EmployeeModel from '../models/Employees';
import employeesSeed from '../seeds/employees';

beforeAll(async () => {
  await EmployeeModel.collection.insertMany(employeesSeed);
});

describe('POST /employees', () => {
  test('Should return a 201 status when yout create an employee', async () => {
    const response = await request(app).post('/employees').send({
      firstName: 'Tadeo',
      lastName: 'Cherry',
      birthDate: '06/04/1942',
      country: 'Poland',
      city: 'Zaklików',
      zip: '37470',
      phone: '4152354251',
      email: 'tcherry6@angelfire.com',
      password: 'U0y8aLihaW',
      photo: 'http://dummyimage.com/100x100.png/dddddd/000000',
      active: true,
    });
    expect(response.status).toBe(201);
  });

  test('Should indicate the creation of an Employee', async () => {
    const response = await request(app).post('/employees').send({
      firstName: 'Tadeo',
      lastName: 'Cherry',
      birthDate: '06/04/1942',
      country: 'Poland',
      city: 'Zaklików',
      zip: '37470',
      phone: '4152354251',
      email: 'diositoGMAN@com.as',
      password: 'U0y8aLihaW',
      photo: 'http://dummyimage.com/100x100.png/dddddd/000000',
      active: false,
    });
    expect(response.body.message).toEqual('Employee created succesfully');
  });

  test('Should return false error when a employee is created succesfully', async () => {
    const response = await request(app).post('/employees').send({
      firstName: 'Tadeo',
      lastName: 'Cherry',
      birthDate: '06/04/1942',
      country: 'Poland',
      city: 'Zaklików',
      zip: '37470',
      phone: '4152354251',
      email: 'elmawaso6@quienpregunta.com',
      password: 'U0y8aLihaW',
      photo: 'http://dummyimage.com/100x100.png/dddddd/000000',
      active: false,
    });
    expect(response.body.error).not.toBeTruthy();
  });

  test('Should return a 400 status when a account with that email already exists', async () => {
    const response = await request(app).post('/employees').send({
      firstName: 'German',
      lastName: 'Borges',
      birthDate: '04/18/1990',
      country: 'United Kingdom',
      city: 'East End',
      zip: '58794',
      phone: '5876943215',
      email: 'tcherry6@angelfire.com',
      password: 'J5JQwOjK',
      photo: 'http://dummyimage.com/100x100.png/dddddd/000000',
      active: true,
    });
    expect(response.status).toBe(400);
  });

  test('Should indicate that there is already an employee with that email', async () => {
    const response = await request(app).post('/employees').send({
      firstName: 'German',
      lastName: 'Borges',
      birthDate: '04/18/1990',
      country: 'United Kingdom',
      city: 'East End',
      zip: '58794',
      phone: '5876943215',
      email: 'tcherry6@angelfire.com',
      password: 'J5JQwOjK',
      photo: 'http://dummyimage.com/100x100.png/dddddd/000000',
      active: true,
    });
    expect(response.body.message).toEqual('Employee account with this email already exists');
  });
});
