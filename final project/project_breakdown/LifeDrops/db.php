<?php
// Database configuration
$host = "localhost";     // Database host (usually 'localhost')
$user = "root";          // Your database username
$pass = "";              // Your database password (default is empty for XAMPP)
$db = "lifedrops";       // Your database name

// Create connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Database connected successfully!";
?>
