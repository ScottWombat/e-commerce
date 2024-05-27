import hashlib
from cryptography.fernet import Fernet

KEY = b'gcPZx4_UiXtw8Zl0dSCJnY02FKejaMQ-8a40RbLnO0M='

def get_fenec():
    return Fernet(KEY)

def encrypt_password(password):
    f = get_fenec()
    token = f.encrypt(bytes(password, encoding='utf-8'))
    return token.decode()

def decrypt_password(tek):
    f = get_fenec()
    return f.decrypt(bytes(tek, encoding='utf-8')).decode()

def hashed_password(password):
    salt = '5gz'
    password_salt = password+salt
    hashed = hashlib.md5(password_salt.encode())
    return hashed.hexdigest()
  