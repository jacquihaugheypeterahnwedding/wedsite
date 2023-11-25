from guests import get_guests
from aws_account import setup, create_user


groups = get_guests()


(cognito_identity_client, user_pool_id) = setup()


for group in proups:
    username = 

    #create_user(cognito_identity_client, user_pool_id, username, email, password)

