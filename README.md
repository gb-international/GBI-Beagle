Install Version Details:

Node Version: 16.13.1
NPM Version: 8.1.2
Laravel Version: 8.52.0
Php Version: 7.4
MySql Version: 8.0

---

Setup Database:

Import the sql file to your sql and change the database name & password in the .env file to your db name.

---

After downloading the project from github, cd to the project folder in console and use the below commands:

Composer Install
php artisan passport:keys
php artisan l5-swagger:generate
npm Install

---

Then to the run the project use:

php artisan serve