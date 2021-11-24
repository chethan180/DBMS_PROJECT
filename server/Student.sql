
create database Project;

use Project;

create table Student(S_Id varchar(11) PRIMARY KEY,Name varchar(50) NOT NULL,Email_Id varchar(50) NOT NULL UNIQUE,Batch char(4) NOT NULL,Vax_Status varchar(20),Mobile_No. varchar(10) NOT NULL UNIQUE);

create table Mess_Table(Date_of_Issue date NOT NULL,Remarks varchar(max));

create table Mess_Remarks(S_Id varchar(11), Rating varchar(3), Remarks varchar(max), _date date NOT NULL);

create table List_Complaints(S_Id varchar(11) NOT NULL,S_Room varchar(3) NOT NULL,S_Block varchar(20) NOT NULL,Type varchar(50),Comments varchar(max),Is_Solved boolean);

create table Warden_Updates(W_Id varchar(20) PRIMARY KEY, W_Name varchar(50) NOT NULL );