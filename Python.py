import serial
import pymysql

ser = serial.Serial('/dev/tty.usbmodem1421', 9600)

def recieveData():
    data = ser.readline()

    return (data)

class cDatabase :
    def __init__(self, host, user, passwd, dbname) :
        self.db = onn = pymysql.connect(host=host, port=3306, user=user, passwd=passwd,db=dbname, charset ='utf8')
        self.cursor = self.db.cursor()

    def print_db_version(self):
        self.cursor.execute("select version()")
        row = self.cursor.fetchone()
        print("server version : %s"%row[0])

    def db_select_row(self, query):
        self.cursor.execute(query)
        row = self.cursor.fetchone()
        return row


    def db_command(self, query):
        try :
            self.cursor.execute(query)
            return 1
        except :
            return 0

    def db_close(self):
        self.cursor.close()
        self.db.close()


if __name__ == "__main__" :
    conn = pymysql.connect(host='202.30.23.51', port=3306, user='sap15B', passwd='sap15B!',db='SOCIAL_APP_PROJECT_B')
    cur = conn.cursor(pymysql.cursors.DictCursor)
    cur.execute("select version()")

    while True:
        data = recieveData()
        if data[2] == 10:
            #conn = pymysql.connect(host='202.30.23.51', port=3306, user='sap15B', passwd='sap15B!',db='SOCIAL_APP_PROJECT_B')
            #cur = conn.cursor(pymysql.cursors.DictCursor)
            cur.execute("update c_cafe set c_seats = 35 where c_num = 1")
            conn.commit()
            # cur.close()
            # conn.close()
        else:
            #conn = pymysql.connect(host='202.30.23.51', port=3306, user='sap15B', passwd='sap15B!',db='SOCIAL_APP_PROJECT_B')
            #cur = conn.cursor(pymysql.cursors.DictCursor)
            cur.execute("update c_cafe set c_seats = 36 where c_num = 1")
            conn.commit()



