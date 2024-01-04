
def itemResponseEntity(item) -> dict:
    return {
        "name": item["name"],
        "description": item["description"],
        "created_at": item["created_at"],
        "updated_at": item["updated_at"]
    }