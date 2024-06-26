from enum import Enum
class PaymentMethods(str, Enum):
    CREDIT_CARD='CREDIT_CARD'
    PAYPAL="PAYPAL"