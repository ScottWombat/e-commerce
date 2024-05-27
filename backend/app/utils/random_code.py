import random
def getRandomCode(fixed_digits):
    return randomAlphabet()+"-"+ str(randomNum(fixed_digits))

def randomNum(fixed_digits):
    return random.randrange(11111, 99999, fixed_digits)

def randomAlphabet():
    return chr(random.randint(ord('A'), ord('Z')))