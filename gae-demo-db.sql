-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Jun 2023 pada 06.38
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gae-demo-db`
--
CREATE DATABASE IF NOT EXISTS `gae-demo-db` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `gae-demo-db`;

-- --------------------------------------------------------

--
-- Struktur dari tabel `exampletable`
--

CREATE TABLE `exampletable` (
  `id` int(11) NOT NULL,
  `content` varchar(45) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `exampletable`
--

INSERT INTO `exampletable` (`id`, `content`, `title`, `date`) VALUES
(6, 'Hari ini daya memasak nasi di dapur', 'Memasak Nasi', 'Thu Jun 01 2023 06:47:43 GMT+0700 (Western Indonesia Time)'),
(7, 'saya memasak kari di dapur', 'memasak kari', 'Thu Jun 01 2023 06:52:03 GMT+0700 (Western Indonesia Time)'),
(8, 'saya membangun rumah di dekat pantai', 'memikul batu', 'Thu Jun 01 2023 06:53:43 GMT+0700 (Western Indonesia Time)');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `exampletable`
--
ALTER TABLE `exampletable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `exampletable`
--
ALTER TABLE `exampletable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
