if __name__ == "__main__":
    import uvicorn
    uvicorn.run('app.app:app', host="127.0.0.1", port=5000, reload=True, workers=1, log_level='debug', access_log=True)