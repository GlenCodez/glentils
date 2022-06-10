# Email Server

## Solution 1
[Linode Instructions](https://www.linode.com/docs/guides/email-with-postfix-dovecot-and-mysql/#configure-dns-for-your-email-server)

- Install packages
    
  ```
  sudo apt-get install postfix postfix-mysql dovecot-core dovecot-imapd dovecot-pop3d dovecot-lmtpd dovecot-mysql mysql-server
  ```

- Suggested packages

  ```shell
  dovecot-gssapi dovecot-ldap dovecot-lucene dovecot-managesieved dovecot-pgsql dovecot-sieve
  dovecot-solr dovecot-sqlite dovecot-submissiond ntp libipc-sharedcache-perl mailx tinyca procmail
  postfix-pgsql postfix-ldap postfix-pcre postfix-lmdb postfix-sqlite resolvconf postfix-cdb
  postfix-mta-sts-resolver postfix-doc
  ```
  
- To fix password issues with `sudo mysql_secure_installation`

   ```
        sudo mysql
        ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'mynewpassword'; 
   ```
  
- mail@glenburch.com

- Original glenburch.com mail records
  glenburch.com	MX	1 hour
  1 aspmx.l.google.com.
  5 alt1.aspmx.l.google.com.
  5 alt2.aspmx.l.google.com.
  10 alt3.aspmx.l.google.com.
  10 alt4.aspmx.l.google.com.
  glenburch.com	SPF	1 hour
  "v=spf1 include:_spf.google.com ~all"
  glenburch.com	TXT	1 hour
  "v=spf1 include:_spf.google.com ~all"
  google._domainkey.glenburch.com	TXT	1 hour
  "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2xiGIofAnG0H2k2kwnnAvnsDI6zukZo+iZDlGVv9DAqhJor/z3OqB4VJu+ZSIou7CAkFF+KZRGTAvTAC+HZrUyP556moZNfYzV0Bt0i2iRAVHWFJWMOrEiMZ8gqKX3sKNjuiZrE8udWxUfhToX3kM2RiMWBqRb+yTnbW7Mg7O+mzxJJnCH8zMN1uqD6z3SUi9" "Xs97FjZbRHNUqCkpNpEeNbWrqIseO9pKJECOAI5t1MH1D71Rx7DyAGzJrKrhMoLhg1c+QVqzeyPK1jtw3Zy7Xu4Yz9Zzl5amQsupgX/M5ykeBv96E4yjLZlTAjQob9x2GTij47Jf17WcEmGV4PvXQIDAQAB" 

- Add Email User
  - `sudo doveadm pw -s SHA512-CRYPT -p "password" -r 5000`
  - `INSERT INTO mailserver.virtual_users (domain_id, password , email) VALUES ('1', 'hash', 'user@example.com');`
  - `SELECT * FROM mailserver.virtual_users;`