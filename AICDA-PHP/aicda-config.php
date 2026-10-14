<?php
// LOCAL development config (used by `php -S` on this computer). Not for the server.
return [
    "env" => "development",
    // Local MySQL 8.0 instance (AICDA-PHP-local\mysql8-data), port 3308.
    "db" => ["host" => "127.0.0.1", "port" => 3308, "name" => "aicda_php", "user" => "root", "pass" => "ank12345"],
    "jwt_secret" => 'your_super_secret_key',
    "password_encryption_key" => 'e80d21937115c79dcf6ed0436cb35f8dc57115663f6bc0b868aff7f155378b93',
];
