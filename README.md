
sudo sed -i 's/listen 80$//' /etc/apache2/ports.conf
sudo sed -i 's/<Virtualhost \*:80>/ServerName 127.0.0.1\n<VirtualHost \*:8080>/' /etc/apache2/sites-enable-default.conf
apache2ctl start
