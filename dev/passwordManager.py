# This part deals with the security of password
class passwordManager:
    # length should be 14 to 21, with upper and lower alphabet, numeral, and special symbol including "?", "!", "@", "#", "%", and "&".
    # format of output is [password, True or False, passStatus]. True or False represent password reach the requirement or not; passStatus briefly describes the specific issue.
    def formatChecking(self, password):
        # initial, boolean status determine whether conditions of upper or less; numeral; symbol are established
        special_char = ["?", "!", "@", "#", "%", "&"]
        upper_status = False
        lower_status = False
        num_status = False
        special_status = False

        passStatus = ""
        # condition determine if the password pass all the requirement
        condition = True

        # length
        if len(password) > 21:
            if len(passStatus) > 0:
                passStatus += "; too long"
            elif len(passStatus) == 0:
                passStatus += "too long"
            condition = False
        if len(password) < 14:
            if len(passStatus) > 0:
                passStatus += "; too short"
            elif len(passStatus) == 0:
                passStatus += "too short"
            condition = False

        # Check if each letter meet the requirement
        for char in password:
            if char.isupper():
                upper_status = True
            elif char.islower():
                lower_status = True
            elif char.isdigit():
                num_status = True
            else:
                for s in special_char:
                    if char == s:
                        special_status = True
        # upper or lower.
        if not upper_status:
            if len(passStatus) > 0:
                passStatus += "; no upper"
            elif len(passStatus) == 0:
                passStatus += "no upper"
            condition = False
        if not lower_status:
            if len(passStatus) > 0:
                passStatus += "; no lower"
            elif len(passStatus) == 0:
                passStatus += "no lower"
            condition = False
        # numeral
        if not num_status:
            if len(passStatus) > 0:
                passStatus += "; no number"
            elif len(passStatus) == 0:
                passStatus += "no number"
            condition = False
        # symbol
        if not special_status:
            if len(passStatus) > 0:
                passStatus += "; no symbol"
            elif len(passStatus) == 0:
                passStatus += "no symbol"
            condition = False

        # final adjustment of passStatus
        if len(passStatus) > 0:
            passStatus += "."
        elif len(passStatus) == 0:
            passStatus += "good."

        if not condition:
            return [password, condition, passStatus]
        # if pass all conditions
        condition = True
        return [password, condition, passStatus]


    def test(self, password):
        print("Testing...")
        return passwordManager().formatChecking(password)


if __name__ == "__main__":
    # direct test
    print("Start direct test.")
    # passwords for test
    pass_list = ["1", "1234567890123456789012", "12345678901234", "A12345678901234", "a12345678901234", "!12345678901234", "1Aa!", "AaAaAaAaAaAaAa", "!Aa12345678901234"]
    for items in pass_list:
        print("Enter the password: " + items)
        print(passwordManager().test(items))
        print()
    print("----------done------------")

    # custom test
    if_test = input("Test your own password?\nYour answer(yes or no):")
    while if_test == "yes":
        print("Condition: length between 14-21; at least one special symbol; upper and lower alphabets; numerals.")
        test_password = input("Enter password(for test): ")
        print(passwordManager().test(test_password))
        print()
        if_test = input("Test your own password?\nYour answer(yes or no):")
        if if_test == "no":
            break


