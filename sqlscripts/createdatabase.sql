
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


INSERT INTO user values (false, 'mark', 'zuckerberg','mark_zuck','facebook');
INSERT INTO user values (true, 'elon', 'musk','alien_musk','tesla');
INSERT INTO user values (false, 'warren', 'buffet','money_man','berkshire');
INSERT INTO user values (false, 'jeff', 'bezos','richestman','amazon');

INSERT INTO patient values ('aaaaa-1','jena','walsh','female','123fakestreet1','toronto','ON','xx1xx2','patient1@gmail.com','19920202','1122334455');
INSERT INTO patient values ('aaaaa-2','tory','lanez','male','123fakestreet2','brampton','ON','xx1xx3','fargo@gmail.com','19920302','1122334466');
INSERT INTO patient values ('aaaaa-3','drake','graham','male','123fakestreet3','toronto','ON','xx2xx3','ovo@gmail.com','19900302','1122334444');
INSERT INTO patient values ('aaaaa-4','offset','migos','male','123fakestreet5','caledon','ON','xx2xx1','migos@gmail.com','19910302','1122331144');


INSERT INTO billing values ('00001', 'aaaaa-1', '123456','123','20210303');
INSERT INTO billing values (Null, 'aaaaa-2', '123457','124','20210403');
INSERT INTO billing values (Null, 'aaaaa-3', '123458','125','20220303');
INSERT INTO billing values (Null, 'aaaaa-4', '123958','225','20120903');

INSERT INTO immunization values ('00001','aaaaa-1','measles','20120101');
INSERT INTO immunization values (Null,'aaaaa-2','polio','20161101');
INSERT INTO immunization values (Null,'aaaaa-3','varicella','2001101');
INSERT INTO immunization values (Null,'aaaaa-4','polio','20171101');

INSERT INTO patientrevisionhistory values ('00001','aaaaa-1','mark_zuck','20090102','email');
INSERT INTO patientrevisionhistory values (NULL,'aaaaa-2','alien_musk','20090402','phone');
INSERT INTO patientrevisionhistory values (NULL,'aaaaa-3','money_man','20090402','sex');
INSERT INTO patientrevisionhistory values (NULL,'aaaaa-4','money_man','20150402','street');



