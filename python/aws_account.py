from guests import get_guests
from pathlib import Path

import json

import boto3
from botocore.exceptions import NoCredentialsError



AWS_DEFAULT_REGION = 'us-east-1'

"""

how to create the user auth in amplify studio
1. set up authentication
2. remove email login
3. add username login
4. remove passowrd protection options



"""


def create_user(cognito_identity_client, user_pool_id, username, email, password):
    u = cognito_identity_client.admin_create_user(UserPoolId=user_pool_id,
        Username=username,
        UserAttributes=[
            {
                'Name': 'email',
                'Value': email
            },
            {
                'Name': 'email_verified',
                'Value': 'true'
            }
        ],
        ValidationData=[

        ],
        TemporaryPassword=password,
        MessageAction='SUPPRESS'
        )

    response = cognito_identity_client.admin_set_user_password(
        UserPoolId=user_pool_id,
        Username=username,
        Password=password,
        Permanent=True
    )
    print(response)


def main():
    #groups = get_guests()

    json_file = open("../creds/aws.json")

    a = json.load(json_file)
    access_key_id = a["access_key_id"]
    secret_access_key = a["secret_access_key"]
    user_pool_id = a["user_pool_id"]
    default_region = "us-east-1"


    # Create an authenticated session using Amazon Cognito
    session = boto3.Session(
        aws_access_key_id=access_key_id,
        aws_secret_access_key=secret_access_key,
        region_name=default_region,
    )
    cognito_identity_client = session.client('cognito-idp')


    print(cognito_identity_client)

    username = 'jacqui.nerd@gmail.com'
    email = "jacqui.nerd@gmail.com"
    password = "Password1$"

    create_user(cognito_identity_client, user_pool_id, username, email, password)


    


if __name__ == '__main__':
    main()