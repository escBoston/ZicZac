import hashlib
import uuid
import random

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
        password_encrypted += str(hash_round)
        return [salt, password_encrypted, hash_round]

    # to check if the password is correct for log in
    def check_password(self, password_login, salt, hash_round, password_encrypted):
        password_test = hashlib.sha3_512(str(password_login).encode('utf-8') + str(salt).encode('utf-8')).hexdigest()
        for i in range(hash_round):
            password_test = hashlib.sha3_512(str(password_test).encode('utf-8')).hexdigest()
        password_test += str(hash_round)
        if password_test == password_encrypted:
            return True
        return False

    # test
    def test(self, password_signup, password_login):
        raw_list = passwordHash().encrypt(password_signup)
        salt = raw_list[0]
        password_encrypted = raw_list[1]
        hash_round = raw_list[2]
        print("Salt: " + salt)
        print("Hashing rounds: " + str(hash_round))
        print("Encrypted password: " + password_encrypted)
        print("Checking password: " + str(passwordHash().check_password(password_login, salt, hash_round, password_encrypted)))

if __name__ == "__main__":
    password_signup = input("Enter your password for sign up: ")
    password_login = input("Enter your password for login in: ")
    passwordHash().test(password_signup, password_login)

