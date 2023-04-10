DROP TABLE IF EXISTS `trainee`.`ishausernext`;
CREATE TABLE  `trainee`.`ishausernext` (
  `recid` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` char(6) CHARACTER SET ucs2 DEFAULT NULL,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `hobbies` varchar(255) DEFAULT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `country` varchar(30) DEFAULT NULL,
  `status` char(1) DEFAULT 'A',
  `dateadded` datetime DEFAULT NULL,
  `dateupdated` datetime DEFAULT NULL,
  `endeffdt` datetime DEFAULT NULL,
  `stt` char(1) NOT NULL DEFAULT 'A',
  PRIMARY KEY (`recid`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=latin1;
