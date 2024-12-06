<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $blood_group = $_GET['blood_group'];
    $area = $_GET['area'];

    $sql = "SELECT name, blood_group, area, contact_no, alt_contact_no FROM donors WHERE blood_group = ? AND area = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $blood_group, $area);
    $stmt->execute();
    $result = $stmt->get_result();

    while ($row = $result->fetch_assoc()) {
        echo "<p>Name: " . $row['name'] . "</p>";
        echo "<p>Blood Group: " . $row['blood_group'] . "</p>";
        echo "<p>Area: " . $row['area'] . "</p>";
        echo "<p>Contact No: " . $row['contact_no'] . "</p>";
        echo "<p>Alternative Contact No: " . $row['alt_contact_no'] . "</p>";
        echo "<hr>";
    }

    $stmt->close();
    $conn->close();
}
?>
