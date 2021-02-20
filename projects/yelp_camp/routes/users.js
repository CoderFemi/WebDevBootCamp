const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');

router.get('/register', users.renderRegister);

// Note: passport.authenticate() middleware invokes req.login() automatically.This function is primarily used when users sign up, during which req.login() can be invoked to automatically log in the newly registered user. When the login operation completes, user (registeredUser below) will be assigned to req.user.
    
router.post('/register', catchAsync(users.register));

router.get('/login', users.renderLogin)

// Note: passport.authenticate() middleware invokes req.login() automatically. When the login operation completes, user found will be assigned to req.user

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

// Passport exposes a logout() function on req(also aliased as logOut()) that can be called from any route handler which needs to terminate a login session.Invoking logout() will remove the req.user property and clear the login session(if any).

router.get('/logout', users.logout)

// FANCY ROUTE GROUPING

// router.route('/register')
//     .get(users.renderRegister)
//     .post(catchAsync(users.register));

// router.route('/login')
//     .get(users.renderLogin)
//     .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

// router.get('/logout', users.logout)


module.exports = router;