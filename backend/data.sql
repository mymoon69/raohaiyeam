
CREATE TABLE user (
  user_id int(10) unsigned NOT NULL AUTO_INCREMENT,
  first_name varchar(25) NOT NULL,
  last_name varchar(25) NOT NULL,
  ID_card varchar(13),
  phone varchar(10) NOT NULL,
  email varchar(40) NOT NULL,
  PRIMARY KEY (user_id)
) ;


CREATE TABLE logIn (
  login_id int(10) unsigned NOT NULL AUTO_INCREMENT,
  user_id int(10) unsigned NOT NULL,
  username varchar(25) NOT NULL,
  password varchar(25) NOT NULL,
  role enum('user', 'admin') NOT NULL DEFAULT 'user',
  PRIMARY KEY (login_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
);

CREATE TABLE `phone` (
  `phone_id` int(10) unsigned NOT NULL,
  `img` varchar(255) NOT NULL,
  `brand` varchar(25) NOT NULL,
  `model` varchar(255) NOT NULL,
  `rent` varchar(255) NOT NULL,
  `deposit` int (255) NOT NULL,
  PRIMARY KEY (`phone_id`)
);

CREATE TABLE `booking` (
  `booking_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `phone_id` int(10) unsigned NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`booking_id`),
  FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE,
  FOREIGN KEY (phone_id) REFERENCES phone(phone_id) ON DELETE CASCADE
);

CREATE TABLE `payment` (
  `payment_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `date` date NOT NULL,
  `slip` varchar(255) NOT NULL,
  `total` int(10) NOT NULL,
  PRIMARY KEY (`payment_id`),
  FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE
);

INSERT INTO `user` (`user_id`, `first_name`, `last_name`, `ID_card`, `email`, `phone`) VALUES
(1, 'อารีญา', 'สายทอง์', 809932094145, 'areya_saitong@gmail.com', '0955835690'),
(2, 'กานต์รวี', 'ศรีธาตุ', 239900048764, 'kob89_mainum@gmail.com', '0896758314'),
(3, 'ภารัณ', 'พิสมัย', 332271213570, 'wegoxi9162@gmail.com', '0995523697');

INSERT INTO `login`(`login_id`, `user_id`, `username`, `password`, `role`) VALUES
(1,1,'tracepretzel','password123','user'),
(2,2,'bagelscience','password456','admin'),
(3,3,'ferretnetherrack','password789','user');


INSERT INTO `phone`(`phone_id`, `img`, `brand`, `model`, `rent`, `deposit`) VALUES
(1,'static/img/Samsung Galaxy S20 Ultra.png','Samsung','Samsung Galaxy S20 Ultra',2500,1000),
(2,'static/img/Samsung Galaxy S21 Ultra.png','Samsung','Samsung Galaxy S21 Ultra',2500,1000),
(3,'static/img/Samsung Galaxy S22 Ultra.png','Samsung','Samsung Galaxy S22 Ultra',2500,1000),
(4,'static/img/Samsung Galaxy S23 Ultra.png','Samsung','Samsung Galaxy S23 Ultra',2500,1000),
(5,'static/img/HUAWEI P40 Pro+.png','HUAWEI','HUAWEI P40 Pro+',1500,500),
(6,'static/img/HUAWEI P50 Pro.png','HUAWEI','HUAWEI P50 Pro',1500,500),
(7,'static/img/HUAWEI Mate40 Pro.png','HUAWEI','HUAWEI Mate40 Pro',1500,500),
(8,'static/img/HUAWEI Mate50 Pro.png','HUAWEI','HUAWEI Mate50 Pro',1500,500),
(9,'static/img/IPhone 13 Pro.png','IPhone','IPhone 13 Pro.png',1500,500),
(10,'static/img/IPhone 13 Pro Max.png','IPhone','IPhone 13 Pro Max.png',1500,500),
(11,'static/img/IPhone 14 Pro.png','IPhone','IPhone 14 Pro.png',1500,500),
(12,'static/img/IPhone 134 ProMax.png','IPhone','IPhone 14 Pro Max.png',1500,500);


