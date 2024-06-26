from enum import Enum
class OrdertStatus(str, Enum):
    CREATED='CREATE'
    PROCESSING='PROCESSING'
    CANCELLED="CANCELLED"
    COMPLETE="COMPLETE"