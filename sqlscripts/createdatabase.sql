
CREATE TABLE IF NOT EXISTS `user`(
    `isAdmin` boolean DEFAULT 0,
    `first_name` varchar(255) NOT NULL,
    `last_name` varchar(255) NOT NULL,
    `user_name` varchar(10) NOT NULL,
    `password` varchar(12) NOT NULL,
     PRIMARY KEY (`user_name`)	
)ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;


CREATE TABLE IF NOT EXISTS `patient`(
    `health_card_no` varchar(12) NOT NULL,
    `first_name` varchar(255) NOT NULL,
    `last_name` varchar(255) NOT NULL,
    `sex` varchar(6) NOT NULL,
    `street` varchar(255) NOT NULL,
    `city` varchar(255) NOT NULL,
    `province` varchar(255) NOT NULL,
    `postal_code` varchar(6) NOT NULL,
    `email` varchar(255) NOT NULL,
    `birth_date` DATE NOT NULL,
    `phone` int(10) NOT NULL,  
     PRIMARY KEY (`health_card_no`)
    ) ENGINE=InnoDB  DEFAULT CHARSET=latin1;
    
CREATE TABLE IF NOT EXISTS `PatientRevisionHistory`(
`revision_id` int(5) NOT NULL AUTO_INCREMENT,
`health_card_no` varchar(12) NOT NULL,
`user_name` varchar(255) NOT NULL, 
`date_modified` DATE NOT NULL, 
`attribute_modified` varchar(255) NOT NULL,
PRIMARY KEY (`revision_id`),
FOREIGN KEY(`user_name`) REFERENCES user(`user_name`),
FOREIGN KEY(`health_card_no`) REFERENCES patient(`health_card_no`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS `billing`(
    `billing_id` int(5) NOT NULL AUTO_INCREMENT,
    `health_card_no` varchar(12) NOT NULL,
    `creditcard_no` int(16) NOT NULL,
    `cvc` int(3) NOT NULL,
    `card_expiry` DATE NOT NULL,
PRIMARY KEY (`billing_id`),
FOREIGN KEY(`health_card_no`) REFERENCES patient(`health_card_no`)
)ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS `immunization`(
   `immunization_id` int(5) NOT NULL AUTO_INCREMENT,
    `health_card_no` varchar(12) NOT NULL,
    `vaccine_name` varchar(255) NOT NULL,
    `vaccination_date` DATE NOT NULL,
PRIMARY KEY (`immunization_id`),
FOREIGN KEY(`health_card_no`) REFERENCES patient(`health_card_no`)
)ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;