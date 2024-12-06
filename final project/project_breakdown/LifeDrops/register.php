<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $blood_group = $_POST['blood_group'];
    $area = $_POST['area'];
    $contact_no = $_POST['contact_no'];
    $alt_contact_no = $_POST['alt_contact_no'];

    $sql = "INSERT INTO donors (name, blood_group, area, contact_no, alt_contact_no) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $name, $blood_group, $area, $contact_no, $alt_contact_no);

    if ($stmt->execute()) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
