from __future__ import print_function

import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

from creds import get_creds
from person import Person
from group import Group

# If modifying these scopes, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']



speadsheet_id = '1-IMyH7sfM4YJOAxa_GiwGRgFSLkaRuFkwtDvov8U6Rc'
range_name = 'Contact!A2:P'




def get_guests():

    try:
        creds = get_creds()
        service = build('sheets', 'v4', credentials=creds)


        # Call the Sheets API
        sheet = service.spreadsheets()
        result = sheet.values().get(spreadsheetId=speadsheet_id,
                                    range=range_name).execute()

        values = result.get('values', [])


        if not values:
            print('No data found.')
            return

        group = None
        groups = []
        for row in values:
            house_name = row[0]
            guest_name = row[1]
            phone = row[2]
            email = row[3]
            address = row[4]
            us_citizen = row[5]
            no_foreign = row[6]
            haughey = row[7]
            ayers = row[8]
            ahn = row[9]
            friend = row[10]
            family_friend = row[11]
            local = row[12]
            english = row[13]
            korean = row[14]
            child =  row[15]


            person = Person(
                house_name=house_name,
                name=guest_name,
                phone=phone,
                email=email,
                address=address,
                us_citizen=us_citizen,
                no_foreign=no_foreign,
                haughey=haughey,
                ahn=ahn,
                ayers=ayers,
                friend=friend,
                family_friend=family_friend,
                local=local,
                english=english,
                korean=korean,
                child=child
            )

            if person.house_name == '':
                group.people.append(person)
            else:
                if group is not None:
                    groups.append(group)
                group = Group(
                    name=house_name,
                    people=[person],
                    email=email,
                    alternate_emails=[],
                    phone=phone,
                    alternate_phones=[],
                    address=address,
                    main_person=person
                )

        for group in groups:
            print(group)

    except HttpError as err:
        print(err)

    return groups


