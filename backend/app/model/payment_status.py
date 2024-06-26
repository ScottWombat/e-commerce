from enum import Enum
class PaymentStatus(str, Enum):
    CREATED='PENDING'
    PROCESSING='REFUNDED'
    FAILED="FAILED"
    COMPLETED="COMPLETED"