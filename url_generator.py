from app import app
from os import getenv

port = getenv('PORT', '5000')
if __name__ == "__main__":
    app.run(debug=False, host='0.0.0.0', port=port, threaded=True)