from fastapi import APIRouter
from fastapi import status, File, UploadFile

router = APIRouter(
    prefix="/file",
    tags=["File"],
    responses={404: {"description": "Not found"}},
)

@router.get("/upload/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def uploadFile(id: str, file: UploadFile = File(...),response_model_exclude_none=True):
    return 'd'