<?php
// Database credentials
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'dnd_database';

// Connect to the database
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data
$sql = "SELECT * FROM characters";
$result = $conn->query($sql);

$data = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Return as JSON
header('Content-Type: application/json');
echo json_encode($data);

$conn->close();
?>
