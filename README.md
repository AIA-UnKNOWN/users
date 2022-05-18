# Requirements
- PHP
- MySQL
- NodeJS

# Installation
1. git clone **[repo]**
2. Setup your database credentials in the **.env** file.
3. Generate application key:
  > php artisan key:generate
4. Migrate the database:
  > php artisan migrate
5. Start the webapp:
  > php artisan serve
6. And run the command for bundling client side:
  - Watch mode:
    > npm run watch
  - Production or bundled version:
    > npm run prod

Enjoy the app!