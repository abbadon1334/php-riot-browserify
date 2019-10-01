<?php

header('Content-Type: application/json');

echo json_encode(['time' => (new \DateTime())->format('Y-m-d H:i:s')]);