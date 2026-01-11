-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306:3306
-- Generation Time: Jan 11, 2026 at 11:49 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agriculture_dashboard`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `mobileNo` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `role`, `mobileNo`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Nursid Ansari', 'admin@gmail.com', 'Admin', '7081002501', '$2a$10$lo7R0OpDbmQIM2E0b4BtAeU5b1ebKwe1JozgPjHtTQk4s877Y8UhG', '2025-10-13 14:53:27', '2025-10-13 14:53:27');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Bio-Stimulants', '2025-10-14 16:23:48', '2025-10-14 16:23:48'),
(2, 'Fungicides', '2025-10-14 16:23:48', '2025-10-14 16:23:48');

-- --------------------------------------------------------

--
-- Table structure for table `crops`
--

CREATE TABLE `crops` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `variety` varchar(100) DEFAULT NULL,
  `farmer_id` int(11) NOT NULL,
  `planting_date` date NOT NULL,
  `expected_harvest_date` date DEFAULT NULL,
  `actual_harvest_date` date DEFAULT NULL,
  `area_planted` decimal(10,2) NOT NULL,
  `area_unit` enum('acres','hectares','square_meters') NOT NULL DEFAULT 'acres',
  `expected_yield` decimal(10,2) DEFAULT NULL,
  `actual_yield` decimal(10,2) DEFAULT NULL,
  `yield_unit` enum('kg','tons','quintals','pounds') NOT NULL DEFAULT 'kg',
  `status` enum('planted','growing','ready_to_harvest','harvested','sold') NOT NULL DEFAULT 'planted',
  `notes` text DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `weather_conditions` text DEFAULT NULL,
  `fertilizers_used` text DEFAULT NULL,
  `pesticides_used` text DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `dealer_id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) NOT NULL,
  `address` text DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT 'India',
  `postal_code` varchar(10) DEFAULT NULL,
  `customer_type` enum('individual','business','retailer','wholesaler') NOT NULL DEFAULT 'individual',
  `business_name` varchar(100) DEFAULT NULL,
  `tax_id` varchar(50) DEFAULT NULL,
  `credit_limit` decimal(12,2) NOT NULL DEFAULT 0.00,
  `current_balance` decimal(12,2) NOT NULL DEFAULT 0.00,
  `payment_terms` enum('cash','net_15','net_30','net_60','custom') NOT NULL DEFAULT 'cash',
  `is_active` tinyint(1) DEFAULT 1,
  `registration_date` datetime NOT NULL,
  `last_purchase_date` datetime DEFAULT NULL,
  `total_purchases` decimal(12,2) NOT NULL DEFAULT 0.00,
  `notes` text DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `dealers`
--

CREATE TABLE `dealers` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT 'India',
  `postal_code` varchar(10) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `last_login` datetime DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `farmers`
--

CREATE TABLE `farmers` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT 'India',
  `postal_code` varchar(10) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `last_login` datetime DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `farmers`
--

INSERT INTO `farmers` (`id`, `username`, `email`, `password`, `first_name`, `last_name`, `phone`, `address`, `city`, `state`, `country`, `postal_code`, `is_active`, `last_login`, `profile_image`, `createdAt`, `updatedAt`) VALUES
(1, 'farmer123', 'farmer123@example.com', '$2a$10$XiNryfyPKmu44BpNXhjGh.sIepYYmwFZZcNHLLB7YvJCW2zO5SmNu', 'Ramesh', 'Kumar', '9876543210', '123, Green Fields Colony', 'Nagpur', 'Maharashtra', 'India', '440001', 1, '2025-10-13 16:19:09', 'https://example.com/images/farmer123.jpg', '2025-10-13 15:18:57', '2025-10-13 16:19:09');

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` decimal(10,2) NOT NULL,
  `reserved_quantity` decimal(10,2) NOT NULL DEFAULT 0.00,
  `unit_cost` decimal(10,2) NOT NULL,
  `location` varchar(100) DEFAULT NULL,
  `batch_number` varchar(50) DEFAULT NULL,
  `expiry_date` datetime DEFAULT NULL,
  `manufacture_date` datetime DEFAULT NULL,
  `supplier_name` varchar(100) DEFAULT NULL,
  `purchase_date` datetime DEFAULT NULL,
  `minimum_stock_level` decimal(10,2) NOT NULL DEFAULT 0.00,
  `maximum_stock_level` decimal(10,2) DEFAULT NULL,
  `reorder_point` decimal(10,2) NOT NULL DEFAULT 0.00,
  `status` enum('available','reserved','damaged','expired','sold') NOT NULL DEFAULT 'available',
  `quality_grade` enum('A','B','C','Premium') DEFAULT NULL,
  `storage_conditions` text DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `order_number` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `status` enum('pending','confirmed','processing','shipped','delivered','cancelled','returned') NOT NULL DEFAULT 'pending',
  `order_type` enum('purchase','sale') NOT NULL,
  `total_amount` decimal(12,2) NOT NULL,
  `currency` varchar(3) NOT NULL DEFAULT 'INR',
  `tax_amount` decimal(10,2) NOT NULL DEFAULT 0.00,
  `discount_amount` decimal(10,2) NOT NULL DEFAULT 0.00,
  `shipping_amount` decimal(10,2) NOT NULL DEFAULT 0.00,
  `payment_method` enum('cash','card','bank_transfer','upi','wallet') DEFAULT NULL,
  `payment_status` enum('pending','paid','partial','failed','refunded') NOT NULL DEFAULT 'pending',
  `order_date` datetime NOT NULL,
  `expected_delivery_date` datetime DEFAULT NULL,
  `actual_delivery_date` datetime DEFAULT NULL,
  `shipping_address` text DEFAULT NULL,
  `billing_address` text DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `tracking_number` varchar(100) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `description` text DEFAULT NULL,
  `category` varchar(100) NOT NULL,
  `price` varchar(50) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `features` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`features`)),
  `crops` varchar(255) DEFAULT NULL,
  `dosage` varchar(100) DEFAULT NULL,
  `benefits` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`benefits`)),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `category`, `price`, `image`, `features`, `crops`, `dosage`, `benefits`, `createdAt`, `updatedAt`) VALUES
(1, 'Bio-Growth Plus', 'Advanced bio-stimulant for enhanced root development and stress tolerance in all crops.', '1', '850', '/uploads/image-1760551657817-482586489.webp', '[\"Root Enhancement\",\"Stress Tolerance\",\"Organic Input\",\"All Crops\"]', 'Rice, Wheat, Cotton, Vegetables', '2-3 ml per liter of water', '[\"Promotes root development and nutrient uptake\",\"Enhances flowering and fruit setting\",\"Improves stress tolerance\",\"Increases yield by 15-25%\"]', '2025-10-13 16:47:21', '2025-10-15 18:07:37'),
(4, 'FungiShield Pro', 'Systemic fungicide for broad-spectrum disease control in vegetables and field crops.', '2', '1200', '/uploads/image-1760551682872-526838676.webp', '[\"Systemic Action\",\"Broad Spectrum\",\"Preventive & Curative\",\"Long Duration\"]', 'Rice, Wheat, Maize, Sugarcane', '2-3 gm per liter of water', '[\"Controls fungal diseases effectively\",\"Systemic and contact action\",\"Rainfast after 2 hours\",\"Safe for beneficial insects\"]', '2025-10-14 13:50:52', '2025-10-15 18:08:02'),
(6, ' Bio-Growth Plus', ' Advanced bio-stimulant for enhanced root development and stress tolerance in all crops.', '1', '850', '/uploads/image-1760551723783-474088328.webp', '[\"Root Enhancement\",\"Stress Tolerance\",\"Organic Input\",\"All Crops\"]', 'Rice, Wheat, Cotton, Vegetables', '2-3 ml per liter of water', '[\"\"]', '2025-10-15 17:38:29', '2025-10-15 18:08:43');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','farmer','distributor','dealer') NOT NULL DEFAULT 'farmer',
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT 'India',
  `postal_code` varchar(10) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `last_login` datetime DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`, `first_name`, `last_name`, `phone`, `address`, `city`, `state`, `country`, `postal_code`, `is_active`, `last_login`, `profile_image`, `created_at`, `updated_at`) VALUES
(1, 'dealer', 'nursid299@gmail.com', '$2a$12$m/u39.Bo3JDMmUizIMUBZe1Eiw7CU7fXoH16FfIil/IEqFfrKehIi', 'farmer', 'Nursid', 'Ansari', '7081002501', 'Rampur1 urf khushihal tola Fazilnagar', 'Kushinagar', 'Uttar Pradesh', 'India', '274401', 1, '2025-10-03 16:06:28', NULL, '2025-10-03 15:42:08', '2025-10-03 16:06:28'),
(2, 'test123', 'distributor@gmail.com', '$2a$12$llG8As5p1iuuKJxt0K/pfeuX1NZwJufl2aA2tiUIhnyIqari6oKuK', 'distributor', 'Nursid', 'Ansari', '7081002501', 'Rampur1 urf khushihal tola Fazilnagar', 'Kushinagar', 'Uttar Pradesh', 'India', '274401', 1, NULL, NULL, '2025-10-03 15:52:05', '2025-10-04 15:11:10'),
(5, 'pradip', 'pradeep001@yopmail.com', '$2a$12$8uitb6xFeDoEnUl.dfkFTu/dzhXvYx5Fs0D5NcPkKHj7DwdRBXh8W', 'admin', 'Nursid', 'Ansari', '7092374324', 'BR Electric Works, Bhitoli Khurd', 'Lucknow', 'Uttar Pradesh', 'India', '226201', 0, '2025-10-03 16:45:35', NULL, '2025-10-03 16:45:12', '2025-10-04 15:11:02'),
(8, 'test', 'test@gmail.com', '$2a$12$Io4DZc9cZ80dlgyzC0iQ9.5l6iIwwR10D5wbDFQRsbrhkY06yzttu', 'admin', 'Nursid', 'Ansari', '7081002501', 'BR Electric Works, Bhitoli Khurd', 'Lucknow', 'Uttar Pradesh', 'India', '226201', 1, '2025-10-13 06:50:49', NULL, '2025-10-04 15:10:18', '2025-10-13 06:50:49'),
(9, 'farmer', 'farmer@gmail.com', '$2a$12$du91z7zqHiZvtwba/Zk2EOTVYZllOEA4eilAfiVUOeSK.roNOf.N2', 'farmer', 'farmer', 'asc', '9798327987', 'Rampur1 urf khushihal tola Fazilnagar', 'Kushinagar', 'Uttar Pradesh', 'India', '274401', 1, '2025-10-11 15:51:37', NULL, '2025-10-09 15:36:19', '2025-10-11 15:51:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD UNIQUE KEY `email_5` (`email`),
  ADD UNIQUE KEY `email_6` (`email`),
  ADD UNIQUE KEY `email_7` (`email`),
  ADD UNIQUE KEY `email_8` (`email`),
  ADD UNIQUE KEY `email_9` (`email`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `crops`
--
ALTER TABLE `crops`
  ADD PRIMARY KEY (`id`),
  ADD KEY `farmer_id` (`farmer_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dealer_id` (`dealer_id`);

--
-- Indexes for table `dealers`
--
ALTER TABLE `dealers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `farmers`
--
ALTER TABLE `farmers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_user_product_batch` (`user_id`,`product_id`,`batch_number`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `order_number` (`order_number`),
  ADD UNIQUE KEY `order_number_2` (`order_number`),
  ADD UNIQUE KEY `order_number_3` (`order_number`),
  ADD UNIQUE KEY `order_number_4` (`order_number`),
  ADD UNIQUE KEY `order_number_5` (`order_number`),
  ADD UNIQUE KEY `order_number_6` (`order_number`),
  ADD UNIQUE KEY `order_number_7` (`order_number`),
  ADD UNIQUE KEY `order_number_8` (`order_number`),
  ADD UNIQUE KEY `order_number_9` (`order_number`),
  ADD UNIQUE KEY `order_number_10` (`order_number`),
  ADD UNIQUE KEY `order_number_11` (`order_number`),
  ADD UNIQUE KEY `order_number_12` (`order_number`),
  ADD UNIQUE KEY `order_number_13` (`order_number`),
  ADD UNIQUE KEY `order_number_14` (`order_number`),
  ADD UNIQUE KEY `order_number_15` (`order_number`),
  ADD UNIQUE KEY `order_number_16` (`order_number`),
  ADD UNIQUE KEY `order_number_17` (`order_number`),
  ADD UNIQUE KEY `order_number_18` (`order_number`),
  ADD UNIQUE KEY `order_number_19` (`order_number`),
  ADD UNIQUE KEY `order_number_20` (`order_number`),
  ADD UNIQUE KEY `order_number_21` (`order_number`),
  ADD UNIQUE KEY `order_number_22` (`order_number`),
  ADD UNIQUE KEY `order_number_23` (`order_number`),
  ADD UNIQUE KEY `order_number_24` (`order_number`),
  ADD UNIQUE KEY `order_number_25` (`order_number`),
  ADD UNIQUE KEY `order_number_26` (`order_number`),
  ADD UNIQUE KEY `order_number_27` (`order_number`),
  ADD UNIQUE KEY `order_number_28` (`order_number`),
  ADD UNIQUE KEY `order_number_29` (`order_number`),
  ADD UNIQUE KEY `order_number_30` (`order_number`),
  ADD UNIQUE KEY `order_number_31` (`order_number`),
  ADD UNIQUE KEY `order_number_32` (`order_number`),
  ADD UNIQUE KEY `order_number_33` (`order_number`),
  ADD UNIQUE KEY `order_number_34` (`order_number`),
  ADD UNIQUE KEY `order_number_35` (`order_number`),
  ADD UNIQUE KEY `order_number_36` (`order_number`),
  ADD UNIQUE KEY `order_number_37` (`order_number`),
  ADD UNIQUE KEY `order_number_38` (`order_number`),
  ADD UNIQUE KEY `order_number_39` (`order_number`),
  ADD UNIQUE KEY `order_number_40` (`order_number`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username_2` (`username`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `username_3` (`username`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `username_4` (`username`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD UNIQUE KEY `username_5` (`username`),
  ADD UNIQUE KEY `email_5` (`email`),
  ADD UNIQUE KEY `username_6` (`username`),
  ADD UNIQUE KEY `email_6` (`email`),
  ADD UNIQUE KEY `username_7` (`username`),
  ADD UNIQUE KEY `email_7` (`email`),
  ADD UNIQUE KEY `username_8` (`username`),
  ADD UNIQUE KEY `email_8` (`email`),
  ADD UNIQUE KEY `username_9` (`username`),
  ADD UNIQUE KEY `email_9` (`email`),
  ADD UNIQUE KEY `username_10` (`username`),
  ADD UNIQUE KEY `email_10` (`email`),
  ADD UNIQUE KEY `username_11` (`username`),
  ADD UNIQUE KEY `email_11` (`email`),
  ADD UNIQUE KEY `username_12` (`username`),
  ADD UNIQUE KEY `email_12` (`email`),
  ADD UNIQUE KEY `username_13` (`username`),
  ADD UNIQUE KEY `email_13` (`email`),
  ADD UNIQUE KEY `username_14` (`username`),
  ADD UNIQUE KEY `email_14` (`email`),
  ADD UNIQUE KEY `username_15` (`username`),
  ADD UNIQUE KEY `email_15` (`email`),
  ADD UNIQUE KEY `username_16` (`username`),
  ADD UNIQUE KEY `email_16` (`email`),
  ADD UNIQUE KEY `username_17` (`username`),
  ADD UNIQUE KEY `email_17` (`email`),
  ADD UNIQUE KEY `username_18` (`username`),
  ADD UNIQUE KEY `email_18` (`email`),
  ADD UNIQUE KEY `username_19` (`username`),
  ADD UNIQUE KEY `email_19` (`email`),
  ADD UNIQUE KEY `username_20` (`username`),
  ADD UNIQUE KEY `email_20` (`email`),
  ADD UNIQUE KEY `username_21` (`username`),
  ADD UNIQUE KEY `email_21` (`email`),
  ADD UNIQUE KEY `username_22` (`username`),
  ADD UNIQUE KEY `email_22` (`email`),
  ADD UNIQUE KEY `username_23` (`username`),
  ADD UNIQUE KEY `email_23` (`email`),
  ADD UNIQUE KEY `username_24` (`username`),
  ADD UNIQUE KEY `email_24` (`email`),
  ADD UNIQUE KEY `username_25` (`username`),
  ADD UNIQUE KEY `email_25` (`email`),
  ADD UNIQUE KEY `username_26` (`username`),
  ADD UNIQUE KEY `email_26` (`email`),
  ADD UNIQUE KEY `username_27` (`username`),
  ADD UNIQUE KEY `email_27` (`email`),
  ADD UNIQUE KEY `username_28` (`username`),
  ADD UNIQUE KEY `email_28` (`email`),
  ADD UNIQUE KEY `username_29` (`username`),
  ADD UNIQUE KEY `email_29` (`email`),
  ADD UNIQUE KEY `username_30` (`username`),
  ADD UNIQUE KEY `email_30` (`email`),
  ADD UNIQUE KEY `username_31` (`username`),
  ADD UNIQUE KEY `email_31` (`email`),
  ADD UNIQUE KEY `username_32` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `crops`
--
ALTER TABLE `crops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `dealers`
--
ALTER TABLE `dealers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `farmers`
--
ALTER TABLE `farmers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `crops`
--
ALTER TABLE `crops`
  ADD CONSTRAINT `crops_ibfk_1` FOREIGN KEY (`farmer_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`dealer_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_ibfk_73` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `inventory_ibfk_74` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_65` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `orders_ibfk_66` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
