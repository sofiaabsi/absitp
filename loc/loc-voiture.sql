-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Ven 24 Novembre 2023 à 15:02
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `loc-voiture.`
--

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE IF NOT EXISTS `clients` (
  `NCIN` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `tel` varchar(50) NOT NULL,
  `date_naissance` date NOT NULL,
  `num_permis` varchar(50) NOT NULL,
  PRIMARY KEY (`NCIN`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `clients`
--

INSERT INTO `clients` (`NCIN`, `email`, `nom`, `prenom`, `adresse`, `tel`, `date_naissance`, `num_permis`) VALUES
('GYGHGYY', 'hajar@gmail.com', 'Jira', 'Hajar', 'Lyon', '0712485623', '2005-11-10', 'IYGIYGIUY8'),
('VHYhvb1', 'sofiaelmi@gmail.com', 'El Missaoui', 'Sofia', 'Paris ', '0578451236', '2002-11-04', 'GFFYT5');

-- --------------------------------------------------------

--
-- Structure de la table `laucation`
--

CREATE TABLE IF NOT EXISTS `laucation` (
  `num_location` int(11) NOT NULL AUTO_INCREMENT,
  `prix_location` float NOT NULL,
  `duree` int(11) NOT NULL,
  `caution` float NOT NULL,
  `date_location` date NOT NULL,
  `immatriculation` varchar(50) NOT NULL,
  `NCIN` varchar(50) NOT NULL,
  PRIMARY KEY (`num_location`),
  KEY `immatriculation` (`immatriculation`,`NCIN`),
  KEY `NCIN` (`NCIN`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `laucation`
--

INSERT INTO `laucation` (`num_location`, `prix_location`, `duree`, `caution`, `date_location`, `immatriculation`, `NCIN`) VALUES
(1, 150, 12, 300, '2023-11-24', 'VYFVFHYu', 'GYGHGYY'),
(2, 30, 18, 300, '2023-11-20', 'GGCTCY', 'VHYhvb1');

-- --------------------------------------------------------

--
-- Structure de la table `voiture`
--

CREATE TABLE IF NOT EXISTS `voiture` (
  `immatriculation` varchar(50) NOT NULL,
  `marque` varchar(50) NOT NULL,
  `couleur` varchar(50) NOT NULL,
  `nbre-porte` int(11) NOT NULL,
  `kilometrage` int(11) NOT NULL,
  `boite_vitesse` varchar(50) NOT NULL,
  `energie` varchar(50) NOT NULL,
  `puissance` int(11) NOT NULL,
  PRIMARY KEY (`immatriculation`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `voiture`
--

INSERT INTO `voiture` (`immatriculation`, `marque`, `couleur`, `nbre-porte`, `kilometrage`, `boite_vitesse`, `energie`, `puissance`) VALUES
('GGCTCY', 'clio', 'ROUGE', 4, 1258, 'auto', 'hibride', 1000),
('VYFVFHYu', 'JEEP', 'BLEU', 2, 2587, 'MANUEL', 'ESENCE', 2000);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `laucation`
--
ALTER TABLE `laucation`
  ADD CONSTRAINT `laucation_ibfk_2` FOREIGN KEY (`immatriculation`) REFERENCES `voiture` (`immatriculation`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `laucation_ibfk_1` FOREIGN KEY (`NCIN`) REFERENCES `clients` (`NCIN`) ON DELETE CASCADE ON UPDATE CASCADE;
