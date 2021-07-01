-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 27-05-2021 a las 05:44:07
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tarea`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id_emp` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `trabajo` varchar(255) NOT NULL,
  `edad` int(11) NOT NULL,
  `salario` int(11) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `eliminado` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_emp`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `mail`, `ts_create`, `ts_update`, `eliminado`) VALUES
(1, 'Juan', 'Hagan', 'Programador Senior\r\n', 32, 1200, 'juan_hagan@bignet.com\r\n', '2021-05-26 23:06:16', '2021-05-26 23:06:16', 1),
(2, 'Gonzalo\r\n', 'Pillai\r\n', 'Programador Senior\r\n', 32, 1100, 'g_pillai@bignet.com\r\n', '2021-05-26 23:09:39', '2021-05-26 23:09:39', 1),
(3, 'Ana\r\n', 'Dharma\r\n', 'Desarrollador Web\r\n', 27, 900, 'ana@bignet.com\r\n', '2021-05-26 23:10:41', '2021-05-26 23:10:41', 1),
(4, 'Maria\r\n', 'Anchor\r\n', 'Desarrollador Web\r\n', 26, 850, 'mary@bignet.com\r\n', '2021-05-26 23:12:15', '2021-05-26 23:12:15', 1),
(5, 'Alfred\r\n', 'Fernandez\r\n', 'Programador\r\n', 31, 750, 'af@bignet.com\r\n', '2021-05-26 23:12:15', '2021-05-26 23:12:15', 1),
(6, 'Juan\r\n', 'Agüero\r\n', 'Programador\r\n', 36, 850, 'juan@bignet.com\r\n', '2021-05-26 23:13:46', '2021-05-26 23:13:46', 1),
(7, 'Eduardo\r\n', 'Sacan\r\n', 'Programador\r\n', 25, 850, 'eddi@bignet.com\r\n', '2021-05-26 23:13:46', '2021-05-26 23:13:46', 1),
(8, 'Alejandro\r\n', 'Nanda\r\n', 'Programador\r\n', 32, 700, 'alenanda@bignet.com\r\n', '2021-05-26 23:15:09', '2021-05-26 23:15:09', 1),
(9, 'Hernan\r\n', 'Rosso\r\n', 'Especialista Multimedia\r\n', 33, 900, 'hernan@bignet.com\r\n', '2021-05-26 23:15:09', '2021-05-27 00:39:17', 0),
(10, 'Pablo\r\n', 'Simon\r\n', 'Especialista Multimedia\r\n', 43, 850, 'ps@bignet.com\r\n', '2021-05-26 23:16:16', '2021-05-26 23:16:16', 1),
(11, 'Arturo\r\n', 'Hernandez\r\n', 'Especialista Multimedia\r\n', 32, 750, 'arturo@bignet.com\r\n', '2021-05-26 23:16:16', '2021-05-26 23:16:16', 1),
(12, 'Jimena\r\n', 'Cazado\r\n', 'Diseñador Web\r\n', 32, 1100, 'jimena@bignet.com\r\n', '2021-05-26 23:17:22', '2021-05-26 23:17:22', 1),
(13, 'Roberto\r\n', 'Luis\r\n', 'Administrador de sistemas\r\n', 35, 1000, 'roberto@bignet.com\r\n', '2021-05-26 23:17:22', '2021-05-26 23:17:22', 1),
(14, 'Daniel\r\n', 'Gutierrez\r\n', 'Administrador de sistemas\r\n', 34, 900, 'daniel@bignet.com\r\n', '2021-05-26 23:18:46', '2021-05-27 00:42:56', 1),
(15, 'Miguel\r\n', 'Harper\r\n', 'Ejecutivo de Ventas Senior\r\n', 36, 1200, 'miguel@bignet.com\r\n', '2021-05-26 23:18:46', '2021-05-26 23:18:46', 1),
(16, 'Monica\r\n', 'Sanchez\r\n', 'Ejecutivo de ventas\r\n', 30, 900, 'monica@bignet.com\r\n', '2021-05-26 23:19:55', '2021-05-26 23:19:55', 1),
(17, 'Alicia\r\n', 'Simlai\r\n', 'Ejecutivo de ventas\r\n', 27, 700, 'alicia@bignet.com\r\n', '2021-05-26 23:19:55', '2021-05-26 23:19:55', 1),
(18, 'Jose\r\n', 'Iriarte\r\n', 'Ejecutivo de ventas\r\n', 27, 720, 'jose@bignet.com\r\n', '2021-05-26 23:21:03', '2021-05-26 23:21:03', 1),
(19, 'Sabrina\r\n', 'Allende\r\n', 'Gerente de Soporte tecnico\r\n', 32, 2000, 'sabrina@bignet.com\r\n', '2021-05-26 23:21:03', '2021-05-26 23:21:03', 1),
(20, 'Pedro\r\n', 'Campeon\r\n', 'Gerente de finanzas\r\n', 36, 2200, 'pedro@bignet.com\r\n', '2021-05-26 23:22:05', '2021-05-26 23:22:05', 1),
(21, 'Mariano\r\n', 'Dharma\r\n', 'Presidente\r\n', 28, 3000, 'mariano@bignet.com\r\n', '2021-05-26 23:22:05', '2021-05-26 23:22:05', 1),
(22, 'Francisco', 'Perez', 'Programador', 26, 900, 'francisco@bignet.com', '2021-05-27 00:30:05', '2021-05-27 00:30:05', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id_emp`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id_emp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
