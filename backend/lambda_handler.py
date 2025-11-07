from mangum import Mangum
from index import app

# Create the Lambda handler
handler = Mangum(app)