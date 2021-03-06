import mongoose from 'mongoose';

export default [
  {
    _id: mongoose.Types.ObjectId('628bb53a8667fb09f64dd9fd'),
    members: [{
      name: mongoose.Types.ObjectId('628bcd2fd05eabe5ce419d78'),
      role: 'DEV',
      rate: '1500',
    }],
    name: 'Trackgenix',
    startDate: '2021-06-04T03:00:00.000+00:00',
    endDate: '2022-06-05T03:00:00.000+00:00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    active: true,
    client: 'Diego Armando',
    __v: 0,
  },
  {
    _id: mongoose.Types.ObjectId('6287f93beee9276577d60c1f'),
    members: [{
      name: mongoose.Types.ObjectId('628bcd23effec38bd2785b2d'),
      role: 'DEV',
      rate: '1500',
    }],
    name: 'Frank',
    startDate: '2021-06-04T03:00:00.000+00:00',
    endDate: '2022-06-09T03:00:00.000+00:00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    active: true,
    client: 'Simon Jackson',
    __v: 0,
  },
  {
    _id: mongoose.Types.ObjectId('628bb52bc5505d956f41a108'),
    members: [{
      name: mongoose.Types.ObjectId('628bcd1a5e77fd5a9175d7e7'),
      role: 'DEV',
      rate: '1500',
    }],
    name: 'Ford',
    startDate: '2021-05-06T03:00:00.000+00:00',
    endDate: '2022-06-04T03:00:00.000+00:00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    active: true,
    client: 'Shell',
    __v: 0,
  },
  {
    _id: mongoose.Types.ObjectId('628bb536f2b799b689f80ef4'),
    members: [{
      name: mongoose.Types.ObjectId('628bcd1090c84c5f3b2ad3fa'),
      role: 'DEV',
      rate: '1500',
    }],
    name: 'Chevrolet',
    startDate: '2021-04-04T03:00:00.000+00:00',
    endDate: '2022-06-04T03:00:00.000+00:00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    active: true,
    client: 'YPF',
    __v: 0,
  },
];
