-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-02-2016 a las 23:18:51
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `pedapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `combos`
--

CREATE TABLE IF NOT EXISTS `combos` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id del combo',
  `name` varchar(255) NOT NULL COMMENT 'nombre del combo',
  `price` float NOT NULL DEFAULT '0' COMMENT 'precio del combo',
  `min_people` int(11) NOT NULL DEFAULT '0' COMMENT 'combo sugerido para un minimo de personas',
  `max_people` int(11) NOT NULL DEFAULT '0' COMMENT 'combo sugerido para un maximo de personas',
  `createdAt` datetime DEFAULT NULL COMMENT 'fecha de creacion',
  `updatedAt` datetime DEFAULT NULL COMMENT 'fecha de modifiacion',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `combos`
--

INSERT INTO `combos` (`id`, `name`, `price`, `min_people`, `max_people`, `createdAt`, `updatedAt`) VALUES
(1, 'Combo reunion', 300, 3, 5, '2016-02-27 00:00:00', '2016-02-27 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `combos_products`
--

CREATE TABLE IF NOT EXISTS `combos_products` (
  `combo_id` int(11) NOT NULL COMMENT 'id del combo',
  `product_id` int(11) NOT NULL COMMENT 'id del producto',
  PRIMARY KEY (`combo_id`,`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id de la orden',
  `user_id` int(11) NOT NULL COMMENT 'cliente de la orden',
  `code` varchar(255) NOT NULL COMMENT 'codigo "nice" de la orden para tracking',
  `summary` text NOT NULL COMMENT 'Resumen de la orden, es un json string que contiene los los productos de la orden, para efectos de si cambian los precios se mantenga informacion de que es lo que el usuario compro',
  `createdAt` datetime DEFAULT NULL COMMENT 'fecha de creacion',
  `updatedAt` datetime DEFAULT NULL COMMENT 'fecha de modifiacion',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders_items`
--

CREATE TABLE IF NOT EXISTS `orders_items` (
  `order_id` int(11) NOT NULL COMMENT 'id de la orden',
  `item_id` int(11) NOT NULL COMMENT 'id del item (combo o producto)',
  `model_item` varchar(255) NOT NULL COMMENT 'modelo (PRODUCT / ITEM)',
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id del producto',
  `name` varchar(255) NOT NULL COMMENT 'nombre del producto',
  `price` float NOT NULL DEFAULT '0' COMMENT 'precio del producto',
  `createdAt` datetime DEFAULT NULL COMMENT 'fecha de creacion',
  `updatedAt` datetime DEFAULT NULL COMMENT 'fecha de modifiacion',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id del usuario',
  `name` varchar(255) NOT NULL COMMENT 'nombre del usuario',
  `email` varchar(255) NOT NULL COMMENT 'email del usuario',
  `facebook_token` varchar(255) NOT NULL COMMENT 'token de facebook',
  `password` varchar(255) NOT NULL COMMENT 'password del usuario',
  `createdAt` datetime DEFAULT NULL COMMENT 'fecha de creacion',
  `updatedAt` datetime DEFAULT NULL COMMENT 'fecha de modifiacion',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
