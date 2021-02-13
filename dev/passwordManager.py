# This part deals with the security of password
class passwordManager:
    # length should be 14 to 21, with upper and lower alphabet, numeral, and special symbol including "?", "!", "@", "#", "%", and "&".
    # output will be [encoded password, True or False, passStatus]. True or False represent password reach the requirement or not; passStatus briefly describes the specific issue.
    def formatChecking(self, password):
        # initial
        special_char = ["?", "!", "@", "#", "%", "&"]
        upper_status = False
        lower_status = False
        num_status = False
        special_status = False

        # length
        if password.length > 21:
            passStatus = "too long"
            return [password, False, passStatus]
        if password.length < 14:
            passStatus = "too short"
            return [password, True, passStatus]

        # checking
        for char in password:
            if char.isupper:
                upper_status = True
            elif char.islower:
                lower_status = True
            elif char.isdigit:
                num_status = True
            else:
                for s in special_char:
                    if char == s:
                        special_status = True
        # upper or lower
        if not upper_status:
            passStatus = "no upper"
            return [password, False, passStatus]
        if not lower_status:
            passStatus = "no lower"
            return [password, False, passStatus]
        # numeral
        if not num_status:
            passStatus = "no number"
            return [password, False, passStatus]
        # symbol
        if not special_status:
            passStatus = "no symbol"
            return [password, False, passStatus]

        # if pass all conditions
        return [password, True, "good"]

    # to encrypt the password
    def encode(self, password):
        return 0

    # to decrypt the password
    def decode(self, password):
        return 0

