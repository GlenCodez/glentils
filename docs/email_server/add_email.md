# Add Email
Instructions to add an email address

## Steps
1. Identify the following:
   1. `domain_id`: ID of domain that exists in mysql.virtual_domains table
   2. `email address`: Desired email address (Domain must exist in mysql.virtual_domains table)
   3. `password`: Desired password
2. Generate password hash
    ```
    openssl passwd -6 
   ```
3. Log into mysql
4. Add email and password hash to `virtual_users` table
    ```
    INSERT INTO mailserver.virtual_users 
       (domain_id, password , email) VALUES 
       ('[DOMAIN_ID]', '[PASSWORD_HASH]', '[EMAIL_ADDRESS]');
   ```
5. Verify email address
    ```
        SELECT * FROM mailserver.virtual_users
    ```