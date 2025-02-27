import os
print(os.getcwd())

import csv
import mysql.connector

# Kết nối đến cơ sở dữ liệu MySQL
db = mysql.connector.connect(
    host="127.0.0.1",
    port=3306,  # Chỉnh sửa ở đây
    user="root",
    password="0000",
    database="home"
)

cursor = db.cursor()

# Hàm để tự động chèn dữ liệu từ CSV vào bảng
def import_csv_to_table(csv_file, table_name):
    with open(csv_file, 'r', newline='', encoding='utf-8-sig') as csvfile:
        reader = csv.DictReader(csvfile)
        columns = reader.fieldnames
        placeholders = ', '.join(['%s'] * len(columns))
        sql = f"INSERT INTO {table_name} ({', '.join(columns)}) VALUES ({placeholders})"
        
        for row in reader:
            cursor.execute(sql, tuple(row[col] for col in columns))

# Nhập dữ liệu từ products.csv
# import_csv_to_table('products.csv', 'Products')

# Nhập dữ liệu từ content.csv
import_csv_to_table('THM list.csv', 'new_home'  )

# Nhập dữ liệu từ doses.csv
# import_csv_to_table('doses.csv', 'doses')

# Xác nhận thay đổi
db.commit()

# Đóng kết nối
cursor.close()
db.close()

print("Data imported successfully!")
