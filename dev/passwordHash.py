import hashlib
import uuid
import random
from passlib.hash import pbkdf2_sha512


# The passlib package should be installed before running

class passwordHash:
    # to encrypt the password by using salt and hash functions. Salt, encrypted password, and hash_round should be both stored on a file
    def encrypt(self, password_signup):
        salt = uuid.uuid4().hex
        hash_round = round(random.random() * 1000)
        if hash_round < 50:
            hash_round = 50
        password_encrypted = hashlib.sha3_512(str(password_signup).encode('utf-8') + str(salt).encode('utf-8')).hexdigest()
        for i in range(hash_round):
            password_encrypted = hashlib.sha3_512(str(password_encrypted).encode('utf-8')).hexdigest()

        # pbkdf2
        password_encrypted = pbkdf2_sha512.hash(password_encrypted, rounds=hash_round, salt=bytes(salt, encoding='utf8'))

        password_encrypted += "[(rd)]"
        password_encrypted += str(hash_round)

        return [salt, password_encrypted]

    # to check if the password is correct for log in
    def check_password(self, password_loginin, salt, password_encrypted):
        temp_password = password_encrypted.split("[(rd)]")
        hash_round = int(temp_password[1])
        password_test = hashlib.sha3_512(str(password_loginin).encode('utf-8') + str(salt).encode('utf-8')).hexdigest()
        for i in range(hash_round):
            password_test = hashlib.sha3_512(str(password_test).encode('utf-8')).hexdigest()
        # pbkdf2
        password_test = pbkdf2_sha512.hash(password_test, rounds=hash_round, salt=bytes(salt, encoding='utf8'))
        password_test += "[(rd)]"
        password_test += str(hash_round)
        if password_test == password_encrypted:
            return True
        return False


    # test
    def test(self, password_signup, password_loginin):
        raw_list = passwordHash().encrypt(password_signup)
        salt = raw_list[0]
        password_encrypted = raw_list[1]
        temp_password = password_encrypted.split("[(rd)]")
        hash_round = int(temp_password[1])
        print("Hash round: " + str(hash_round))
        print("Salt: " + salt)
        print("Encrypted password: " + password_encrypted)
        print("Checking password: " + str(passwordHash().check_password(password_loginin, salt, password_encrypted)))

if __name__ == "__main__":
    password_signup = input("Enter your password for sign up: ")
    password_loginin = input("Enter your password for login in: ")
    passwordHash().test(password_signup, password_loginin)
