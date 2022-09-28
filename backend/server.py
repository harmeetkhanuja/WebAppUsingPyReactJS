# Import flask and datetime module for showing date and time
from flask import Flask
import datetime

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)


# Route for seeing a data
@app.route('/questions')
def get_time():

	# Returning an api for showing in reactjs
	return {
		"ID":"1",
		"Content":"Capital of India",
		"Option1":"Bombay",
		"Option2":"Delhi"
		}

	
# Running app
if __name__ == '__main__':
	app.run(debug=True)
