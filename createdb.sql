use acc_helper;
CREATE TABLE Tokens (
    id INT PRIMARY KEY AUTO_INCREMENT,
    createdAt DATETIME,
    token VARCHAR(200) CHARACTER SET 'utf8',
    UserId Int,
        FOREIGN KEY (UserId)
        REFERENCES Users (id)
        ON DELETE CASCADE
);

CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    createdAt DATETIME,
    password VARCHAR(100) CHARACTER SET 'utf8',
    email VARCHAR(70)
);

CREATE TABLE Orgs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    createdAt DATETIME,
    UserId INT,
    orgname varchar(200) CHARACTER SET 'utf8',
    inn VARCHAR(12),
    kpp VARCHAR(10) CHARACTER SET 'utf8',
    ogrn VARCHAR(13),
    bank varchar(100) CHARACTER SET 'utf8',
    bik VARCHAR(20),
    korr VARCHAR(20),
    acc VARCHAR(20),
    address varchar(150) CHARACTER SET 'utf8',
    director varchar(100) CHARACTER SET 'utf8',
    position varchar(50) CHARACTER SET 'utf8',
    okopf VARCHAR(15),
    okfs VARCHAR(15),
    okved VARCHAR(15) CHARACTER SET 'utf8',
    okpo VARCHAR(15),
    opf varchar(200) CHARACTER SET 'utf8',
    FOREIGN KEY (UserId)
        REFERENCES Users (id)
        ON DELETE CASCADE
);

CREATE TABLE Counterparties (
    id INT PRIMARY KEY AUTO_INCREMENT,
    createdAt DATETIME,
    UserId INT,
    OrgsId int,
    orgname varchar(200) CHARACTER SET 'utf8',
    inn VARCHAR(12),
    kpp VARCHAR(10) CHARACTER SET 'utf8',
    ogrn VARCHAR(13),
    bank varchar(100) CHARACTER SET 'utf8',
    bik VARCHAR(20),
    korr VARCHAR(20),
    acc VARCHAR(20),
    address varchar(150) CHARACTER SET 'utf8',
    director varchar(100) CHARACTER SET 'utf8',
    position varchar(50) CHARACTER SET 'utf8',
    okopf VARCHAR(15),
    okfs VARCHAR(15),
    okved VARCHAR(15) CHARACTER SET 'utf8',
    okpo VARCHAR(15),
    opf varchar(200) CHARACTER SET 'utf8',
    FOREIGN KEY (OrgsId)
        REFERENCES Orgs (id)
        ON DELETE CASCADE
);

CREATE TABLE Sales (
    id INT PRIMARY KEY AUTO_INCREMENT,
    createdAt DATETIME,
    CounterpartyId INT,
    orgname VARCHAR(100) CHARACTER SET 'utf8',
    inn VARCHAR(12),
    kpp VARCHAR(10),
    bank VARCHAR(100) CHARACTER SET 'utf8',
    bik VARCHAR(20),
    korr VARCHAR(20),
    acc VARCHAR(20),
    address VARCHAR(150) CHARACTER SET 'utf8',
    opf varchar(200) CHARACTER SET 'utf8',
    cl_orgname VARCHAR(150) CHARACTER SET 'utf8',
    cl_inn VARCHAR(12),
    cl_kpp VARCHAR(10),
    cl_bank VARCHAR(100) CHARACTER SET 'utf8',
    cl_bik VARCHAR(20),
    cl_korr VARCHAR(20),
    cl_acc VARCHAR(20),
    cl_address VARCHAR(150) CHARACTER SET 'utf8',
	waybill_date timestamp,
	nds decimal(15, 2),
	summ decimal(15, 2),
	total decimal (15, 2),
    cl_opf varchar(100) CHARACTER SET 'utf8',
    OrgId int,
    cl_waybill_number varchar(50) CHARACTER SET 'utf8',
    FOREIGN KEY (CounterpartyId)
        REFERENCES Counterparties (id)
        ON DELETE CASCADE,
            FOREIGN KEY (OrgId)
        REFERENCES Orgs (id)
        ON DELETE CASCADE
);

CREATE TABLE Purchases (
    id INT PRIMARY KEY AUTO_INCREMENT,
    createdAt DATETIME,
    CounterpartyId INT,
    orgname VARCHAR(100) CHARACTER SET 'utf8',
    inn VARCHAR(12),
    kpp VARCHAR(10),
    bank VARCHAR(100) CHARACTER SET 'utf8',
    bik VARCHAR(20),
    korr VARCHAR(20),
    acc VARCHAR(20),
    address VARCHAR(150) CHARACTER SET 'utf8',
    opf varchar(200) CHARACTER SET 'utf8',
    cl_orgname VARCHAR(100) CHARACTER SET 'utf8',
    cl_inn VARCHAR(12),
    cl_kpp VARCHAR(10),
    cl_bank VARCHAR(100) CHARACTER SET 'utf8',
    cl_bik VARCHAR(20),
    cl_korr VARCHAR(20),
    cl_acc VARCHAR(20),
    cl_address VARCHAR(150) CHARACTER SET 'utf8',
  	waybill_date timestamp,
	nds decimal(15, 2),
	summ decimal(15, 2),
	total decimal (15, 2),
    cl_opf varchar(100) CHARACTER SET 'utf8',
    OrgId int,
    cl_waybill_number varchar(50) CHARACTER SET 'utf8',
    FOREIGN KEY (CounterpartyId)
        REFERENCES Counterparties (id)
        ON DELETE CASCADE,
            FOREIGN KEY (OrgId)
        REFERENCES Orgs (id)
        ON DELETE CASCADE
);


CREATE TABLE Sales_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    createdAt DATETIME,
    SaleId INT,
    item_number INT,
    nomenclature TEXT CHARACTER SET 'utf8',
    quantity INT,
    price DECIMAL(15 , 2 ),
    summ DECIMAL(15 , 2 ),
    nds_percent DECIMAL(2 , 1 ),
    nds DECIMAL(15 , 2 ),
    total DECIMAL(15 , 2 ),
    FOREIGN KEY (SaleId)
        REFERENCES Sales (id)
        ON DELETE CASCADE
);

CREATE TABLE Purchases_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    createdAt DATETIME,
    PurchaseId INT,
    item_number INT,
    nomenclature TEXT CHARACTER SET 'utf8',
    quantity INT,
    price DECIMAL(15 , 2 ),
    summ DECIMAL(15 , 2 ),
    nds_percent DECIMAL(2 , 1 ),
    nds DECIMAL(15 , 2 ),
    total DECIMAL(15 , 2 ),
    FOREIGN KEY (PurchaseId)
        REFERENCES Purchases (id)
        ON DELETE CASCADE
);