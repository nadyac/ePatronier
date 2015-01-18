import httplib2
import json
import apiclient.discovery # pip install google-api-python-client

# Enter any person's name to search them on G+
Qry = "Jess the Dragoon" #temporarily Jess The Dragoon

# Enter your API key from https://code.google.com/apis/console
API_KEY = 'AIzaSyC4DoRYG_Z83aaAt9aiV6aFgQDslL1wrmI'

service = apiclient.discovery.build('plus', 'v1', http=httplib2.Http(), developerKey=API_KEY)

people_feed = service.people().search(query=Qry).execute()
print json.dumps(people_feed['items'], indent=1)
