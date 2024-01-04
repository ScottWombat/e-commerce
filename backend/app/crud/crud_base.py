from datetime import datetime
class CrudBase:
    def __init__(self, db_name: str, collection_name: str) -> None:
        self.client = client.get_client()
        self.db = self.client[db_name]
        self.collection = self.db[collection_name]
        self._id_field = '_id'
        self._base_date_fields = ['date_created']

    async def create(self, data: dict) -> dict:
        data = self._assign_date_fields(data)
        data = await self.collection.insert_one(data)
        return data

    async def fetch_by_id(self, item_id: Union[ObjectId, str]) -> dict:
        item = await self.collection.find_one({self._id_field: ObjectId(item_id)})
        return item

    async def _assign_date_fields(self, data: dict) -> dict:
        utc_now = datetime.utcnow()
        data.update({date_field: utc_now for date_field in self._base_date_fields})
        return data