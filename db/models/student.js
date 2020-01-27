'use strict';

const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define('Student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    lowercase: true,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  }
});

Student.hook('beforeCreate', (student) => {
  student.firstName = student.firstName.replace(/^./g, c => c.toUpperCase());
  student.lastName = student.lastName.replace(/^./g, c => c.toUpperCase());
});

module.exports = Student;
