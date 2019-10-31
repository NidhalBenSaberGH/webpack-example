
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/style.css';
import './img/vintudlogo36x39.png';
import './css/form-validation.css';
import './css/starter-template.css';
import './css/signin.css';
import './css/createAnnouncement.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {AjaxGet} from './js/announcements.js';
import {createAjaxPost} from'./js/createAnnnouncement.js'
import {signinAjaxPost} from './js/signin.js'
import {signupAjaxPost} from './js/signup.js'

$(document).ready(function () {
    $("#createForm").submit(function (event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        createAjaxPost();

    });
    $("#signinFrom").submit(function (event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        signinAjaxPost();

    });
    // SUBMIT FORM
    $("#signupForm").submit(function (event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        signupAjaxPost();
    });

    $("#get").on('click',function (event) {
    // GET DATA
    AjaxGet();
    });

});


