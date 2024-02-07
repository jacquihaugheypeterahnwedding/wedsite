import json
 
# Opening JSON file
f = open('logins.json')
 
# returns JSON object as 
# a dictionary
data = json.load(f)
 
# Iterating through the json
# list
items = []
for i in data['data']['listLogins']['items']:
    items.append(i)
 

items = sorted(items, key=lambda k: k['createdAt'])

for i in items:
    print(i)

# Closing file
f.close()
