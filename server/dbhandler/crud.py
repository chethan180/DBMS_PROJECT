from flask import Flask,request,jsonify
import mysql.connector as mysql

db = mysql.connect(
    host = "localhost",
    user = "root",
    passwd = "hihello",
    database = "DBMS_Project"
)

print(db) 


cursor = db.cursor(buffered=True)

cursor.execute("show tables")
# hi = "INSERT INTO user(name , phno , dob) VALUES (%s,%s,%s)"
hi = "INSERT INTO List_Complaints(S_Id , S_Room ,S_Block , Type , Comments) VALUES (%s,%s,%s,%s,%s)"


print(cursor.fetchall())


class dbh :
    def complaint():
        if(request.content_type == 'application/json'):
            x = request.get_json()
            S_Id = x.get('S_Id')
            S_Room = x.get('S_Room')
            S_Block = x.get('S_Block')
            Type = x.get('Type')
            Comments = x.get('Comments')
            # Is_Solved = x.get('Is_Solved')
            data = (S_Id ,S_Room , S_Block , Type , Comments)
            cursor.execute(hi,data)
            db.commit()
            return jsonify("success")
        else:
            return jsonify('failed')
    # def add_user():
    #     if(request.content_type == 'application/json'):
    #         x = request.get_json()
    #         name = x.get('name')
    #         phno = x.get('phno')
    #         dob = x.get('dob')
    #         data = (name , phno , dob)
    #         cursor.execute(hi,data)
    #         db.commit()
    #         return jsonify("success")
    #     else:
    #         return jsonify('failed')
    # def update_user():
    #     if(request.content_type == 'application/json'):
    #         x = request.get_json()
    #         name = x.get('name')
    #         phnum = x.get('phno')
    #         dob = x.get('dob')
    #         cursor.execute("select * from user where phno IN ('%s')"%(phnum))
    #         cursor.execute("UPDATE user SET name = '%s' ,phno = '%s', dob = '%s' where phno IN ('%s')"%(name , phnum ,dob , phnum))
    #         db.commit()
    #         return jsonify("yes")



    # def delete_user():
    #     if(request.content_type == 'application/json'):
    #         x = request.get_json()
    #         name = x.get('name')
    #         phnum = x.get('phno')
    #         dob = x.get('dob')
    #         cursor.execute("delete from user where phno = '%s'"%(phnum))
    #         db.commit()
    #         return jsonify("yes")
    # def display_user():
    #     cursor.execute("select *  from user")
    #     data1 = cursor.fetchall()
    #     return jsonify(data1)



# print(cursor.fetchall())


# class dbh :
#     def complaint():
#         print(request)
#         if(request.content_type == 'application/json'):
#             return request
#             print(request)
#             x = request.get_json()
#             S_Id = x.get('S_Id')
#             S_Room = x.get('S_Room')
#             S_Block = x.get('S_Block')
#             Type = x.get('Type')
#             Comments = x.get('Comments')
#             data = (S_Id ,S_Room , S_Block , Type , Comments)
#             cursor.execute(hi,data)
#             db.commit()
#             return jsonify("success")
#         else:
#             return jsonify(request)
#             return jsonify('failed')
