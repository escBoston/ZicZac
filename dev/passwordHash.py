import hashlib
import uuid
class passwordHash:
    # to encrypt the password by using salt and hash functions. Salt and encrypted password should be both stored on a file
    def encrypt(self, password_signup):
        salt = uuid.uuid4().hex
        password_encrypted = hashlib.sha256(str(password_signup).encode('utf-8') + str(salt).encode('utf-8')).hexdigest()
        return [salt, password_encrypted]

    # to check if the password is correct for log in
    def check_password(self, password_loginin, salt, password_encrypted):
        if password_encrypted == hashlib.sha256(str(password_loginin).encode('utf-8') + str(salt).encode('utf-8')).hexdigest():
            return True
        return False

    # test
    def test(self, password_signup, password_loginin):
        raw_list = passwordHash().encrypt(password_signup)
        salt = raw_list[0]
        password_encrypted = raw_list[1]
        print("Salt: " + salt)
        print("Encrypted password: " + password_encrypted)
        print("Checking password: " + str(passwordHash().check_password(password_loginin, salt, password_encrypted)))

if __name__ == "__main__":
    password_signup = input("Enter your password for sign up: ")
    password_loginin = input("Enter your password for login in: ")
    passwordHash().test(password_signup, password_loginin)

