from fastapi import Request,Response, HTTPException
from fastapi.responses import JSONResponse, Response
from starlette.middleware.base import BaseHTTPMiddleware, RequestResponseEndpoint
from typing import Any, Coroutine
class SignatureMiddleware(BaseHTTPMiddleware):
    async def dispatch(
            self,
            request: Request,
            call_next: RequestResponseEndpoint
        ) -> Coroutine[Any, Any, Response]:
        if request.scope['path'] in ['/docs', '/openapi.json']:
            return await call_next(request)
        if request.scope['path'] == '/api/my_var':
            required_headers = ['X-Signature', 'X-identifier']
            headers = [True for x in required_headers if x in request.headers]
            if len(headers) < len(required_headers):
                return JSONResponse(
                    status_code=409,
                    content={'error': f'Header {required_headers} is missing'}
                )
            encrypted_message = request.headers['X-identifier']
            signature = request.headers['X-signature']
            # you can add any logic to validate encrypted message and signature
            print(encrypted_message, signature)
        response = await call_next(request)
        return response